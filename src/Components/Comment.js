
import React, { Component } from 'react'
import './Layout/style.css'

export default class Comment extends Component {
    render() {
        return (
            <div>
                               <div class="card emojitab">
                
  <div class="card-body">
  <div className="emoji">&#128512;</div>
  <div className="emoji">&#128546;</div>
  <div className="emoji">&#128525;</div>
  <div className="emoji">&#128558;</div>
  <div className="emoji">&#128545;</div>
    

  </div>
  
</div>
<hr className="horiline"></hr>
                <br></br>
                <div class="card commentmain">
                
  <div class="card-body">
  <img class="card-img imgcard" src="avatarjpg.jpg" alt="Card image cap"/>
  
   <b className=" card-text name">AANG SHERPA</b>
   <b> <div class="card-text text-muted ">JAN 2, 2021</div></b>
    <br></br>
    <div>Lorem ipsum dolor amet consectetur adipisic elit eiusmod tempor incididunt labore dolore magna aliqu enimad min incididunt ut labore et dolore 
    tetur adipisic elit eiusmod tempor incididunt labore dolore magna aliqu enimad min incididunt
    sed.</div>
    

  </div>
  
</div>
<br></br>
<div class="card commentmain">
  
  <div class="card-body">
  <img class="card-img imgcard" src="naruto.jpg" alt="Card image cap"/>
  
   <b className=" card-text name">NARUTO TAMANG</b>
   <b> <div class="card-text text-muted date">JAN 3, 2021</div></b>
    <br></br>
    <div>Lorem ipsum dolor amet consectetur adipisic elit eiusmod tempor incididunt labore dolore magna aliqu enimad min incididunt ut labore et dolore 
    tetur adipisic elit eiusmod tempor incididunt labore dolore magna aliqu enimad min incididunt
    sed.</div>
    

  </div>
  
</div>







<br></br>
            </div>
        )
    }
}
