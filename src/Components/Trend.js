import React, { Component } from 'react'
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
import Axios from "axios";
import { PopularityThreshold } from './utils/Constant.js';
import { Link } from 'react-router-dom';
import DateFormat from 'dateformat';
import SingleIMage from "../Components/Singleimage.js"
import ImageSlider from "../Components/ForTrendImage.js"
import ReactHtmlParser from 'react-html-parser';




var minutesToAdd=15;
var currentDate = new Date();
var futureDate = new Date(currentDate.getTime() + minutesToAdd*60000);
  



export default class Trend extends Component {

  constructor(props) {
    super(props);
    this.state = {
        news: null,
        categories: [],
        page: 1,
        category: "",
        limit: 1,
        Trend: [],
        
    }
}

getTrendnews = () => {
  Axios.get(`https://news-portal-api-server.herokuapp.com/news/popular/this_month/false/1000`)
  .then((res) => {
      console.log(res.data);
      this.setState({Trend: res.data});

  }).catch((err) => console.log(err.response));
}

componentDidMount() {
  this.getTrendnews();
}
  render() {
    const{Trend}=this.state
    console.log(Trend);
    return (
      <>
      
      <div className="container-fluid" id ="trend">
    <div className="container-fluid" id ="cont">
    <div className="wrap-title-bg d-flex justify-content-center">
            <h2 className="ui-title-bg" >today's news trend</h2>
          </div>
    <div class="container-fluid" className="colmain">
    <div class="row d-lg-block" id="corelative">
      
        {

    this.state.Trend.slice(1,5).map((trend) => {
   return <p  >
        <div className="card float-right" id="forcardtrend" style={{width:"700px",  }}>
                  <div className="row no-gutters">
                      <div className="col-md-5" id="cardimg11" style={{background:" #868e96"}}>
                        {/* <img src={travel1}   className="card-img-top h-100" alt="..."/> */}
                        {
                    trend.images && trend.images.length > 0 &&
                    (
                      <ImageSlider  images={trend.images} />
                    )
                  }
                        
                        </div>
                        <p className="traveltag1">{trend.tags}</p>
                        
                      
                      <div className="col-sm-7">
                          <div className="card-body totalcard">
                              <h4 className="card-text smcard ttile"><Link  className="trendlink" to={{
                                            pathname: `/newspage/${trend._id}`,
                                            trend
                                        }} > {trend.title}</Link></h4>
                              <p className="time">{DateFormat(trend.createdAt, "mmmm dS, yyyy")} <FaCommentDots id="comment"/> 23</p>
                              </div>
                      </div>
                  
              </div>
              </div>
              </p>
          })
            } 
            {/* </div> */}
            {/* <div className=""> */}


{

this.state.Trend.slice(0,1).map((trend) => {
return <p  >
        <div class="card col-lg-5 firstcard  float-left">
  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="">
    {/* <img className="card-img" id="cardimgg" src={travel} alt=""/> */}
    {
                    trend.images && trend.images.length > 0 &&
                    (
                      <SingleIMage   images={trend.images} />
                    )
                  }
    {/* <a href="#!"> */}
      {/* <div class="mask" ></div> */}
    {/* </a> */}
  </div>
  <p className="traveltag col-md-4">{trend.tags}</p>
  <br/>
  <div class="card-body">
    <h5 class="card-title" id="cardtitle1"><Link  to={{
                                            pathname: `/newspage/${trend._id}`,
                                            trend
                                        }}>{trend.title}</Link></h5>
    {/* <p className="time">15 MIN AGO <FaCommentDots id="comment"/> 23</p>
     */}
     <p className="time">{DateFormat(trend.createdAt, "mmmm dS, yyyy")} <FaCommentDots id="comment"/> 23</p>
          <br/>
    <p class="card-text" id="cardbody">
      {ReactHtmlParser(trend.description.substring(0,330) + '...')}
    </p>
    
  </div>
</div>
</p>
          })
            }
            {/* </div>  */}

        

{/* // this.state.Trend.slice(0,2).map((trend) => { */}
{/* //   return <p  > */}
      
{/* //               </p> */}


              {/* {

          this.state.Trend.slice(0,1).map((trend) => {
            return <p  >
              <div className="card" style={{width:"500px"}}>
                  <div className="row no-gutters">
                      <div className="col-sm-5" style={{background:" #868e96"}}>
                        <img src="images/0.png" className="card-img-top h-100" alt="..."/></div>
                        
                      
                      <div className="col-sm-7">
                          <div className="card-body">
                              <h5 className="card-title"></h5>
                              <p className="card-text">gg</p>
                              <a href="#" class="btn btn-primary stretched-link">View Profile</a>
                          </div>
                      </div>
                  
              </div>
              </div>

              </p>
})
  } */}


    </div>
</div>

</div>

</div>

     </>  
    )
  }
}

