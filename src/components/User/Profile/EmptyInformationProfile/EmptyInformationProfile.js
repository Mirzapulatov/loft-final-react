import React from "react";
import { Link } from "react-router-dom";
import { Typography, Paper, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const EmptyInformationProfile = props => {
  return (
    <Paper>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h4" align="left">
            Заполните платежные данные
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Укажите информацию о банковской карте, чтобы сделать заказ.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="primary"
            variant="outlined"
            component={Link}
            to="/profile"
          >
            Перейти в профиль.
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EmptyInformationProfile;
