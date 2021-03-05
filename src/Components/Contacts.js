import React, { Component } from 'react'
import './../main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, Button,Form,Row } from 'reactstrap';
import * as FaIcons from 'react-icons/fa';
import Layout from './Layout/Layout'
import Footer from './Layout/Footer'
import Newsticker from './Layout/Newsticker'
import front1 from './../images/cityf.jpg'
import {FaMapMarkerAlt, FaRegEnvelope}  from 'react-icons/fa';
import {AiTwotonePhone} from 'react-icons/ai';
import { Breadcrumb } from 'react-bootstrap'
import {BsClock} from 'react-icons/bs';
import axios from 'axios';


 import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBContainer } from "mdbreact";
import { toast } from 'react-toastify';
import { TextArea } from 'semantic-ui-react';


export default class Contacts extends Component {

    constructor(props){
        super(props);
       
        this.state ={
            name:"",
            email:"",
            subject: "",
            message:""       
        
        }
        
    }
    
onChange = e => {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({ [name]: value });
};

  handlecontactus = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      data:{name: this.state.name, email: this.state.email, subject: this.state.subject, message: this.state.message},
      url: `https://news-portal-api-server.herokuapp.com/messages`,
                

    }).then(result => {
      console.log(result);
      this.setState({
        name:"",
        email:"",
        subject:"",
        message:""
      });
      toast.success("Message send successfully!");

    }).catch((error)=> console.log(error.response));
  }
    render() {
      const {message, name, email,subject}= this.state
      console.log(message);
        return ( 
            <div>
<Newsticker></Newsticker>
                <Layout></Layout>

                <div className='section-title section-bg'>
                <img className="img-fluid"  src={front1} alt="" />

                </div>
                <div className="breadcrumb-wrap">
                <Breadcrumb>
                <Breadcrumb.Item href="#" className="text-uppercase breaditem" id="breaditem">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="" className="text-uppercase breaditem" id="breaditem">
                 ContactUs
                </Breadcrumb.Item>
               
                </Breadcrumb>
                </div>
                <div className="container">
            <section className="my-5">
            
      <div className="section-type-a">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="contacts-item">
                    {/* <FaMapMarkerAlt/> */}
                    <MDBBtn tag="a" floating color="black" className="accent">
                <MDBIcon icon="map-marker" /></MDBBtn>
                     {/* <i className="icon pe-7s-map  color-primary"> </i>
                    <div className="decor-center bg-primary"></div> */}
                    <div className="contacts-item__title">location</div>
                    <div className="contacts-item__info">68 Central Road, Inner Ave. <br/> FL 20568 - USA</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="contacts-item">
                   
                    {/* <AiTwotonePhone/> */}
                    <MDBBtn tag="a" floating color="black" className="accent">
                <MDBIcon icon="phone" />
                </MDBBtn> 
                
                  {/* <i className="icon pe-7s-call color-7"></i>
                    <div className="decor-center bg-10"></div> */}
                    <div className="contacts-item__title">phone</div>
                    <div className="contacts-item__info">( +01 ) 234 567 8900 <br/> 0800 1234 5678</div>
                  </div>
                </div>
                
                <div className="col-md-3">
                
                
                  <div className="contacts-item">
                  {/* <FaRegEnvelope/> */}
                  <MDBBtn tag="a" floating color="black" className="accent">
                <MDBIcon icon="envelope" />
              </MDBBtn>
                  {/* <i    className="icon pe-7s-mail-open-file color-13"></i>
                    <div className="decor-center bg-9"></div> */}
                   
                    <div className="contacts-item__title">email</div>
                    <div className="contacts-item__info">news@agency.org <br/> news.agency@domain.com
                    </div>
                  </div>
                </div>
              
                <div className="col-md-3">
                  <div className="contacts-item">
                 {/* < BsClock/> */}
                 <MDBBtn tag="a" floating color="black" className="accent">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                   className="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>
               
              </MDBBtn>
                  {/* <i className="icon pe-7s-clock color-3"></i>
                    <div className="decor-center bg-3"></div> */}
                    <div className="contacts-item__title">working hours</div>
                    <div className="contacts-item__info">Mon - Fri : 9.00am to 6.00pm <br/> Sat - Sun : 10.00am to 4.00pm </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        
           <br/>
           <br/>
       <MDBContainer >
      <MDBRow > 
        <div className="container">
        <MDBCol lg="10"  className="md-6 offset-1">
          <MDBCard className='contact'>
          <Form>
            <MDBCardBody >
                
            <div className="form-header accent-1">
              
                <h3 className=" container">
                  <MDBIcon icon="envelope" /> Get in touch:
                </h3>
              </div>
              <div className="row">
              <div className="col">
              <div className="md-form">
                <MDBInput
                  icon="user"
                  name="name"
                  label="Your name"
                 iconClass="grey-text"
                  type="text"
                  id="name"
                  value={name}
                  onChange={this.onChange}
                />
              </div>
              <br/>
              <div className="md-form">
                <MDBInput
                className="md"
                  icon="envelope"
                  label="Your email"
                  name="email"
                  iconClass="grey-text"
                  type="text"
                  id="email"
                  value={email}
                  onChange={this.onChange}
                />
              </div>
              <br/>
              <div className="md-form">
                <MDBInput
                
                  className="subjecti"
                  icon="tag"
                  label="Subject"
                  name="subject"
                  iconClass="grey-text"
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={this.onChange}
                />
              </div>
              <br/>
              <div className="md-form">
              <MDBInput
                
                className="txtarea"
                icon="tag"
                label="Message"
                name="message"
                iconClass="grey-text"
                type="text"
                id="subject"
                value={message}
                onChange={this.onChange}
              
                />
              </div>

              <br/>

              </div>
              </div>
              <div className="text-center">
                <MDBBtn color="black" className="cbtn" onClick ={this.handlecontactus}>Send</MDBBtn>
              </div>
            </MDBCardBody>
            </Form>
          </MDBCard>
        </MDBCol>
        </div>
        

        <br />
         <MDBCol lg="5"  >
</MDBCol> 
        
      </MDBRow>
      </MDBContainer>
      
      
    </section>
    </div>
    
    <Footer/>
    </div>
            
        )
    }
}
