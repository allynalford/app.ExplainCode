import React, { useEffect, Suspense } from "react";
import Layout from "./components/Layout/";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter,
  useHistory
} from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from './auth/protected-route';
// Import Css
import "./assets/css/materialdesignicons.min.css";
import "./Apps.scss";
import "./assets/css/colors/default.css";
import "./assets/css/bootstrap.min.css";

// Include Routes
import routes from "./routes";

//const { isLoading } = useAuth0();

function withLayout(WrappedComponent, hasDarkTopBar) {
  // ...and returns another component...
  return class extends React.Component {
    render() {
      return (
        <Layout hasDarkTopBar={hasDarkTopBar}>
          <WrappedComponent></WrappedComponent>
        </Layout>
      );
    }
  };
}



function App({ Component }) {
  const { isLoading  } = useAuth0();
  const history = useHistory();
  //const isLoading   = false;
 
  //console.log(isAuthenticated)
  //console.log(window.location.hash)
  //console.log(window.location.origin)

  useEffect(() => {
  }, []);

  const Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <Loader />;
  }
  if (
    window.location.hash.substr(1).includes('access_token=') === true &&
    window.location.hash.substr(1).includes('scope=') === true &&
    window.location.hash.substr(1).includes('expires_in=') === true
  ) {
    history.push('/dashboard');
    //console.log(window.location);
  }


  return (
    <React.Fragment>
      <Router>
      <Suspense fallback={Loader}>
          <Switch>
            {routes.map((route, idx) =>
              route.isWithoutLayout ? (
                (route.protected ? <ProtectedRoute path={route.path} exact={route.exact} component={route.component} key={idx} />: <Route
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                  key={idx}
                />)
              ) : (
                (route.protected ? <ProtectedRoute path={route.path} exact component={withLayout(route.component, route.isTopbarDark)} key={idx} />: <Route
                  path={route.path}
                  exact
                  component={withLayout(route.component, route.isTopbarDark)}
                  key={idx}
                />)
              )
            )}
          </Switch>
          </Suspense>
      </Router>
    </React.Fragment>
  );
}

// class App extends Component {



//   Loader = () => {
//     return (
//       <div id="preloader">
//         <div id="status">
//           <div className="spinner">
//             <div className="double-bounce1"></div>
//             <div className="double-bounce2"></div>
//           </div>
//         </div>
//       </div>
//     );
//   };
//   render() {


//     return (
//       <React.Fragment>
//         <Router>
//           <Suspense fallback={this.Loader()}>
//             <Switch>
//               {routes.map((route, idx) =>
//                 route.isWithoutLayout ? (
//                   (route.protected ? <ProtectedRoute path={route.path} exact={route.exact} component={route.component} key={idx} />: <Route
//                     path={route.path}
//                     exact={route.exact}
//                     component={route.component}
//                     key={idx}
//                   />)
//                 ) : (
//                   (route.protected ? <ProtectedRoute path={route.path} exact component={withLayout(route.component, route.isTopbarDark)} key={idx} />: <Route
//                     path={route.path}
//                     exact
//                     component={withLayout(route.component, route.isTopbarDark)}
//                     key={idx}
//                   />)
//                 )
//               )}
//             </Switch>
//           </Suspense>
//         </Router>
//       </React.Fragment>
//     );
//   }
// }

export default withRouter(App);
