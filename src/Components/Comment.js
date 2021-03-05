import React, { Component } from 'react'
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import '../style.css'
import DateFormat from 'dateformat';
import User from "../images/user.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios'

export default class Comment extends Component {


//   handleSubmit = (e) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//         this.setState();
//         Axios({
//             method: 'post',
//              url: https://news-portal-api-server.herokuapp.com/news/${this.props.match.params.newsID}/comments/,
//             headers: {
//                 authorization: token
//             }
//         }).then((res) => {
//             console.log(res.data);
//             //   this.setState({comments: res.data});
//             alert('comment added succesfully')
//         }).catch((err) => console.log(err.response));

//     }
// };

  getCommentReactCount = (comment) => {
    const reacts = {
        like: 0,
        dislike: 0
    };

    if (comment.reacts.length > 0) {
        comment.reacts.forEach(react => {
            if (react.type === "LIKE") {
                reacts.like = reacts.like + 1;
            } else if (react.type === "DISLIKE") {
                reacts.dislike = reacts.dislike + 1;
            }
        });
    }
    return reacts;
};


  render() {

    return (
      <div>
        {/* <div className="card emojitab">

          <div className="card-body">
            <div className="emoji">&#128512;</div>
            <div className="emoji">&#128546;</div>
            <div className="emoji">&#128525;</div>
            <div className="emoji">&#128558;</div>
            <div className="emoji">&#128545;</div>

          </div>

        </div> */}
        {
          this.props.comments.map((comment) => {
            const reactsCount = this.getCommentReactCount(comment);
            return (
              <div class="card commentmain " key={comment._id}>

                <div className="card-body">
                  <div  >
                    <img src={User} className=" rounded-circle card-img imgcard " alt={comment.user.fullName} />
                  </div>
                  <b className=" card-text name">{comment.user.fullName}</b>
                  <br></br>
                  <div> {comment.comment}
                  </div>

                </div>
                <b> <div><span className="card-text text-muted " className="mr-3 text-secondary" style={{ fontSize: "13px" }}><faCalendar /> {DateFormat(comment.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</span></div></b>
                <div className=" text-right ">
                  <div className="card-body thump">

                    {/* <FaThumbsUp /> 11 <FaThumbsDown /> 0 */}
                    <span className=" text-success" style={{ fontSize: "16px" }}><FontAwesomeIcon icon={faThumbsUp}  /> {reactsCount.like}</span>
                                                <span className="mr-2 text-danger" style={{ fontSize: "16px" }}><FontAwesomeIcon icon={faThumbsDown} /> {reactsCount.dislike}</span>
  </div>
                </div>
              </div>
            );
          })

        }
        <br></br>
      </div>

    )
  }
}