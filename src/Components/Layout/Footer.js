import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as FaIcons from 'react-icons/fa';

export default function Footer() {
    return (
        <div>
            <div className="main-footer">
            <div className="container">
            <div className="row">
                {/*column 1 */}
                <div className="col-md-3 col-sm-6">
                <h2 className="name"><FaIcons.FaNewspaper /> <i className="news">News</i> <a className="paper">AGENCY</a></h2>
                
                    <ul className="list-unstyled">
                        <li>Lorem ipsum dolor amet consecteu adipisicing sed do eiusmod tempor incididunt. </li>
                        <hr className="new1"></hr>
                        <div class="row">
        
                       </div>
                    
                       <p className="names"><FaIcons.FaLocationArrow /> <i> _ Kapan, Kathmandu </i> </p>
                       <p className="names"> <FaIcons.FaPhone /> <i className="news">_  +9779849494949 </i> </p>
                       <p className="names"><FaIcons.FaEnvelope /> <i className="news"> _ contact.us@newsportal.com</i> </p>
                       <p className="names"><FaIcons.FaFax /> <i className="news">_ 123.456.0000</i> </p><br></br>
                    </ul>
                </div>

                  {/*column 2 */}
                  <div className="col-md-3 col-sm-6 ">
                    <b><p className='text-center '>CATEGORIES</p></b>
                    <hr className="new2"></hr>
                    <ul className="list-styled ">
                        <li>FASHION & LIFESTYLE</li>
                        <li>WORLD POLITICS </li>
                        <li>ENTERTAINMENT NEWS</li>
                        <li>MUSIC & VIDEOS </li>
                        <li>FUN & FUNNY MOMENTS</li>
                        <li>PHOTOGRAPHY</li>
                    </ul>
                    
                </div>
                
                  {/*column 3 */}
                  <div className="col-md-3 col-sm-6">
                  <b><p className='text-center'>OUR PARTNERS</p></b>
                  <hr className="new3"></hr>
                    <ul className="list-styled">
                        <li>ABC MEDIA</li>
                        <li>CORRESPONDENTS</li>
                        <li>ADVERTISE WITH US</li>
                        <li>TERMS & CONDITIONS </li>
                        <li>WORK FOR US </li>
                        <li>GENERAL INQUIRIES</li>
                    </ul>
                </div>
                
                  {/*column 4 */}
                  <div className="col-md-3 col-sm-6">
                  <b> <p className='text-center'>GET CONNECT</p></b>
                  <hr className="new4"></hr>
                    <ul className="list-styled">
                        <li>CONTACT US</li>
                        <li>DOWNLOAD APPS</li>
                        <li>PODCASTS</li>
                        <li>NEWSLETTER SIGNUP </li>
                        <li>BREAKING NEWS ALERTS </li>
                        
                    </ul>
                    
                </div>
                
                </div>
                

                {/* Footer Botton */}
              
                </div>
                <div className="footer-bottom">
                <br/>
                    <p className="text-xs-center">
                        &copy;{ new Date().getFullYear()} News Portal -All Rights Reserved
                    </p>
                </div> 
            </div>
         
        </div>
    )
}
