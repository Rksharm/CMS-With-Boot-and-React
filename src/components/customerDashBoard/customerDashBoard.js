import React, {Component} from 'react';
import './customerDashBoard.scss'

import CustomerMenu from '../customerMenu/customerMenu';
import axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerDashBoardActions from "../../store/customerDashBoard/actions";
export default class customerDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          customer : {}
        };
    }
    componentDidMount() {
      let user = localStorage.getItem("cuser")
      axios.get("http://localhost:1111/searchByUser/"+user)
      .then(response => {
        this.setState({
          customer : response.data
        })
        console.log(response.data)
        localStorage.setItem("cid",response.data.cusId);
   //     alert(localStorage.getItem("cid"))
      })
    }
    render() {
      const {customer} = this.state
      return <div className="component-customer-dash-board">
        <CustomerMenu></CustomerMenu>
         <br/>
        {/* <table border="3" align='center' bgcolor='skyblue'>
        <tr>
              <th>Customer Id :</th>
              <th>{customer.cusId}</th>
        </tr>
        <tr>
              <th>Customer Name :</th>
              <th>{customer.cusName}</th>
        </tr>
        <tr>
              <th>Customer Phone No :</th>
              <th>{customer.cusPhnNo}</th>
        </tr>
        <tr>
              <th>Customer User Name :</th>
              <th>{customer.cusUsername}</th>
        </tr>
        <tr>
              <th>Customer Password :</th>
              <th>{customer.cusPassword}</th>
        </tr>
        <tr>
              <th>Customer Email :</th>
              <th>{customer.cusEmail}</th>
        </tr>

        </table>  */}
        {/* <h1>Responstable <span>2.0</span> by <span>jordyvanraaij</span></h1>

<table class="responstable21">
  
  <tr>
    <th>Customer</th>
    <th>Information</th>
  </tr>
  
       <tr>
              <td>Customer Id :</td>
              <td>{customer.cusId}</td>
        </tr>
        <tr>
              <td>Customer Name :</td>
              <td>{customer.cusName}</td>
        </tr>
  
        <tr>
              <td>Customer Phone No :</td>
              <td>{customer.cusPhnNo}</td>
        </tr>
  
        <tr>
              <td>Customer User Name :</td>
              <td>{customer.cusUsername}</td>
        </tr>
        <tr>
              <td>Customer Password :</td>
              <td>{customer.cusPassword}</td>
        </tr>
        <tr>
              <td>Customer Email :</td>
              <td>{customer.cusEmail}</td>
        </tr>
</table>
         */}
       
<div class="table-wrapper1">
    <table class="fl-table1">
        <thead>
        <tr>
             <th>Customer</th>
            <th>Information</th>
        </tr>
        </thead>
        <tbody>
        <tr>
              <td>Customer Name :</td>
              <td>{customer.cusName}</td>
        </tr>
        <tr>
              <td>Customer Phone No :</td>
              <td>{customer.cusPhnNo}</td>
        </tr>
        <tr>
              <td>Customer User Name :</td>
              <td>{customer.cusUsername}</td>
        </tr>
        <tr>
              <td>Customer Password :</td>
              <td>{customer.cusPassword}</td>
        </tr>
        <tr>
              <td>Customer Email :</td>
              <td>{customer.cusEmail}</td>
        </tr>
        </tbody>
</table>
        
</div>
         </div>;
    }
  }
// export default connect(
//     ({ customerDashBoard }) => ({ ...customerDashBoard }),
//     dispatch => bindActionCreators({ ...customerDashBoardActions }, dispatch)
//   )( customerDashBoard );