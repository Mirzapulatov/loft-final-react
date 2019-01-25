import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getIsAuthorized } from "../../../../modules/Auth";

const mapStateToProps = state => ({ isAuthorized: getIsAuthorized(state) });

class PrivateRoute extends Component {
  render() {
    const { component: RouteComponent, isAuthorized, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={routeProps =>
          isAuthorized ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }
}

export default connect(mapStateToProps)(PrivateRoute);
