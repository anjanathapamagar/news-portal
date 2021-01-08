import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './Layout/SidebarData.js';
import '../style.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>

      <IconContext.Provider value={{}}>
        <p className='navbar' id="snav">
          <p className='menu-bars'>
            {" "} {" "} <FaIcons.FaFacebook /> {" "}
            <FaIcons.FaTwitter />{" "}
            <FaIcons.FaYoutube />{" "}
            <FaIcons.FaInstagram />{" "}
            <FaIcons.FaLinkedin />{" "}
            <FaIcons.FaPinterest />

            {/* <FaIcons.FaSearch/> */}

          </p>
          {/* <div className="search">
        <FaIcons.FaSearch></FaIcons.FaSearch> 
        
        </div> */}
          <p className="logo">

            <FaIcons.FaNewspaper />News <b>Agency</b></p>
          <p className="signin"><Link to={"/regi"} className="signin">Register</Link>  </p> <p> or</p><p> <Link to={"/login"} className="signin">Login</Link> </p>
          <div className=" h-100">
            <div className="d-flex justify-content-center h-100">
              <div className="searchbar">

                <input className="search_input" type="text" name="" placeholder="Search..." />

                <a href="#" className="search_icon"><FaIcons.FaSearch /></a>
              </div>
            </div>
          </div>

          <p className='menu-bars'>
            <FaIcons.FaList onClick={showSidebar} />
          </p>
        </p>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

          <ul className='nav-menu-items' onClick={showSidebar}>
            <p>.</p><p>.</p>
            <li className='navbar-toggle'>
              <p></p>          <Link to='#' className='menu-bars2'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}

          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;