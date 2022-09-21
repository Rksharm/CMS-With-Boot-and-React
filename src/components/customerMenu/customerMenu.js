import React, {Component} from 'react';
import './customerMenu.scss'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerMenuActions from "../../store/customerMenu/actions";
export default class customerMenu extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-customer-menu">

      <Link to="/customerDashboard">Customer Dashboard</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/customerShow">Customer Show</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/customerWallet">Customer Wallet</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/customerOrders">Customer Orders</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/customerPendingOrders">Customer Pending Orders</Link>
      
      </div>;
    }
  }
// export default connect(
//     ({ customerMenu }) => ({ ...customerMenu }),
//     dispatch => bindActionCreators({ ...customerMenuActions }, dispatch)
//   )( customerMenu );