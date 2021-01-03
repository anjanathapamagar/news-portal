import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as FaIcons from 'react-icons/fa';
import './Layout/style.css'
import './Comment'

export default class Body extends Component {
    render() {
        return (
<div>
    <br></br>
  
<div className="card-group">
<div className="card card1">
<b className="card-title cardt1">POLITICS <small class="text-muted">Nepal, India ...</small></b>


    <img className="card-img-top" src="polirics.jpg"v alt="Card image cap"/>
    <div className="card-body">
    <b className="card-title">Title one</b>
    <p className="card-text"><small class="text-muted">By Author Three</small></p>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text continue"><small class="text-muted"><u>Continue Reading...</u></small></p>
    </div>
  </div>
  <div className="card card2">
  {/* <h5 class="card-title cardt2">FOOD</h5> */}
  <b className="card-title cardt2">FOOD <small class="text-muted">Asia,Europe ...</small></b>
    <img className="card-img-top" src="food.jpeg" alt="Card image cap"/>
    <div className="card-body">
    <b className="card-title">Title two</b>
    <p className="card-text"><small class="text-muted">By Author Two</small></p>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text continue"><small class="text-muted"><u>Continue Reading...</u></small></p>
    </div>
  </div>
  <div className="card card3">
  {/* <h5 class="card-title cardt3">ENTERTAINMENT</h5> */}
  <b className="card-title cardt3">ENTERTAINMENT <small class="text-muted">Nepop, Kpop ...</small></b>
    <img className="card-img-top" src="images.jpg" alt="Card image cap"/>
    <div className="card-body">
    <b className="card-title">Title three</b>
    <p className="card-text"><small class="text-muted">By Author one</small></p>
    
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text continue"><small class="text-muted"><u>Continue Reading...</u></small></p>
    </div>
  </div>
  {/* <div class="card card4">
  <h5 class="card-title cardt4">Card title</h5>
    <div class="card-body">
      
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div> */}
  <div className="card card1" >
  <div className="card-header">
    CATEGORIES
  </div>
  <ul className="list-group list-group-flush">
      <br></br>
    <li className="list-group-item"><FaIcons.FaCheckCircle/> Health</li>
    <br></br>
    <li className="list-group-item"> <FaIcons.FaCheckCircle/> Fashion & Lifestyle</li>
    <br>
    </br>
    <li className="list-group-item"> <FaIcons.FaCheckCircle/> World Products</li>
    <br></br>
    <li className="list-group-item"> <FaIcons.FaCheckCircle/> Music & Video</li>
    <br></br>
    <li className ="list-group-item"> <FaIcons.FaCheckCircle/> Fun & Funny Moments</li>
    <br></br>
  </ul>
</div>
</div>

</div>
        )
    }
}
