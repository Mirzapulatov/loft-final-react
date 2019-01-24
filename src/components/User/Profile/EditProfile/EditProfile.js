import React, { Component } from "react";
import { Typography, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import EditFrom from "./EditFrom";
import EditFormSuccess from "./EditFormSuccess";

import "./EditProfile.css";

class EditProfile extends Component {
  state = {
    formSuccess: false
  };
  componentDidMount() {
    this.setState({ formSuccess: false });
  }

  saveSuccess = () => {
    this.setState({ formSuccess: true });
  };

  render() {
    return (
      <Grid container alignItems="center" justify="center">
        <Grid item xs={6}>
          <Paper className="edit-form">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography component="h1" variant="h4" align="center">
                  Профиль
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {this.state.formSuccess ? (
                  <EditFormSuccess />
                ) : (
                  <EditFrom saveSuccess={this.saveSuccess} />
                )}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default EditProfile;
