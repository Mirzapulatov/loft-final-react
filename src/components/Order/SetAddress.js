import React, { Component } from "react";
import Select from "react-select";
import { Typography, Paper, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

class SetAddress extends Component {
  state = {
    fromWhere: null,
    toWhere: null
  };

  setFromWhere = meto => {
    this.setState({
      fromWhere: meto
    });
  };

  setToWhere = meto => {
    this.setState({
      toWhere: meto
    });
  };

  createOrder = () => {
    const { fromWhere, toWhere } = this.state;
    if (fromWhere && toWhere)
      this.props.createOrder(fromWhere.value, toWhere.value);
  };

  render() {
    const { fromWhere, toWhere } = this.state;
    const {
      map: { routeVarians }
    } = this.props;
    const variants = routeVarians.filter(
      variant => !~[fromWhere, toWhere].indexOf(variant)
    );
    return (
      <Paper>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h4" align="left">
              Вызов такси
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Select
              isClearable
              value={fromWhere}
              onChange={this.setFromWhere}
              options={variants}
            />
          </Grid>
          <Grid item xs={12}>
            <Select
              isClearable
              value={toWhere}
              onChange={this.setToWhere}
              options={variants}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="primary"
              disabled={!fromWhere && !toWhere}
              variant="outlined"
              onClick={this.createOrder}
            >
              Вызвать такси
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default SetAddress;
