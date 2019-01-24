import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Layout";
import PrivateRoute from "./Router/PrivateRouter";
import AppRouter from "./Router/AppRouter";
import Login from "../Auth/Login";

export default () => (
  <Layout>
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" component={AppRouter} />
      <Redirect to="/login" />
    </Switch>
  </Layout>
);
