import React from "react";
import { Typography, Paper, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const OrderSuccess = props => {
  const { cancelOrder } = props;
  return (
    <Paper>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h4" align="left">
            Заказ размещён
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography style={{ margin: "10px 0" }}>
            Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" variant="outlined" onClick={cancelOrder}>
            Отменить
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default OrderSuccess;
