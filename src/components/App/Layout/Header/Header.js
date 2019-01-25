import React, { Component } from "react";
import { connect } from "react-redux";
import { logout, getIsAuthorized } from "../../../../modules/Auth";

import MenuAppBar from "./MenuAppBar";

const mapStateToProps = state => ({ isAuthorized: getIsAuthorized(state) });
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
