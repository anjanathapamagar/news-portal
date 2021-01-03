import React, { Component } from 'react'
import Body from '../Body'
import Comment from '../Comment'
import Navbar from '../Layout/Navbar'
import '../Layout/style.css'
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
         
         <Navbar/><br></br><br></br><br></br><br></br><br></br>
         <br></br><br></br><br></br><br></br><br></br><br></br><br>
         </br><br></br><br></br><br></br><br></br><br></br><br></br>
         <br></br><br></br><br></br><br></br><br></br><br></br><br>
         </br><br></br><br></br>``
        <br></br>
        
        <Body/>
<Comment/>
        <Footer/>


  
            </div>
        )
    }
}

