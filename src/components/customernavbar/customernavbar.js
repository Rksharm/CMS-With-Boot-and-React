import React, {Component} from 'react';
import './customernavbar.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customernavbarActions from "../../store/customernavbar/actions";
export default class customernavbar extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-customernavbar">
        <div id="grad1"></div>
          <div class="section">
        <div class="flexbox-nav">
            <div class="main-head">Customer</div>
            <div class="navigation">
                <div><a href="#">Home</a></div>
                <div><a href="#">Pizza</a></div>
                <div><a href="#">Burger</a></div>
                <div><a href="#">French Fries</a></div>   
            </div>
        </div>
      </div>
      </div>
    }
  }


  
  