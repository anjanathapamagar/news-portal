import React, {Fragment, Component} from 'react'
import '../../style.css';
import { Link, NavLink, withRouter } from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button ,Modal} from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa';
import Login from '../Login.js';
import LoginModal from '../LoginModal';



 class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      addModalShow: false
    }

      }
      
  render() {
    let addModalClose =()=> this.setState({addModalShow:false});
    return (

        <nav className="navbar navbar-expand navbar-dark scrolling-navbar yamm " id="navbar1">
  
  <div className="navbar-collapse collapse" id="navbar-collapse-1">
  <div className="container" id="navbarNav">
    <div className="row" id="navrow">
      <div className="col-xs-12" id="navlist">
    <ul className=" navbar-nav ">
      <li className="navitem">
        <a className="nav-link " href="#">All pages <span className="sr-only"></span></a>
      </li>
      <li className="navitem">
        <a className="nav-link" href="#">Health</a>
      </li>
      <li className="navitem">
        <a className="nav-link" href="#">technology</a>
      </li>
      <li className="navitem">
        <a className="nav-link" href="#">politics</a>
      </li>
      <li className="navitem">
        <a className="nav-link" href="#" >entertainment</a>
     </li>
      <li className="navitem">
        <Link to="/login" className="nav-link" >login</Link>
      </li>
      
      {/* <li className="nav-item">
        <a className="nav-link" href="#">POLITICS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">ENTERTAINMENT</a>
      </li> */}
    </ul>
    </div>
    </div>
    </div>
  </div>
  <li className="navitem" id="navitemlist">
        {/* <a href="#" id="closeicon" >< FaUserCircle onClick={() => this.setState({addModalShow:true})} size='1.5rem' className="usericon" color="white"></FaUserCircle></a> */}
       <Login
         show ={ this.state.addModalShow}
         onHide = {addModalClose}/> 
      </li>
         
</nav>
        
        )
      }
    }

    export default (Layout);