import React from "react";
import { Route } from "react-router-dom";

import ROUTES from "../constants/routes.js";

import Landing from "../components/Landing.js";
import Dashboard from "../components/Dashboard.js";

const Routes = () => {
  return (
    <div className="routes">
      <Route
        exact
        path={ROUTES.LANDING}
        render={props => <Landing {...props} />}
      />
      <Route
        path={ROUTES.DASHBOARD}
        render={props => <Dashboard {...props} />}
      />
    </div>
  );
};

export default Routes;
