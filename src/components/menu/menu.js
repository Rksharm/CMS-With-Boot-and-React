import React, {Component} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import './menu.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as menuActions from "../../store/menu/actions";
export default class menu extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-menu">
              {/* <Link to="/">First</Link>{' '}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
     
    
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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/customerDashboard">Customer Dashboard</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/customerShow">Customer Show</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/customerWallet">Customer Wallet</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/customerOrders">Customer Orders</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/customerPendingOrders">Customer Pending Orders</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      

        </div>;
    }
  }
// export default connect(
//     ({ menu }) => ({ ...menu }),
//     dispatch => bindActionCreators({ ...menuActions }, dispatch)
//   )( menu );