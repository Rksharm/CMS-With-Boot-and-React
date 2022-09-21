import React, {Component} from 'react';
import './placeOrder.scss'
import { withRouter } from '../../withRouter';
import VendorMenu from '../vendorMenu';
import CustomerMenu from '../customerMenu/customerMenu';

import axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as placeOrderActions from "../../store/placeOrder/actions";
export default class placeOrder extends Component {
    constructor(props) {
        super(props);
        let cid = localStorage.getItem("cid");
        this.state = {
          customerId:cid,
          menuId:'',
          vendorId:'',
          walSource:'',
          qty:'',
          comments:''
        };
    }

    changeCustomerId(event){
      this.setState({
        customerId:event.target.value
      });
    }


      changeVendorId(event){
        this.setState({
          vendorId :event.target.value
        });
      }


      changeMenuId(event){
        this.setState({
          menuId :event.target.value
        });
      }


      changeWalSource(event){
        this.setState({
          walSource :event.target.value
        });
      }

      changeQty(event){
        this.setState({
          qty :event.target.value
        });
      }


      changeComments(event){
        this.setState({
          comments :event.target.value
        });
      }

      placeOrder = () => {

        axios.post('http://localhost:1111/placeOrder',
        { cusId: this.state.customerId, venId: this.state.vendorId, 
          menId: this.state.menuId, walSource: this.state.walSource, 
          ordQuantity: this.state.qty, ordComments: this.state.comments},)
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.state.result = res.data
          alert(res.data)
        })
      }



    render() {
      return <div className="component-place-order">
          <CustomerMenu></CustomerMenu>
          <VendorMenu></VendorMenu>
          
         
<form class="form-style-4" action="" method="post">
  <label for="feild0">
  <h2>Place Order</h2>
</label>
<label for="field1">
<span>Customer Id</span>
<input type="text" name="field1" required="true" id="customerId" value={this.state.customerId} onChange={this.changeCustomerId.bind(this)}/>
</label>
<label for="field2">
<span>Menu Id</span>
<input type="email" name="field2" required="true" id="menuId" value={this.state.menuId} onChange={this.changeMenuId.bind(this)} />
</label>
<label for="field3">
<span>Vendor ID</span>
<input type="text" name="field3" required="true" id="vendorId" value={this.state.vendorId} onChange={this.changeVendorId.bind(this)}/>
</label>
<label for="field4">
<span>Walsource</span>
<input type="text" name="field3" required="true" id="walSource" value={this.state.walSource} onChange={this.changeWalSource.bind(this)}/>
</label>
<label for="field5">
<span>Qty</span>
<input type="text" name="field3" required="true" id="qty" value={this.state.qty} onChange={this.changeQty.bind(this)}/>
</label>
<label for="field6">
<span>Comments</span>
<input type="text" name="field3" required="true" id="Comments" value={this.state.comments} onChange={this.changeComments.bind(this)}/>
</label>

<label>
<span> </span><input type="button" onClick={this.placeOrder} value="Submit"/>
</label>
</form>

          
          
      



      </div>;
    }
  }
