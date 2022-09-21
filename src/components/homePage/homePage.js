import React, {Component} from 'react';
import './homePage.scss'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as homePageActions from "../../store/homePage/actions";
export default class homePage extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-home-page">
       <div className='welcome'>
       <h1 id="a1">Welcome</h1>
       <h1 id="a2">to</h1>
       <h1 id="a3">Canteen</h1>
       </div>
        
        
      
       
        <br></br><br></br><br></br><br></br>
        <Link className="cuslink" to="/login">Customer Login</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link className="cuslink" to="/vendorLogin">Vendor Login</Link>
       
       
        
        </div>;
    }
  }
// export default connect(
//     ({ homePage }) => ({ ...homePage }),
//     dispatch => bindActionCreators({ ...homePageActions }, dispatch)
//   )( homePage );