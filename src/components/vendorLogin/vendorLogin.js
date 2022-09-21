import React, {Component} from 'react';
import { withRouter } from '../../withRouter';
import './vendorLogin.scss'
import  axios  from 'axios';
import Customernavbar from '../customernavbar/customernavbar';

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as loginActions from "../../store/login/actions";
export  class vendorLogin extends Component {
   
  changeUserName(event) {  
    this.setState({  
        userName: event.target.value
    });  
  }
  changePassword(event) {  
    this.setState({  
        passWord: event.target.value
    });  
  }
  vendorLogin = () => {
    let user = this.state.userName
    let pwd = this.state.passWord
    axios.get("http://localhost:1111/vendorLogin/"+user+"/"+pwd)
    .then(response => {
      if (response.data=='1') {
        localStorage.setItem("vuser",user)
        this.props.navigate("/menu")
      }
     // alert(response.data)
     // result = response.data
      // this.setState({
      //   customers : response.data 
      // })
      console.log(response.data)
    })
    // if (this.state.userName=="Hexaware" && this.state.passWord=="Hexaware") {
    //   //alert("Correct Credentails...");
    //   this.props.navigate("/menu")
    // } else {
    //   alert("Invalid Credentials...")
    // }
  }
  constructor(props) {
        super(props);
        this.state = {
          userName:'',
          passWord:'',
          result : ''
        };
    }
    render() {
      return <div className="component-vendorLogin">
        <Customernavbar/>
         <div className='welcome'>
            <h1 id="a7">Vendor Login</h1>
       </div>
        
  
          {/* <table className='t3' border="3" align='center' bgcolor='#468375'>
            <tr>
              <th colSpan="2">
                Login Page
              </th>
            </tr>
            <tr>
              <th>User Name </th>
              <td>
              <input type="text" id="userName"
                 value={this.state.userName} 
                 onChange={this.changeUserName.bind(this)} />
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td>
                <input type="password" id="passWord"
                   value={this.state.passWord}
                   onChange={this.changePassword.bind(this)} />
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <input type="button" value="Login" onClick={this.vendorLogin} />
              </th>
            </tr>
            </table> */}
            <table id="tr2">
            <div class="login">
          <h1>Login</h1>
                    <form method="post">
              <input type="text" id="userName" value={this.state.userName} onChange={this.changeUserName.bind(this)} name="u" placeholder="Username" required="required" />
                <input type="password" id="passWord" value={this.state.passWord} onChange={this.changePassword.bind(this)} name="p" placeholder="Password" required="required" />
                  <input type="button" class="btn btn-primary btn-block btn-large" value="Login" onClick={this.vendorLogin}/>
                  </form>
                </div>
            </table>
            
        </div>;
      
    }
  }
  export default withRouter(vendorLogin);
// export default connect(
//     ({ login }) => ({ ...login }),
//     dispatch => bindActionCreators({ ...loginActions }, dispatch)
//   )( login );