import React, {Component} from 'react';
import './vendorShow.scss'
import VendorMenu from '../vendorMenu/vendorMenu';


import  axios  from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerShowActions from "../../store/customerShow/actions";
export default class vendorShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors : []
    };
}
componentDidMount() {
  axios.get("http://localhost:1111/showvendors")
  .then(response => {
    this.setState({
      vendors : response.data 
    })
    console.log(response.data)
  })

}
render() {
                  const {vendors} = this.state
  
  return <div className="component-vendor-show">
    <VendorMenu></VendorMenu> <br/>
    {/* <table border="3" align='center' bgcolor='skyblue'>
      <tr>
        <th>Vendor Id</th>
        <th>Vendor Name</th>
        <th>Vendor Phone No</th>
        <th>Vendor UserName</th>
        <th>Vendor Password</th>
        <th>Vendor Email</th>
      </tr>
      {
        vendors.map( vendor => 
          <tr>
            <td>{vendor.venId}</td>
            <td>{vendor.venName}</td>
            <td>{vendor.venPhnNo}</td>
            <td>{vendor.venUsername}</td>
            <td>{vendor.venPassword}</td>
            <td>{vendor.venEmail}</td>
          </tr>
      )
      }
    </table> */}
    

{/* <table class="responstable" align='center'>
  
  <tr>
  <th>Vendor Id</th>
        <th>Vendor Name</th>
        <th>Vendor Phone No</th>
        <th>Vendor UserName</th>
        <th>Vendor Password</th>
        <th>Vendor Email</th>
  </tr>
  {
        vendors.map( vendor => 
  
  <tr>
            <td>{vendor.venId}</td>
            <td>{vendor.venName}</td>
            <td>{vendor.venPhnNo}</td>
            <td>{vendor.venUsername}</td>
            <td>{vendor.venPassword}</td>
            <td>{vendor.venEmail}</td>
  </tr>
        )}
  
  
</table> */}

<div class="table-wrapper8">
    <table class="fl-table8" align='center'>
        <thead>
        <tr>
        <th>Vendor Id</th>
        <th>Vendor Name</th>
        <th>Vendor Phone No</th>
        <th>Vendor UserName</th>
        <th>Vendor Password</th>
        <th>Vendor Email</th>
        </tr>
        </thead>
        {
        vendors.map( vendor => 
        <tbody>
        <tr>
        <td>{vendor.venId}</td>
            <td>{vendor.venName}</td>
            <td>{vendor.venPhnNo}</td>
            <td>{vendor.venUsername}</td>
            <td>{vendor.venPassword}</td>
            <td>{vendor.venEmail}</td>
        </tr>
        
        </tbody>
        )}
    </table>
</div>


   

    </div>;
}

  }
// export default connect(
//     ({ customerShow }) => ({ ...customerShow }),
//     dispatch => bindActionCreators({ ...customerShowActions }, dispatch)
//   )( customerShow );