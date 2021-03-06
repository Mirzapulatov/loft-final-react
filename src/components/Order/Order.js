import React, { Component } from "react";
import { connect } from "react-redux";
import { createOrder, cancelOrder } from "../../modules/Order";

import SetAddress from "./SetAddress";
import OrderSuccess from "./OrderSuccess";
import EmptyInformationProfile from "../User/Profile/EmptyInformationProfile";

import "./Order.css";

const mapStateToProps = state => {
  const { user, order, map } = state;
  return { user, order, map };
};
const mapDispatchToProps = { createOrder, cancelOrder };

class Order extends Component {
  createOrder = (fromWhere, toWhere) => {
    const { createOrder } = this.props;
    createOrder({
      fromWhere: fromWhere,
      toWhere: toWhere
    });
  };

  cancelOrder = () => {
    const { removeLayer, cancelOrder } = this.props;
    removeLayer();
    cancelOrder();
  };

  render() {
    const { user, map, order } = this.props;
    if (!user.userInfo) {
      return (
        <div className="setAddres">
          <EmptyInformationProfile />
        </div>
      );
    }
    if (order.status) {
      return (
        <div className="setAddres">
          <OrderSuccess cancelOrder={this.cancelOrder} />
        </div>
      );
    }
    return (
      <div className="setAddres">
        <SetAddress map={map} createOrder={this.createOrder} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
