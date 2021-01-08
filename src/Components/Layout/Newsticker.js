import React, { Component } from 'react'
import Body from '../Body.js'
import Comment from '../Comment.js'
import Navbar from '../Navbar.js'
import '../../style.css';
import Footer from './Footer'


export default class Newsticker extends Component {
    render() {
        return (
            <div>
        <div className="tickerwrapper">
            <div className="bigHeading">  Top Headline .</div>
            <div className="text-update">
              <p>  <li>News portal on the way. We are from development team.</li></p>
              
            </div>
        </div>
       <br></br>
         {/*</div>  */}
         
         <Navbar/>
        
        {/* <Body/>
<Comment/>
        <Footer/> */}
 
            </div>
        )
    }
}

