import React, {Component} from 'react'
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
import Axios from "axios";
import {BaseURL} from "../Components/utils/Constant.js"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { ToastContainer } from 'react-toastify';


var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var currDate=months[d.getMonth()];
var day= [d.getUTCDate()];
var year =[d.getFullYear()];



export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
        sliderImages: [],
        // errors: {},
        // dialog: null,
        // isRequestComplete: false
    };
}


        responsive = {
          0: { items: 1 },
          // 1024: { items: 3 },
        }

  // componentDidMount = async () => {
  //          Axios({
  //           method: 'get',
  //           url: `https://news-portal-api-server.herokuapp.com/sliderImages`
  //       }).then((res)=>{
  //         console.log(res.data);
  //         this.setState({sliderImages:res.data});

  //     }).catch((err)=>console.log(err.response));
  //   }
  getData () {
    Axios({
      method: 'get',
      url: `https://news-portal-api-server.herokuapp.com/sliderImages`
  }).then((res)=>{
    console.log(res.data);
    const data =res.data
    const img = data.map(m => 
      <img  src={`data:${m.image.mimetype};base64,${m.image.buffer}`} alt="" />
      )
    // this.setState({sliderImages:res.data});
    this.setState({
      carouselItem : img
    })
 
 }).catch((err)=>console.log(err.response));
  }
  componentDidMount = async () => {
    this.getData();
}
  render() {
    const { sliderImages, dialog, isRequestComplete } = this.state;
    // console.log(sliderImages)
    return (

                          
      
                            <div className='mainhome'>
                              <ToastContainer/>
                            <Newsticker></Newsticker>
                            <div className="wrap-nav">
                          <Layout >
                          </Layout>
                                  <div className="car1">
                             <AliceCarousel className="" items={this.state.carouselItem}
                             responsive={this.responsive}
                             autoPlayInterval={2000}
                             autoPlayDirection="ltr"
                             autoPlay={true}
                             autoPlayControls={false}
                             infinite={true}
                             disableDotsControls={true}
                            //  disableButtonsControls={true}
                             fadeOutAnimation={true}
                             mouseTrackingEnabled={true}
                             disableAutoPlayOnAction={true}/>
                             {/* </p> */}
                             </div>               
                            
                          {/* }) */}
                         
                          
                         {/* } */}
                         <div className="c-content" id="ccaption">
                         <h1> <Wave text="News Portal"  id="wave" effect="stretch"   effectChange={2}/></h1>
                      <div className="date1">
                          <strong >{currDate} {day},{year}</strong>
                          </div>
                         </div>
                         

                           <Section/>
                      <Newsfilter className="bgwhite" ></Newsfilter>
                      <Trend></Trend>
                      {/* <br/><br/><br/><br/><br/> */}
                      <Body></Body>
                      {/* <br/><br/><br/><br/><br/><br/><br/><br/> */}
                      <Editors></Editors>
                      {/* <Comment></Comment> */}
                      <Footer/>
                          
                          </div>
                          </div>
    )
  }
}
