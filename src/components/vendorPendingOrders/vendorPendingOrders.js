import React, {Component} from 'react';
import './vendorPendingOrders.scss'
import axios from 'axios';
import VendorMenu from '../vendorMenu/vendorMenu';

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerPendingOrdersActions from "../../store/customerPendingOrders/actions";
export default class vendorPendingOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders : []
    };
}

componentDidMount() {
  let cid = localStorage.getItem("vid")
 // alert(cid)
  axios.get("http://localhost:1111/vendorPendingOrders/"+cid)
  .then(response => {
    this.setState({
      orders : response.data
    })
    console.log(response.data)
   // localStorage.setItem("cid",response.data.cusId);
//     alert(localStorage.getItem("cid"))
  })
}
render() {
  const {orders} = this.state
  return <div className="component-vendor-pending-orders">
    <VendorMenu></VendorMenu>
    {/* <table border="3" align='center'>
  <tr>
    <th>Order Id</th>
    <th>Customer Id</th>
    <th>Menu Id</th>
    <th>Vendor Id</th>
    <th>Wallet Source</th>
    <th>Order Quantity</th>
    <th>Bill Amount</th>
    <th>Order Status</th>
    <th>Order Comments</th>
  </tr>
  {
    orders.map( order => 
      <tr>
        <td>{order.ordId}</td>
        <td>{order.cusId}</td>
        <td>{order.menId}</td>
        <td>{order.venId}</td>
        <td>{order.walSource}</td>
        <td>{order.ordQuantity}</td>
        <td>{order.ordBillamount}</td>
        <td>{order.ordStatus}</td>
        <td>{order.ordComments}</td>
        
      </tr>
  )
  }
</table> */}
{/* <h1>Responstable <span>2.0</span> by <span>jordyvanraaij</span></h1>

<table class="responstable">
  
  <tr>
  <th>Order Id</th>
    <th>Customer Id</th>
    <th>Menu Id</th>
    <th>Vendor Id</th>
    <th>Wallet Source</th>
    <th>Order Quantity</th>
    <th>Bill Amount</th>
    <th>Order Status</th>
    <th>Order Comments</th>
  </tr>
  {
    orders.map( order => 
  
  <tr>
  <td>{order.ordId}</td>
        <td>{order.cusId}</td>
        <td>{order.menId}</td>
        <td>{order.venId}</td>
        <td>{order.walSource}</td>
        <td>{order.ordQuantity}</td>
        <td>{order.ordBillamount}</td>
        <td>{order.ordStatus}</td>
        <td>{order.ordComments}</td>
  </tr>
    )}
  
  
  
</table> */}

<div class="table-wrapper7">
    <table class="fl-table7">
        <thead>
        <tr>
    <th>Order Id</th>
    <th>Customer Id</th>
    <th>Menu Id</th>
    <th>Vendor Id</th>
    <th>Wallet Source</th>
    <th>Order Quantity</th>
    <th>Bill Amount</th>
    <th>Order Status</th>
    <th>Order Comments</th>
        </tr>
        </thead>
        {
    orders.map( order => 
        <tbody>
        <tr>
        <td>{order.ordId}</td>
        <td>{order.cusId}</td>
        <td>{order.menId}</td>
        <td>{order.venId}</td>
        <td>{order.walSource}</td>
        <td>{order.ordQuantity}</td>
        <td>{order.ordBillamount}</td>
        <td>{order.ordStatus}</td>
        <td>{order.ordComments}</td>
        </tr>
       
        </tbody>
    )}
    </table>
</div>

</div>
}
}


  
  



  
// export default connect(
//     ({ customerPendingOrders }) => ({ ...customerPendingOrders }),
//     dispatch => bindActionCreators({ ...customerPendingOrdersActions }, dispatch)
//   )( customerPendingOrders );