import React from 'react'
import {Button, Carousel} from 'react-bootstrap'
import Layout from './Layout/Layout.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import ImageSlider from './Imageslider.js';
import Newsticker from './Layout/Newsticker.js';
import Footer from './Layout/Footer.js';
import Section from './Section.js';
import "../main.css"
import Newsfilter from './NewsFilter.js';
import Body from './Body.js';
import Editors from './Editors.js';
import Comment from "./Comment.js"


var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var currDate=months[d.getMonth()];
var day= [d.getUTCDate()];
var year =[d.getFullYear()];

export default function Home() {
    return (
      <div className='mainhome'>
        <Newsticker></Newsticker>
        <div className="wrap-nav">
      <Layout >
      </Layout>
      
          <h1>Login success page</h1>
<Section/>
<Newsfilter></Newsfilter>
{/* <Trend></Trend> */}
<br/><br/><br/><br/><br/>
<Body></Body>
<br/><br/><br/><br/><br/><br/><br/><br/>
<Editors></Editors>
{/* <Comment></Comment> */}
<Footer/>
      
      </div></div>
       
    )
}
