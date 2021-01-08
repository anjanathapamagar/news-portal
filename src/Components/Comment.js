
import React, { Component } from 'react'
import { FaFacebook, FaHandPointUp, FaIcons, FaInstagram, FaLinkedin, FaPinterest, FaThumbsDown, FaThumbsUp, FaTwitter, FaYoutube } from 'react-icons/fa'
import '../style.css'

export default class Comment extends Component {
  render() {
    return (
      <div>
        <b><div className="new6"></div></b>
        <p className="tags"><b>TAGS:</b>  Movies, Fashion, Health</p>
        <br></br>

        {/* <div className="card emojitab">

          <div className="card-body">
            <div className="emoji">&#128512;</div>
            <div className="emoji">&#128546;</div>
            <div className="emoji">&#128525;</div>
            <div className="emoji">&#128558;</div>
            <div className="emoji">&#128545;</div>

          </div>

        </div> */}
        <br></br>
        <div class="card bg-light mb-3 author" >
          <div class="card-body">
            <img className="card-img imgcard" src="sersoti.jpg" alt="Card image cap" />
            <b className=" card-text text-muted name">AUTHOR</b>
            <b> <div>SARASWOTI LUITEL</div></b>
            <br></br>
            <div>Lorem ipsum dolor amet consectetur adipisic elit eiusmod tempor incididunt labore dolore magna aliqu enimad min incididunt ut labore et dolore
          teturLorem ipsum dolor amet consectetur adipisic elit eiusmod tempor incididunt labore dolore magna aliqu enimad.</div>
            <div className="card-body">
              <div className="socialm"><FaFacebook /> </div>
              <div className="socialm"><FaLinkedin /></div>
              <div className="socialm"><FaInstagram /></div>
              <div className="socialm"> <FaYoutube /></div>
              <div className="socialm"><FaTwitter /></div>
              <div className="socialm"><FaPinterest /></div>

            </div>

          </div>
        </div>
        <br></br><br></br>
        <p className="commentname">LEAVE A COMMENT</p>

        <b><div className="new5"></div></b>
        <br></br>
        <div className="container">
          <div className="">

            <div >

              <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="row register-form">

                  <div className="col-md-8 " >
                    <div class="form-group">
                      <textarea class="form-control reply" placeholder="COMMENT" rows="3"></textarea>
                    </div>
                    <input type="SUBMIT" class="btn-dark submit-reply" value="SUBMIT" />
                  </div>

                </div>
                <br></br>
              </div>
            </div>
          </div>
        </div>
        <p className="commentname">COMMENTS: 3</p>
        <b><div className="new5"></div></b>

        <br></br>
        <div class="card commentmain ">

          <div className="card-body">
            <img className="card-img imgcard" src="avatarjpg.jpg" alt="Card image cap" />

            <b className=" card-text name">AANG SHERPA</b>
            <b> <div className="card-text text-muted ">JAN 1, 2021</div></b>
            <br></br>
            <div>Lorem ipsum dolor amet consectetur adipisic elit eiusmod tempor incididunt labore dolore magna aliqu enimad min incididunt ut labore et dolore
            tetur adipisic elit eiusmod tempor incididunt labore dolore magna aliqu enimad min incididunt
    sed.</div>


          </div>
          <div className=" text-right ">
            <div className="card-body">

              <FaThumbsUp /> 11 <FaThumbsDown /> 0
  </div>
          </div>


        </div>
        <br></br>
        <div className="card commentmain">

          <div className="card-body">
            <img className="card-img imgcard" src="naruto.jpg" alt="Card image cap" />

            <b className=" card-text name">NARUTO TAMANG</b>
            <b> <div class="card-text text-muted date">JAN 2, 2021</div></b>
            <br></br>
            <div>Lorem ipsum dolor amet consectetur adipisic elit eiusmod tempor incididunt labore dolore magna aliqu enimad min incididunt ut labore et dolore
            tetur adipisic elit eiusmod tempor incididunt labore dolore magna aliqu enimad min incididunt
    sed.</div>


          </div>
          <div className=" text-right">
            <div className="card-body">

              <FaThumbsUp /> 10 <FaThumbsDown /> 0
  </div>
          </div>


        </div>
        <br></br>
        <div className="card commentmain">

          <div className="card-body">
            <img className="card-img imgcard" src="picca.png" alt="Card image cap" />

            <b className=" card-text name">PIKA GURUNG</b>
            <b> <div class="card-text text-muted date">JAN 3, 2021</div></b>
            <br></br>
            <div>Lorem ipsum dolor amet consectetur adipisic elit eiusmod tempor incididunt labore dolore magna aliqu enimad min incididunt ut labore et dolore
            tetur adipisic elit eiusmod tempor incididunt labore dolore magna aliqu enimad min incididunt
    sed.</div>

          </div>
          <div className=" text-right">
            <div className="card-body">

              <FaThumbsUp /> 20 <FaThumbsDown /> 0
  </div>
          </div>


        </div>
        <br></br>


        <br></br>
        <br></br>

      </div>

    )
  }
}
