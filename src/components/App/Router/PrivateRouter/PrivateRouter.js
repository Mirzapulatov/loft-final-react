import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => ({ isAuthorized: state.user.isAuthorized });

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
