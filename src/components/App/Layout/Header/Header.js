import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../../../actions/auth";

import MenuAppBar from "./MenuAppBar";

const mapStateToProps = state => ({ isAuthorized: state.user.isAuthorized });
const mapDispatchToProps = { logout };

class Header extends Component {
  render() {
    const { isAuthorized } = this.props;
    return (
      <div>
        <MenuAppBar isAuthorized={isAuthorized} logout={this.props.logout} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
