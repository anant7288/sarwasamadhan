import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link, HashRouter } from "react-router-dom";
import Orders from "./pages/orders";
import Reports from "./pages/reports";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const state = {isSignedIn: true};

  return (
    <Route
      {...rest}
      render={(props) =>
        state.isSignedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/login" component={Login} /> */}
        <PrivateRoute exact path="/" component={Orders} />
        <PrivateRoute exact path="/orders" component={Orders} />
        <PrivateRoute exact path="/reports" component={Reports} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;