import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginRequest, getIsAuthorized } from "../../../modules/Auth";

import { Typography, Paper, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Form, Field } from "react-final-form";
import { input } from "../../UI/From/Fields";

import "./Login.css";

const mapStateToProps = state => ({ isAuthorized: getIsAuthorized(state) });
const mapDispatchToProps = { loginRequest };

const validate = values => {
  const errors = {};
  if (values.username !== "test@test.com") {
    errors.username = "Неверный логин";
  }
  if (values.password !== "123123") {
    errors.password = "Неправильный пароль";
  }
  return errors;
};

class Login extends Component {
  handleSend = values => {
    const { username, password } = values;
    const { loginRequest } = this.props;
    loginRequest({ username, password });
  };

  render() {
    const { isAuthorized } = this.props;

    if (isAuthorized) {
      return <Redirect to="/map" />;
    }
    return (
      <Grid container alignItems="center" justify="center">
        <Grid item xs={3}>
          <Paper className="login-form">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography component="h1" variant="h4" align="center">
                  Войти
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Form
                  onSubmit={this.handleSend}
                  validate={validate}
                  render={({ handleSubmit, pristine, invalid }) => (
                    <form onSubmit={handleSubmit}>
                      <Field
                        label="Логин"
                        name="username"
                        render={input}
                        fullWidth
                      />
                      <Field
                        label="Логин"
                        name="password"
                        type="password"
                        render={input}
                        fullWidth
                      />
                      <br />
                      <br />
                      <Button
                        color="primary"
                        variant="outlined"
                        type="submit"
                        disabled={pristine || invalid}
                      >
                        Submit
                      </Button>
                    </form>
                  )}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
