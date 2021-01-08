import React from 'react'
import {Button, Carousel} from 'react-bootstrap'
import Layout from './Layout/Layout.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import {Wave} from "react-animated-text"
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpg'
import back from '../images/slide3.jpg'
import Trend from './Trend.js';
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
      <Layout >
      </Layout>
      
           <Carousel className="car1">
<Carousel.Item>
  <img id="car"
    className="d-block w-100"
    src={slide1}
    alt="First slide" style={{height:"100vh"}}
  />
  <Carousel.Caption className="c-content" id="ccaption">
   <h1> <Wave text="News Portal"  id="wave" effect="stretch"   effectChange={2}/></h1>
   <div className="date1">
      <strong >{currDate} {day}, {year}</strong>
      </div>
          {/* <Button className="btn btn-success">Login Form</Button> */}
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img id="car"
    className="d-block w-100" 
    src={slide2}
    alt="Third slide" style={{height:"100vh"}}
  />

  <Carousel.Caption className="c-content" id="ccaption">
  <h1> <Wave text="News Portal"  id="wave" effect="stretch"   effectChange={2}/></h1>
  
  <div className="date1">
      <strong >{currDate} {day}, {year}</strong>
      </div>
      {/* <Button className="btn btn-success" onClick={"/login"}>Login Form</Button> */}
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img id="car"
    className="d-block w-100"
    src={slide3}
    alt="Third slide" style={{height:"100vh"}}
  />

  <Carousel.Caption className="c-content" id="ccaption">
  <h1> <Wave text="News Portal"  id="wave" effect="stretch"   effectChange={2}/></h1>
  
  <div className="date1">
      <strong >{currDate} {day}, {year}</strong>
      </div>
      {/* <Button className="btn btn-success">Login Form</Button> */}
  </Carousel.Caption>
</Carousel.Item>
</Carousel>

<Section/>
<Newsfilter></Newsfilter>
{/* <Trend></Trend> */}
{/* <Body></Body> */}
<Editors></Editors>
{/* <Comment></Comment> */}
<Footer/>
      
      </div>
       
    )
}
