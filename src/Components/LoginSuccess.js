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
      <>
        <section className="section-type-a">
          <div className="wrap-title-bg">
            <h2 className="ui-title-bg" >today's news trend</h2>
          </div>
          <div className="section-default section-bg section-bg_dark jarallax">
          <div id="jarallax-container-0" className="trendin">
            <div className="trendmain">
              </div>
          </div>
          <div className="container" id="tmain">
            <div className="row" id="trendrow">
              <div className="col-xs-12">
                <div className="section_inner">
                  <div className="slider-pro slider-thumbnails sp-vertical">
                  <div className="sp-slides-container">
                    <div className="sp-slide sp-selected">
                    <div className="sp-mask sp-grab">
                      <div className="sp-slide sp-animated">
                        <article className="post post-2 post-2_mod-a clearfix " id="articletrend">
                         
                          <div className="entry-media">
                            <a href="" className="prettyPhoto">
                              <img src={travel} alt="" className="img-responsive" id="imgtrend"/>
                            </a>
                            <span className="label bg-6" >travel</span>
                          </div>
                          <div className="entry-main">
                            <div className="entry-header">
                              <h2 className="entry-title text-uppercase" id="h2trend">
                              <a className="h2a" href="">Lorem ipsum dolor amt elit sed tempor incidunt</a>
                              </h2>
                              </div>
                              <div className="entry-meta">
                                <span className="entry-meta__item">
                                  <a href="" className="entry-meta__link">15 mins ago</a>
                                </span>
                                <span className="entry-meta__item">
                                  <i className="icon pe-7s-comment">
                                    <FaCommentDots></FaCommentDots>
                                  </i>
                                  <a href="" className="entry-meta__link">23</a>
                                </span>
                              </div>
                              <div className="entry-content">
                                <p className="ptrend">Lorem ipsum dolor amet consecteu <br/>adipisicing sed do
                                   eiusmod tempor incididunt labore dolore magna aliqua 
                                   enimad minim tempor incididunt.</p>
                              </div>

                          </div>
                        </article>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sp-thumbnails-container sp-right-thumbnails sp-has-pointer">
                  <div className="sp-thumbnails sp-grab">
                    <div className="sp-thumbnail-container">
                      <div className="sp-thumbnail">
                        <article className="post post-2 post-2_mod-b clearfix">
                          <div className="entry-media">
                            <img src={travel} class="img-responsive"/>
                          </div>
                        </article>
                      </div>

                    </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          </div>

        </section>
      </>

       
    )
}
