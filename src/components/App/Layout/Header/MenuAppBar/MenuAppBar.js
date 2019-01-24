import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class MenuAppBar extends Component {
  logout = () => {
    this.props.logout();
  };

  renderMenu = () => {
    return (
      <React.Fragment>
        <Button color="inherit" component={Link} to="/map">
          Карта
        </Button>
        <Button color="inherit" component={Link} to="/profile">
          Профиль
        </Button>
        <Button color="inherit" onClick={this.logout}>
          Выход
        </Button>
      </React.Fragment>
    );
  };
  render() {
    const { isAuthorized, classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Loft Taxi
            </Typography>
            {isAuthorized ? this.renderMenu() : ""}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(MenuAppBar);
