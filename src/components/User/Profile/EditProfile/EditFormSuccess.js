import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const EditFormSuccess = props => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Typography>
          Платёжные данные обновлены. Теперь вы можете заказывать такси.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" color="primary" component={Link} to="/map">
          Перейти на карту
        </Button>
      </Grid>
    </Grid>
  );
};

export default EditFormSuccess;
