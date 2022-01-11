import { EventEmitter } from 'events'
import { isTokenExpired } from './jwtHelper'
import auth0 from 'auth0-js';
import { getUser } from './config';
const endpoint = require('./endpoint');
export default class AuthService extends EventEmitter {
    constructor(clientId, domain) {
        super()
        // Configure Auth0
        this.auth0 = new auth0.WebAuth({
            clientID: clientId,
            domain: domain,
            responseType: 'token id_token',
            redirectUri: `${window.location.origin}/`
        });
        this.login = this.login.bind(this)
        this.signup = this.signup.bind(this)
        this.loginWithGoogle = this.loginWithGoogle.bind(this)
    }
    login(username, password) {
        this.auth0.client.login({
            realm: process.env.REACT_APP_AUTH0_CONNECTION,
            username,
            password
        }, (err, authResult) => {
            if (err) {
                alert('Error: ' + err.description)
                return
            }
            if (authResult && authResult.idToken && authResult.accessToken) {
                this.setToken(authResult.accessToken, authResult.idToken)
                console.log(window.location.origin)
                window.location = window.location.origin //redirect to main page
            }
        })
    }
    signup(email, password, user) {
        this.auth0.redirect.signupAndLogin({
            "connection": process.env.REACT_APP_AUTH0_CONNECTION,
            "email": email,
            "password": password,
            "blocked": false,
            "email_verified": false,
            "given_name": user.firstname,
            "family_name": user.lastname,
            "name": user.name,
            "nickname": user.firstname,
            "user_id": user.id,
            "verify_email": false,
            app_metadata: {
            },
            user_metadata: {
              role: 'admin',
              root: 'true',
              inviteCode: user.invitecode,
              userglobaluuid: user.id,
              tier: "free"
            }
          }, function (err) {
              console.log("signuplogin")
            if (err) {
                console.log(err);
                alert('Error: ' + err.description);
            }else{
                console.log("logged in");
                //Add the user to the database
                endpoint.postIAM(getUser().addUserApiUrl, {userglobaluuid: user.id, email, refBy: user.invitecode}).then(result => {
                    console.log('user add:',result);
                });
            }
        })
    }
    loginWithGoogle() {
        this.auth0.authorize({
            connection: 'google-oauth2',
        })
    }
    parseHash(hash) {
        this.auth0.parseHash({ hash }, (err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setToken(authResult.accessToken, authResult.idToken)
                console.log('AuthService parseHash : code to transition to /')
                this.auth0.client.userInfo(authResult.accessToken, (error, profile) => {
                    if (error) {
                        console.log('Error loading the Profile', error)
                    } else {
                        this.setProfile(profile)
                    }
                })
            } else if (authResult && authResult.error) {
                alert('Error: ' + authResult.error)
            }
        })
    }
    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken()
        return !!token && !isTokenExpired(token)
    }
    setToken(accessToken, idToken) {
        // Saves user access token and ID token into local storage
        localStorage.setItem('access_token', accessToken)
        localStorage.setItem('id_token', idToken)
    }
    setProfile(profile) {
        // Saves profile data to localStorage
        localStorage.setItem('profile', JSON.stringify(profile))
        // Triggers profile_updated event to update the UI
        this.emit('profile_updated', profile)
    }
    getUser(accessToken, idToken){

        this.setToken(accessToken, idToken);

        this.auth0.client.userInfo(accessToken, (error, profile) => {
            if (error) {
                console.log('Error loading the Profile', error)
            } else {
                return profile;
            }
        })
    }
    getProfile() {
        // Retrieves the profile data from localStorage
        const profile = localStorage.getItem('profile')
        return profile ? JSON.parse(localStorage.profile) : {}
    }
    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }
    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token')
        localStorage.removeItem('profile')
    }
}