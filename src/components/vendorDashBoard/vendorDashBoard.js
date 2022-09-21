import React, {Component} from 'react';
import './vendorDashBoard.scss'

import VendorMenu from '../vendorMenu/vendorMenu';
import axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerDashBoardActions from "../../store/customerDashBoard/actions";
export default class vendorDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          vendor : {}
        };
    }
    componentDidMount() {
      let username = localStorage.getItem("vuser")
      axios.get("http://localhost:1111/searchvendorbyusername/"+username)
      .then(response => {
        this.setState({
          vendor : response.data
        })
        console.log(response.data)
        localStorage.setItem("vid",response.data.venId);
   //     alert(localStorage.getItem("cid"))
      })
    }
    render() {
      const {vendor} = this.state
      return <div className="component-vendor-dashboard">
        <VendorMenu></VendorMenu>
        <br/>
        {/* <table border="3" align='center' bgcolor='skyblue'>
            <tr>
              <th>vendor Id:</th>
              <th>{vendor.venId}</th>
            </tr>
            <tr>
              <th>vendor Name:</th>
              <th>{vendor.venName}</th>
            </tr>
            <tr>
               <th>vendor PhnNo:</th>
              <th>{vendor.venPhnNo}</th>
            </tr>
            <tr>
             
              <th> vendor User Name :</th>
              <th>{vendor.venUsername}</th>
    
            </tr>
            <tr>
              
              <th>vendor Password :</th>
              <th>{vendor.venPassword}</th>
        
            </tr>
            <tr>
              
              <th>vendor Email :</th>
              <th>{vendor.venEmail}</th>
            </tr>
        </table>  */}



{/* <table class="responstable" align='center'>
  
  <tr>
    <th>Vendor</th>
    <th>Information</th>
    
  </tr>
  
  
  <tr>
              <td>vendor Id:</td>
              <td>{vendor.venId}</td>
  </tr>

  
  
  <tr>
              <td>vendor Name:</td>
              <td>{vendor.venName}</td>
            
  </tr>
  
  <tr>
             
             <td> vendor User Name :</td>
             <td>{vendor.venUsername}</td>
   
  </tr>
  <tr>
              
              <td>vendor Password :</td>
              <td>{vendor.venPassword}</td>
        
  </tr>
  <tr>
              
              <td>vendor Email :</td>
              <td>{vendor.venEmail}</td>
        
  </tr>
  
</table> */}

<div class="table-wrapper5">
    <table class="fl-table5" align='center'>
        <thead>
        <tr>
        <th>Vendor</th>
        <th>Information</th>
        </tr>
        </thead>
        <tbody>
        <tr>
              <td>vendor Id:</td>
              <td>{vendor.venId}</td>
  </tr>

  
  
  <tr>
              <td>vendor Name:</td>
              <td>{vendor.venName}</td>
            
  </tr>
  
  <tr>
             
             <td> vendor User Name :</td>
             <td>{vendor.venUsername}</td>
   
  </tr>
  <tr>
              
              <td>vendor Password :</td>
              <td>{vendor.venPassword}</td>
        
  </tr>
  <tr>
              
              <td>vendor Email :</td>
              <td>{vendor.venEmail}</td>
        
  </tr>
        </tbody>
    </table>
</div>
        
        
       
      </div>;




  }
}
  
