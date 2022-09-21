import React, {Component} from 'react';
import './customerOrders.scss'
import axios from 'axios';
import CustomerMenu from '../customerMenu/customerMenu';

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerOrdersActions from "../../store/customerOrders/actions";
export default class customerOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders : []
    };
}

componentDidMount() {
  let cid = localStorage.getItem("cid")
 // alert(cid)
  axios.get("http://localhost:1111/customerOrders/"+cid)
  .then(response => {
    this.setState({
      orders : response.data
    })
    console.log(response.data)
  })
}

render() {
  const {orders} = this.state
  return <div className="component-customer-wallet">
    <CustomerMenu></CustomerMenu>
    {/* <table border="3" align='center' bgcolor='skyblue'>
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
</table> */
}

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
    )
}
  
  
  
</table> */}
{/* dimension: status {


sql: ${TABLE}.Status ;;


html: 


  {% if value == 'Paid' %}


    <p style="color: black; background-color: lightblue; font-size:100%; text-align:center">{{ rendered_value }}</p>


  {% elsif value == 'Shipped' %}


    <p style="color: black; background-color: lightgreen; font-size:100%; text-align:center">{{ rendered_value }}</p>


  {% else %}


    <p style="color: black; background-color: orange; font-size:100%; text-align:center">{{ rendered_value }}</p>


  {% endif %}


;; */}


}
<div class="lost">

<div class="table-wrapper">
    <table class="fl-table">
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
        <td id="t1">{order.ordStatus}</td>
        <td>{order.ordComments}</td>
        </tr>
        
        </tbody>
    )}
    </table>
</div>
</div>

  


  </div>;
}
  }
// export default connect(
//     ({ customerOrders }) => ({ ...customerOrders }),
//     dispatch => bindActionCreators({ ...customerOrdersActions }, dispatch)
//   )( customerOrders ;