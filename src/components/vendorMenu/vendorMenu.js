import React, {Component} from 'react';
import './vendorMenu.scss'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as vendorMenuActions from "../../store/vendorMenu/actions";
export default class vendorMenu extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-vendor-menu">

      <Link to="/acceptOrderReject"> Accept Or Reject</Link> 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/placeOrder"> Place Order</Link>  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/vendorOrders"> Vendor Orders</Link>    
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/vendorPendingOrders"> Vendor PendingOrders</Link>              
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/vendorDashBoard"> Vendor DashBoard</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/vendorShow"> Vendor Show</Link>
      </div>;
    }
  }
// export default connect(
//     ({ vendorMenu }) => ({ ...vendorMenu }),
//     dispatch => bindActionCreators({ ...vendorMenuActions }, dispatch)
//   )( vendorMenu );