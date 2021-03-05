import React, {Component} from 'react'
import {Breadcrumb, Form, Button} from 'react-bootstrap'
import Layout from '../Layout/Layout'
import front1 from '../../images/cityf.jpg'
import front from '../../images/neat.jpg'
import { Input } from 'reactstrap';
import DateFormat from 'dateformat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faTachometerAlt, faEye, faCalendar, faBars, faShare, faComments, faSmile, faSurprise, faLaugh, faAngry, faSadTear, faInfoCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import {    FaFacebook,FaInstagram,FaFacebookF,
    FaPinterest,
    FaRss,
    FaSearch,
    FaTwitter,
    FaThumbsUp,
    FaThumbsDown ,
    FaYoutube
} from 'react-icons/fa'
import Comment from '../Comment'
import Footer from '../Layout/Footer'
import Newsticker from '../Layout/Newsticker'
import sersoti from "../../images/user.png";

import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as FaIcons from 'react-icons/fa';
// import { FaFacebook,  FaInstagram, FaLinkedin, FaPinterest, FaThumbsDown, FaThumbsUp, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../../main.css';
import f6 from "../../images/7.jpg";

import {Redirect, Link} from 'react-router-dom';
import Loading from '../Layout/Loading';
import f16 from "../../images/5.jpg";
import f17 from "../../images/user.png";
import User from "../../images/user.png";

import fn from "../../images/sknews.jpg";
// import { Button, Input } from 'bootstrap'
// import { Input } from 'reactstrap'
import ReactHtmlParser from 'react-html-parser';
import ImageSlider from './ImageSlider'
import {UserContext} from '../context/UserContext.js';


export default class NewsPage extends Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
        this.state = {
            News: [],
            comments:[],
            comment:'',
            categories: [],
            errors: {},
            isRequestComplete: false,
            config : {
                headers: { Authorization: "Bearer" + localStorage.getItem('token') }
              }
       
    }

  
}

getReactsOfNews = () => {
    const reacts = {
        happy: 0,
        sad: 0,
        surprised: 0,
        hysteric: 0,
        angry: 0
    };

    const newsReacts = this.state.News.reacts;
    if (newsReacts.length > 0) {
        newsReacts.forEach(react => {
            switch (react.type) {
                case "HAPPY": {
                    reacts.happy = reacts.happy + 1;
                    break;
                }
                case "SAD": {
                    reacts.sad = reacts.sad + 1;
                    break;
                }
                case "SURPRISED": {
                    reacts.surprised = reacts.surprised + 1;
                    break;
                }
                case "HYSTERIC": {
                    reacts.hysteric = reacts.hysteric + 1;
                    break;
                }
                case "ANGRY": {
                    reacts.angry = reacts.angry + 1;
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
    return reacts;
};

    
handleChange =(e) =>{
    this.setState({
        [e.target.name]: e.target.value
       
    })
    }
    
    handleSubmit=(e) =>{
    console.log("hejeje");
    Axios.post(`https://news-portal-api-server.herokuapp.com/news/${this.props.match.params.newsID}/comments`,
    this.state.config)
    .then((res)=>{
    console.log(res.data);
             this.setState({comments: res.data});
    alert('comment added succesfully')
    }).catch((err)=>console.log(err.response));
    
    }
    handleSubmmit=(e) =>{
    
        Axios.post(`https://news-portal-api-server.herokuapp.com/news/${this.props.match.params.newsID}/comments`,this.state.config)
        .then((res)=>{
         console.log(res.data);
         this.setState({
         comments:[],
        comment:'',    
             
    })
    alert('comment added re baba re baba')
 }).catch((err)=>console.log(err.response));

}
    

    getNews = () => {
        Axios.get(`https://news-portal-api-server.herokuapp.com/news/${
            this.props.match.params.newsID
        }`).then((res) => {
            console.log(res.data);
            this.setState({News: res.data, isRequestComplete: true});

        }).catch((err) => console.log(err.response));
    }
    getCategories = () => {

        Axios.get(`https://news-portal-api-server.herokuapp.com/categories`).then((res) => {
            console.log(res.data);
            this.setState({categories: res.data});

        }).catch((err) => console.log(err.response));
    }
    // postComment = () => {

    //     Axios.post(`https://news-portal-api-server.herokuapp.com/news/${this.props.match.params.newsID}/comments`).then((res) => {
    //         console.log(res.data);
    //         this.setState({comments: res.data});

    //     }).catch((err) => console.log(err.response));
    // }

    componentDidMount() {
        this.getCategories();
        this.getNews();
      // this.postComment();


    }
    handleChange =(e) =>{
        this.setState({
            [e.target.name]: e.target.value
           
        })
    }

 


    render() {

        const {News, isRequestComplete} = this.state;
        const {user} = this.context;
        let newsReacts;
        if (!isRequestComplete)
            return <Loading />;
            if (News)
            newsReacts = this.getReactsOfNews();

        if (!isRequestComplete) 
            return <Loading/>;
            

        return (
            <div>
                <div>
                    <Newsticker></Newsticker>
                    <div className="wrap-nav">
                        <Layout></Layout>

                        <div className='section-title section-bg'>
                            <img className="img-fluid"
                                src={front1}
                                alt=""/>

                        </div>

                        <div className="breadcrumb-wrap">
                            <Breadcrumb>
                                <Breadcrumb.Item href="#" className="text-uppercase breaditem" id="breaditem">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="#" className="text-uppercase breaditem" id="breaditem">
                                    {
                                    News.category.category
                                } </Breadcrumb.Item>
                                <Breadcrumb.Item className="text-uppercase breaditem" id="breaditem" active>NEWS IN DETAILS</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div className="container-fluid" id="toppart">
                            <div className="row">
                             
                                <div className="col-md-8">
                                    {/* <img className="onepage" src={front} alt="" /> */}
                                    {
                                    News.images && News.images.length > 0 && (
                                        <ImageSlider className="card-img-top"
                                            images={
                                                News.images
                                            }/>
                                    )
                                }

                                    <div className="entry-header">
                                        <span className="label bg-3">
                                            {
                                            News.category.category
                                        }</span>
                                        <span className="label bg-5">
                                            {
                                            News.tags
                                        }</span>
                                    </div>
                                </div>
                                <div className="col-md-4 d-none d-xl-block" id="sidesection">
                                    <div className="search-container">
                                        <Form className="form-search">
                                            <div className="form-group has-feedback">
                                                <input className="form-search__input form-control" id="search" placeholder="SEARCH ANY NEWS, ARTICLE"></input>
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


                        {/* Body section */}


                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">


                                    <h4 className="textt1">
                                        <strong>{
                                            News.title
                                        }</strong>
                                    </h4><br/>
                                    <p className="textt1 font-italic">
                                        By: {
                                        News.author.fullName
                                    }
                                       &nbsp;&nbsp; <b> <span className="card-text text-muted " className="mr-3 text-secondary" style={{ fontSize: "13px" }}><faCalendar /> {DateFormat(News.createdAt, "dddd, mmmm dS, yyyy")}</span></b>&nbsp;&nbsp;
                                        <FaIcons.FaCommentAlt />&nbsp; {/*                        
                     <MDBIcon far icon="comment-alt" />   <i class="far fa-comment-alt"></i>*/}
                                        {News.comments.length}</p>
                                    <h6 className="textt1">
                                        {
                                        ReactHtmlParser(News.description)
                                    } </h6>
                                </div>

                                <div className=" col-lg-4">
                                    <div className="news">
                                        <br></br>
                                        <div className="">
                                            CATEGORIES

                                            <hr className="newscateg"></hr>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <br></br>
                                            {

                                            this.state.categories.map((category) => {
                                                return <p>

                                                    <li className="list-group-item"><FaIcons.FaCheckCircle/> {
                                                        category.category
                                                    }</li>

                                                </p>
                                        })
                                        } </ul>
                                    </div>
                                </div>

                            </div>


                            <div className="row">
                                <div className="col">
                                    <hr className="newscatego"></hr>


                                    <h6 className="textt">
                                    
                                        {
                                        News.title
                                    }</h6>
                  {/* <h3><u>Express Your Feeling On This News</u></h3>
                                    <div className="col-12  py-4 mb-4 d-flex justify-content-between">
                                                <span >
                                                    <span className="text-success mr-1"><FontAwesomeIcon style={{ fontSize: "25px" }} icon={faSmile} onSubmit={this.state.handleReact} /> {newsReacts.happy} </span>
                                                    <span className="text-warning mr-1"><FontAwesomeIcon style={{ fontSize: "25px" }} icon={faSadTear}  onClick={this.state.handleReact}/> {newsReacts.sad} </span>
                                                    <span className="text-info mr-1"><FontAwesomeIcon style={{ fontSize: "25px" }} icon={faSurprise} onClick={this.state.handleReact} /> {newsReacts.surprised} </span>
                                                    <span className="text-success mr-1"><FontAwesomeIcon style={{ fontSize: "25px" }} icon={faLaugh}  onClick={this.state.handleReact}/> {newsReacts.hysteric} </span>
                                                    <span className="text-danger mr-1"><FontAwesomeIcon style={{ fontSize: "25px" }} icon={faAngry}  onClick={this.state.handleReact}/> {newsReacts.angry} </span>
                                                </span>
                                               
                                            

        </div> */}
                                    <h6 className="text2 font-italic">
                                        <strong>
                                            --- {
                                            News.author.fullName
                                        }</strong>
                                    </h6>

                                    <hr className="newscateg"></hr>

                                    <div className="txt2 ">
                                    <div className="div4">
                                        <img src={fn}
                                            alt=""/>


                                    </div>
                                    <div>
                                        <h6>
                                            <b>Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local health authority.
                                            </b>
                                        </h6><br/>
                                        <h6>
                                            <b>
                                                Calling in advance allows your healthcare provider to quickly direct you to the right health facility. This protects you, and prevents the spread of viruses and other infections.</b>
                                        </h6>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <br/>


                                </div>


                                <div className="col-lg-5">

                                    <div className="text3">

                                        {/* <hr/> */}
                                        <div className="card-header">POPULAR NEWS</div>
                                    </div>
                                    <div className="div2">
                                        <img src={f6}
                                            alt=""/>

                                        <p className="test">COVID-19 pandemic
                                            <br/>
                                            a stay-at-home order issued by the Governor. {/* <br />
                         ENTERTAINMENT */}
                                            <h6 className="c">ENTERTAINMENT  &nbsp;&nbsp;
                                                <FaIcons.FaCommentAlt/>
                                                6
                                            </h6>
                                        </p>

                                    </div>


                                    <br/>
                                    <div className="div2">
                                        <img src={f16}
                                            alt=""/>
                                        <p className="">Aliquip exea comod rurulabore<br/>
                                            nsekuat duis doloree {/* <br/>   WORLD */}
                                            <h6 className="d">WORLD  &nbsp;&nbsp;
                                                <FaIcons.FaCommentAlt/>
                                                45
                                            </h6>
                                        </p>


                                    </div>
                                    <br/>
                                    <div className="div2">
                                        <img src={f17}
                                            alt=""/>
                                        <p>Volupta tem acusa ntium ulaboredolore
                                            <br/>
                                            dolore me laud
                                            <br/>
                                            <h6 className="e">SPORTS  &nbsp;&nbsp;
                                                <FaIcons.FaCommentAlt/>
                                                48
                                            </h6>
                                        </p>
                                        {/* <p className="c">SPORTS</p> */} </div>
                                    <br/>
                                    <div className="div2">
                                        <img src={f16}
                                            alt=""/>
                                        <p>Aliquip exea comod rure
                                            <br/>nsekuat duisulabore dolore
                                            <br/>
                                            <h6 className="f">HEALTH  &nbsp;&nbsp;
                                                <FaIcons.FaCommentAlt/>
                                                12
                                            </h6>
                                        </p>
                                        {/* <p className="c">HEALTH</p> */} </div>
                                    <br/> {/* <div className="div2">
                        <img src={f14} alt="" />
                        <p>Perspiciatis unde omnist<br/> enatus error situlabore dolore
                        <br/>  <h6 className="g" >TECHNOLOGY</h6> 
                        </p>
                      
                      
</div> */}
                             

                                </div>

                            </div>
                            <hr/>

                        </div>


                        <b>
                            <div className="new6"></div>
                        </b>
                        <p className="tags">
                            <b>TAGS: </b>
                             News,  {News.tags}
                              </p>
                        <br></br>
                        <div className="center">
                        <h3><u>Express Your Feeling On This News</u></h3>
                                    <div className="col-12  py-4 mb-4 d-flex justify-content-between">
                                                <span >
                                                    <span className="text-success mr-1"><FontAwesomeIcon style={{ fontSize: "25px" }} icon={faSmile} onSubmit={this.state.handleReact} /> {newsReacts.happy} </span>
                                                    <span className="text-warning mr-1"><FontAwesomeIcon style={{ fontSize: "25px" }} icon={faSadTear}  onClick={this.state.handleReact}/> {newsReacts.sad} </span>
                                                    <span className="text-info mr-1"><FontAwesomeIcon style={{ fontSize: "25px" }} icon={faSurprise} onClick={this.state.handleReact} /> {newsReacts.surprised} </span>
                                                    <span className="text-success mr-1"><FontAwesomeIcon style={{ fontSize: "25px" }} icon={faLaugh}  onClick={this.state.handleReact}/> {newsReacts.hysteric} </span>
                                                    <span className="text-danger mr-1"><FontAwesomeIcon style={{ fontSize: "25px" }} icon={faAngry}  onClick={this.state.handleReact}/> {newsReacts.angry} </span>
                                                </span>
                                               
                                            

        </div></div>
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
                        <div class="card bg-light mb-3 author">
                            <div class="card-body">
                                {/* <img className="card-img imgcard"
                                    src={sersoti}
                                    alt="Card "/> */}
                                     <img className="card-img imgcard rounded-circle" src={News.author && News.author.image ? `data:${News.author.image.mimetype};base64,${News.author.image.buffer}` : User}       alt=""/>
                                <b className="font-italic fo card-text text-muted name"><span className="font-italic text-dark">AUTHOR</span> {
                                    News.author.fullName
                                }</b>
                                <div></div>
                                <br></br>
                                <br></br>
                                <div className="fo font-italic">{
                                    News.author.about
                                }
                                    <div className="card-body">
                                        <div className="socialm">
                                            <Link to={
                                                News.author.facebook
                                            }>
                                                <FaFacebook/></Link>
                                        </div>
                                        <div className="socialm">
                                            <Link to={
                                                News.author.instagram
                                            }><FaInstagram/></Link>
                                        </div>
                                        <div className="socialm">
                                            <Link to={
                                                News.author.twitter
                                            }><FaTwitter/></Link>
                                        </div>
                                        <div className="socialm">
                                            <Link to={
                                                News.author.facebook
                                            }><FaYoutube/></Link>
                                        </div>
                                        <div className="socialm">
                                            <Link to={
                                                News.author.facebook
                                            }><FaPinterest/></Link>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    

{/* <b><div className="new5"></div></b> */}
<br></br>
        <p className="commentname">LEAVE A COMMENT</p>
        <br></br>
        <b><div className="new5"></div></b>
        <br></br>
        <div className="container">
          <div className="">

            <div >

              <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="row register-form">

                  <div className="col-md-8 " >
                    <div className="form-group disabled" >
                    <Input type="textarea" name="comment"  rows="3"id="fullname" value={this.state.comment} className="disabled" placeholder="Enter Comment" onChange={(e) => this.handleChange(e)}  className="form-control reply"/>
                    </div>
                    <Button dark onClick={this.handleSubmit}   color="info">Add Comment </Button>
                    {/* <input type="SUBMIT" class="btn-dark submit-reply" value="SUBMIT" /> */}
                  </div>

                </div>
                <br></br>
              </div>
            </div>
          </div>
        </div>
        <p className="commentname">COMMENTS : <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faComments} /> {News.comments.length} </p>
                    <b><div className="new5"></div></b>

                    <br></br>
                    <Comment toggleCommentApproveState={this.toggleCommentApproveState} newsID={News._id} comments={News.comments} />

                    <br></br>


                    <Footer />


                </div>
            </div>
        )
    }
}
