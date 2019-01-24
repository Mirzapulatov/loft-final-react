import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Map from "../../../Map";
import EditProfile from "../../../User/Profile/EditProfile";

class AppRouter extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="">
        <Switch>
          <Route path={`${match.url}map`} component={Map} />
          <Route path={`${match.url}profile`} component={EditProfile} />
          <Redirect to={`${match.url}map`} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
