import React, { Component } from 'react'
import { Breadcrumb, Form, Button, Input } from 'react-bootstrap'
import Layout from '../Layout/Layout'
import front1 from '../../images/cityf.jpg'
import front from '../../images/neat.jpg'
import { FaFacebook, FaFacebookF, FaFacebookSquare, FaRss, FaSearch, FaTwitter, FaYoutube } from 'react-icons/fa'
import Comment from '../Comment'
import Footer from '../Layout/Footer'
import Newsticker from '../Layout/Newsticker'
import Bodysection from "./Bodysection";
// import { Button, Input } from 'bootstrap'
// import { Input } from 'reactstrap'

export default class NewsPage extends Component {
    render() {
        return (
            <div >
                <Newsticker></Newsticker>
                <Layout></Layout>
                
                <div className='section-title section-bg'>
                <img className="img-fluid"  src={front1} alt="" />
                
                </div>
                <div className="breadcrumb-wrap">
                <Breadcrumb>
                <Breadcrumb.Item href="#" className="text-uppercase breaditem" id="breaditem">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="" className="text-uppercase breaditem" id="breaditem">
                    LIFESTYLE
                </Breadcrumb.Item>
                <Breadcrumb.Item className="text-uppercase breaditem" id="breaditem" active>NEWS IN DETAILS</Breadcrumb.Item>
                </Breadcrumb>
                </div>
                <div className="container-fluid" id="toppart">
                    <div className="row">
                    {/* <div className="col-lg-6">
                    <img className="onepage"  src={front} alt="" style={{height:"100vh"}}/>
                        </div> */}
                            <div className="col-md-8">
                            <img className="onepage"  src={front} alt="" />
                            <div className="entry-header">
                            <span className="label bg-3">lifestyle</span>
                            <span className="label bg-5">world</span>
                            </div>
                            </div>
                            <div className="col-md-4 d-none d-xl-block" id="sidesection">
                            <div className="search-container">
                            <Form className="form-search">
                                <div className="form-group has-feedback">
                               <input className="form-search__input form-control" id="search" placeholder="SEARCH ANY NEWS, ARTICLE" ></input>
                               <button className="form-search__btn icon pe-7s-search form-control-feedback"><FaSearch/></button>
                               </div>
                            </Form>
                            </div>
                            <section className="widget">
                                <h2 className="widget-title ui-title-inner text-right">FOLLOW US</h2>
                                <div className="decor-right"></div>
                                <div className="widget-content">
                                    <ul className="list-subscription list-unstyled">
                                        <li className="list-subscription__item bg-11">
                                            <span className="list-subscription__name">RSS</span>
                                            <span className="list-subscription__number">164.983</span>
                                            FOLLOWERS
                                            <a href="#" className="list-subscription__link">
                                            <FaRss className="list-subscription__link"/>
                                            </a>
                                        </li>
                                        <li className="list-subscription__item bg-8">
                                        <span className="list-subscription__name">TW</span>
                                            <span className="list-subscription__number">714,967</span>
                                            FOLLOWERS
                                            <a href="#" className="list-subscription__link">
                                            <FaTwitter className="list-subscription__link"/>
                                            </a>
                                        </li>
                                        <li className="list-subscription__item bg-9">
                                        <span className="list-subscription__name">FB</span>
                                            <span className="list-subscription__number">250,642</span>
                                            LIKES
                                            <a href="#" className="list-subscription__link">
                                            <FaFacebookF className="list-subscription__link"/>
                                            </a>
                                        </li>
                                        <li className="list-subscription__item bg-10">
                                        <span className="list-subscription__name">YT</span>
                                            <span className="list-subscription__number">920,497</span>
                                            SUBSCRIBERS
                                            <a href="#" className="list-subscription__link">
                                            <FaYoutube className="list-subscription__link"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            
                            </div>
                    </div>

                
                
                </div>
                <Bodysection></Bodysection>
                <Comment/>
                <Footer></Footer>

            </div>
        )
    }
}
