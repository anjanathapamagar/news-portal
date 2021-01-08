import React from 'react'
import {Button, Carousel} from 'react-bootstrap'
import Layout from './Layout/Layout.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import trend from '../images/trend.jpg'
import travel from '../images/travel.jpg'
import sport from '../images/sport.jpg'
import travel1 from '../images/travel1.jpg'
import world from '../images/world.jpg'
import { faComment } from '@fortawesome/free-solid-svg-icons';
import {FaCommentDots} from 'react-icons/fa';




var minutesToAdd=15;
var currentDate = new Date();
var futureDate = new Date(currentDate.getTime() + minutesToAdd*60000);
  

export default function Trend() {
    return (
      <div classNameNameNameName="container-fluid" >
    <div classNameNameNameName="container-fluid" id ="trend">
        <div classNameNameNameName="container-fluid" id="trendhead">
        {/* <div classNameNameNameName="wrap-title-bg" id="trendhead"> */}
            <h2 classNameNameNameName="ui-title-bg" id="trendfont" >TODAY'S TREND NEWS</h2>
        {/* </div> */}
        </div>
        
        <div className="container-fluid" id="colpart">
  <div className="row" id="row1" >
  
    <div className="col-lg-7 ">
      <div id="box1">
      </div>
    </div>
    <div className="col-lg-5">
      <div id="box2">
      </div>
      <div id="box3" >
      </div>
      <div id="box4" >     
      </div>
    </div>
</div>
</div>
</div>
<div className="container-fluid" id="colpart1">
  <div className="row" id="row11" >
  
    <div className="col-lg-7 d-none d-xl-block" id="travelcal">
      <div id="box11" className="">
      <img className="card-img" id="cardimgg" src={travel} alt=""/>
      <p id="traveltag">TRAVEL</p>
      <div className="card-title" id="cardtitle1">
          <h5>Lorem ipsum dolor amet consectetur </h5>
          <p className="time">15 MIN AGO <FaCommentDots id="comment"/> 23</p>
          <br/>
          <p className="card-text" id="cardbody">Lorem ipsum dolor amet consectetur adipisicing elit
           sed do eiusmodtempor incididunt labore et dolore magna aliqua enimad minim</p>
      </div>
      </div>
    </div>
    <div className="col-lg-5 ">
      <div id="box22" >
      <img className="card-img" id="cardimg11" src={travel1} alt=""/>
      <p className="traveltag1">TRAVEL</p>
      <div className="card-title " id="cardtitle2">
          <h5>Lorem ipsum dolor amet consectetur </h5>
          <p className="time">1 HOUR AGO <FaCommentDots id="comment"/> 23</p>
          
      </div>
      </div>
      <div id="box33" >
      <img className="card-img" id="cardimg22" src={world} alt=""/>
      <p className="worldtag">WORLD</p>
      <div className="card-title " id="cardtitle3">
          <h5>Lorem ipsum dolor amet consectetur </h5>
          <p className="time">1 HOUR AGO <FaCommentDots id="comment"/> 23</p>
      </div>
      </div>
      <div id="box44">
      <img className="card-img" id="cardimg33" src={sport} alt=""/>
      <p className="sporttag">SPORTS</p>
      <div className="card-title " id="cardtitle4">
          <h5>Lorem ipsum dolor amet consectetur </h5>
          <p className="time">1 HOUR AGO <FaCommentDots id="comment"/> 23</p>
      </div>
      </div>
    </div>
</div>
</div>
</div>

       
    )
}
