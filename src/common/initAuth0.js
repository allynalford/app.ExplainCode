import AuthService from './AuthService';

const auth = new AuthService(process.env.REACT_APP_AUTH0_CLIENTID, process.env.REACT_APP_AUTH0_DOMAIN)
export default auth