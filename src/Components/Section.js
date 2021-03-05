// import f1 from "../images/b11.jpeg";
// import f2 from "../images/collection.png";
import f3 from "../images/1.jpg";
import f4 from "../images/2.jpg";
import f5 from "../images/3.jpg";
import f6 from "../images/4.jpg";
import Axios from "axios";
import ReactHtmlParser from 'react-html-parser';
import ImageSlider from "../Components/Imageslider.js"

import {Button, FormGroup, Label, Input} from 'reactstrap';

import React, {Component} from 'react'
import { Link } from "react-router-dom";

export default class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: null,
            categories: [],
            page: 1,
            category: "",
            limit: 1,
            users: [],
            Health: [],
            Sports: [],
            Technology: [],
            lifestyle: []
        }
    }

    getLifstylenews = () => {
        Axios.get(`https://news-portal-api-server.herokuapp.com/news/1/1/600b0f390e48ef0015398ca3/new/.*`).then((res) => {
            console.log(res.data);
            this.setState({lifestyle: res.data});

        }).catch((err) => console.log(err.response));
    }

    getTechnologynews = () => {
        Axios.get(`https://news-portal-api-server.herokuapp.com/news/1/1/600b0f090e48ef0015398ca2/new/.*`).then((res) => {
            console.log(res.data);
            this.setState({Technology: res.data});

        }).catch((err) => console.log(err.response));
    }

    getSportsnews = () => {
        Axios.get(`https://news-portal-api-server.herokuapp.com/news/1/1/5ffdaeb1b754ff0017eb58b1/new/.*`).then((res) => {
            console.log(res.data);
            this.setState({Sports: res.data});

        }).catch((err) => console.log(err.response));
    }

    getHealthnews = () => {
        Axios.get(`https://news-portal-api-server.herokuapp.com/news/1/1/600ab38ed9bc7f0015af1df3/new/.*`).then((res) => {
            console.log(res.data);
            this.setState({Health: res.data});

        }).catch((err) => console.log(err.response));
    }

    componentDidMount() {
        this.getLifstylenews();
        this.getTechnologynews();
        this.getSportsnews();
        this.getHealthnews();
    }
    render() {
        return (
            <>

                <div className="container">


                    <div className="row">
                        <div className="col">
                            <div className="my-5 feature">


                                <div className="centered">
                                    <div className="text-block0">
                                        <h6 className="text-uppercase latecategory">Latest From Categories</h6>

                                    </div>
                                </div>

                                <div className="">
                                    <div className="row ">
                                        <div className="feature__item d-flex mt-5">
                                        {
            
                                    this.state.lifestyle.map((lifestyle)=>{
                                    return <p> 
                            <div className="">
                                <div className="catlate">

                        <img className="secimg " src={f3}
                            alt=""/>
                             {/* {
              lifestyle.images && lifestyle.images.length > 0 &&
              (
                  <ImageSlider className="secimg " images={lifestyle.images} />
              )
            } */}
                            </div>
                        <h6 className="forcat" ><Link to={{
                                            pathname: `/newspage/${lifestyle._id}`,
                                            lifestyle
                                        }} style={{ textDecoration: 'none', hover: '#fff'}} className="bottom-left1" >{ReactHtmlParser(lifestyle.title.substring(0,30) + '...')}</Link>
                        </h6>
                        
                        <div className="text-block1">
                            LIFESTYLE

                        </div>
                        </div>
                            </p>
                        })
                            }
                            {
            
                                                this.state.Technology.map((technology)=>{
                                                return <p> 
                                        <div className="">
                                        <div className="catlate">
                                    <img className="secimg" src={f4}
                                        alt=""/>
                                        </div>

                                        <h6 className="forcat"><Link to={{
                                            pathname: `/newspage/${technology._id}`,
                                            technology
                                        }} style={{ textDecoration: 'none' }} className="bottom-left1" >{ReactHtmlParser(technology.title.substring(0,30) + '...')}</Link>
                        </h6>
                                    <div className="text-block2">
                                                    TECHNOLOGY

                                                </div>
                                    </div>
                                        </p>
                                    })
                                        }

                                    {            
                                                    this.state.Sports.map((sports)=>{
                                                    return <p> 
                                            <div className="">
                                                <div className="catlate">

                                        <img className="secimg" src={f5}
                                            alt=""/>
                                            </div>

                                            <h6 className="forcat"><Link to={{
                                            pathname: `/newspage/${sports._id}`,
                                            sports
                                        }} style={{ textDecoration: 'none' }} className="bottom-left1" >{ReactHtmlParser(sports.title.substring(0,30) + '...')}</Link>
                        </h6>
                                        <div className="text-block3">
                                                        SPORTS

                                                    </div>
                                        </div>
                                            </p>
                                        })
                                            }

                                            {
                                                        
                                                        this.state.Health.map((health)=>{
                                                        return <p> 
                                                <div className="">
                                                    <div className="catlate">

                                            <img className="secimg" src={f6}
                                                alt=""/>
                                                </div>

                                                <h6 className="forcat" ><Link to={{
                                            pathname: `/newspage/${health._id}`,
                                            health
                                        }} style={{ textDecoration: 'none' }} className="bottom-left1" >{ReactHtmlParser(health.title.substring(0,30) + '...')}</Link>
                        </h6>
                                            <div className="text-block4">
                                                    HEALTH


                                                </div>
                                            </div>
                                                </p>
                                            })
                                                }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */} </>
        )
    }
}
