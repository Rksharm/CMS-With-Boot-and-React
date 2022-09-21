import React, {Component} from 'react';
import './acceptOrderReject.scss'
import VendorMenu from '../vendorMenu';
import CustomerMenu from '../customerMenu/customerMenu';
import axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as acceptOrderRejectActions from "../../store/acceptOrderReject/actions";
export default class acceptOrderReject extends Component {
    constructor(props) {
        super(props);
        this.state = {
          oid:0,
          vid:0,
          status:''
        };
      }

        changeOrderId(Event){
          this.setState({
            oid: Event.target.value
          });
        }
    

    changeVendorId(Event){
      this.setState({
        vid: Event.target.value
      });
    }



changeStatus(Event){
  this.setState({
    status: Event.target.value
  });
}


  acceptOrderReject = () =>{
    axios.post('http://localhost:1111/acceptOrRejectOrder/'+this.state.oid+"/"+this.state.vid+"/"+this.state.status,null) 
    .then(res => { 
      console.log(res); 
      console.log(res.data); 
      this.state.result = res.data 
      alert(res.data) })
  }
    
  render() {
      return <div className="component-accept-order-reject">
        <CustomerMenu></CustomerMenu>
        <VendorMenu></VendorMenu>
      {/* <table border="3" align="center" bgcolor='skyblue'>
            <tr>
              <th>Order Id</th>
              <td><input type="text" id="oid" value={this.state.oid} onChange={this.changeOrderId.bind(this)}></input></td>
            </tr>
            <tr>
              <th>C</th>
              <td><input type="text" id="vid" value={this.state.vid} onChange={this.changeVendorId.bind(this)}></input></td>
            </tr>
            <tr>
              <th>Status</th>
              <td><input type="text" id="status" value={this.state.status} onChange={this.changeStatus.bind(this)}></input></td>
            </tr>
            
            <tr>
              <td colSpan="2"><input type="button" onClick={this.acceptOrderReject} value="Submit"></input></td>
            </tr>


          </table> */}
          <form class="form-style-5" action="" method="post">
  <label for="feild0">
  <h2>Accept or reject Order</h2>
</label>
<label for="field1">
<span>Order Id</span>
<input type="text" name="field1" required="true" id="oid" value={this.state.oid} onChange={this.changeOrderId.bind(this)}/>
</label>
<label for="field2">
<span>Vendor Id</span>
<input type="email" name="field2" required="true" iid="vid" value={this.state.vid} onChange={this.changeVendorId.bind(this)} />
</label>
<label for="field3">
<span>Status</span>
<input type="text" name="field3" required="true" id="status" value={this.state.status} onChange={this.changeStatus.bind(this)}/>
</label>


<label>
<span> </span><input type="button" onClick={this.acceptOrderReject} value="Submit"/>
</label>
</form>
          </div>



    }
  }
