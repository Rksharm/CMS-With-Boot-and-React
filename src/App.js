import React from 'react';
import logo from './logo.svg';
import './App.css';





import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import VendorLogin from './components/vendorLogin/vendorLogin';
import  Customernavbar  from './components/customernavbar/customernavbar';
import VendorMenu from './components/vendorMenu/vendorMenu';
import CustomerMenu from './components/customerMenu/customerMenu';
import AcceptOrderReject from './components/acceptOrderReject/acceptOrderReject';
import PlaceOrder  from './components/placeOrder/placeOrder';
import VendorPendingOrders from './components/vendorPendingOrders/vendorPendingOrders';
import VendorOrders from './components/vendorOrders/vendorOrders';
import VendorDashBoard from './components/vendorDashBoard/vendorDashBoard';
import VendorShow from './components/vendorShow/vendorShow';
import HomePage from './components/homePage/homePage'
import CustomerPendingOrders from './components/customerPendingOrders/customerPendingOrders'
import CustomerOrders from './components/customerOrders/customerOrders'
import CustomerWallet from './components/customerWallet/customerWallet'
import CustomerShow from './components/customerShow/customerShow';
import CustomerDashBoard from './components/customerDashBoard/customerDashBoard';
import Menu from './components/menu/menu';
import Login from './components/login/login';

import { Component } from 'react';
import { render } from '@testing-library/react';
function App() {
  
  
  return (
  
    
    
    // <div className="bg-gray-500">
    //   <Component {...pageProps}/>
    // </div>
    <div className="App">
      
          
            
          
            
      <BrowserRouter>
      {/* <Link to="/">First</Link>{' '}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/second">Second</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/third">Third</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/fourth">Fourth</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/fifth">Fifth</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/six">six</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/seven">seven</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/button">Button Example</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/multiForm">MultiForm Example</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/calc">Calculation</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/dropDown">DropDown Example</Link>
 */}
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vendorLogin" element={<VendorLogin />} />

        

        <Route path="/vendorShow" element={<VendorShow />} />
        <Route path="/vendorDashBoard" element={<VendorDashBoard />} />
        <Route path="/vendorPendingOrders" element={<VendorPendingOrders />} />
        <Route path="/vendorOrders" element={<VendorOrders />} />

        
        <Route path="/placeOrder" element={<PlaceOrder />} />
        <Route path="/acceptOrderReject" element={<AcceptOrderReject />} />


       


        <Route path="/customernavbar" element={<Customernavbar />} />
        
        <Route path="/customerDashboard" element={<CustomerDashBoard />} />
        <Route path="/customerShow" element={<CustomerShow />} />
        <Route path="/customerWallet" element={<CustomerWallet />} />
        <Route path="/customerOrders" element={<CustomerOrders />} />
        <Route path="/customerPendingOrders" element={<CustomerPendingOrders />} />
        <Route path="/menu" element={<Menu/>}/>

       
} />
      </Routes>

      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Welcome to ReactJs...Prasanna Trainer Thank You
        </p>
        <First></First>
        <Second></Second>
        <Third></Third>
        <Fourth></Fourth>
        <Fifth></Fifth>
        <ButtonExample></ButtonExample>
        <FormExampleNew></FormExampleNew>
        <StudentForm></StudentForm>
        <Six user="Prasanna"></Six>
        <Seven firstName="Prasanna" lastName="Pappu"></Seven>
        <NameForm></NameForm>
        <MultiForm></MultiForm>
        <Calc></Calc>
        <DropDown></DropDown>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
