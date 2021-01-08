import React, {Fragment, useState} from 'react'
import '../../style.css';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';



const Layout =({children})=> {
    const nav = ()=>(

        <nav className="navbar navbar-expand navbar-dark scrolling-navbar " id="navbar1">
  
  <div className="container-fluid" id="topnav1">
  <div className="" id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item">
        <a className="nav-link " href="#">ALL PAGES <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">HEALTH</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">TECHNOLOGY</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">POLITICS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">ENTERTAINMENT</a>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link" >LOGIN</Link>
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
</nav>
        
    )
    return(
        <Fragment>
            {nav()}
            <div classNameName = "container">
                {children}
            </div>
        </Fragment>
    )
}

export default withRouter (Layout);