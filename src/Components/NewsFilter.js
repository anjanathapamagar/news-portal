import React, { Component } from 'react'
import f6 from "../images/7.jpg";
import f1 from "../images/6.jpg";
import ReactHtmlParser from 'react-html-parser';
import Axios from "axios";
import * as FaIcons from 'react-icons/fa';
import ImageSlider from "./ForNewsmaker.js"
import { Link } from '@material-ui/core';
import Loading from "../Components/Layout/Loading.js"


export default class NewsFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: {},
            previousMonthData: {},
            isRequestComplete: false,
            errors: {},
            news: [],
            newa: [],
            newaa:[],
            dialog: null,
            hidepre:false,
            hielate:false,
            hidemon:false,
            hidehig:false,
            showPrevious: false,
            showHot: false,
            showLatest: false,
            showHighest: false

        };

    }
  
    
    getCategories = () => {

        Axios.get(`https://news-portal-api-server.herokuapp.com/news/popular/PREVIOUS_MONTH/false/10`)
          .then((res) => {
            console.log(res.data);
            this.setState({ newaa: res.data });
    
          }).catch((err) => console.log(err.response));
      }
      componentDidMount() {
        this.getCategories();
    
      }
    handleLatest = (e) => {
        Axios.get(`https://news-portal-api-server.herokuapp.com/news/popular/PREVIOUS_MONTH/false/100`)
            .then((res) => {
                console.log(res.data);
                this.setState({ newsl: res.data,showLatest: true, showHighest: false, showPrevious: false, showHot: false });
            }).catch((err) => console.log(err.response));
    } 

    handlePrevious = (e) => {
        Axios.get(`https://news-portal-api-server.herokuapp.com/news/popular/previous_month/false/100`)
            .then((res) => {
                console.log(res.data);
                this.setState({ News: res.data, showLatest: false, showHighest: false, showPrevious: true, showHot: false});
            }).catch((err) => console.log(err.response));
    }

    handleHot = (e) => {
        Axios.get(`https://news-portal-api-server.herokuapp.com/news/popular/THIS_MONTH/false/10`)
            .then((res) => {
                console.log(res.data);
                this.setState({ newaa: res.data , showLatest: false, showHighest: false, showPrevious: false, showHot: true});
            }).catch((err) => console.log(err.response));
    }

    handleHighest = (e) => {
        Axios.get(`https://news-portal-api-server.herokuapp.com/news/popular/THIS_MONTH/false/10`)
            .then((res) => {
                console.log(res.data);
                this.setState({ NewsH: res.data, showLatest: false, showHighest: true, showPrevious: false, showHot: false });
            }).catch((err) => console.log(err.response));
    }

    render() {
        const {newaa, newa, showPrevious, showHighest, showHot, showLatest}= this.state
        return (
            <div>
                <div className="container bgwhite">
                    <div className="row bgwhite">
                        <div className="col bgwhite">

                            <div className="left">
                                <h3 className="">Explore the Top
    </h3>
                                <h3 className=""><b>NEWS MAKERS</b></h3>
                                <br />
                            </div>
                            <div className="row">

                                <h6 className="btnfilter">Filter Content by</h6>
                                <div className="btn-group">
                                
                                    <button className="active" onClick={this.handleLatest}>LATEST</button>
                               
                                    <button className="" onClick={this.handlePrevious}>PREVIOUS WEEK</button>
                                    <button className="" onClick={this.handleHot}>HOT ARTICLES</button>
                                    <button className="" onClick={this.handleHighest}>HIGHEST RATED</button>

                                </div>
                            </div>

                            <div className="feature__wrapper">

                                <div className="feature__item d-flex mt-4">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col -md-3 ">
                                                <div className="m">
                                                    <div className="">
                                                        <img src={f1} alt="" />
                                                        


                                                        <h4 className="text-block6">LIFESTYLE</h4>
                                                        {/* <Button className="text1 ">TRAVEL</Button> */}
                                                        <h4 className=""><strong>James Bond movie ‘No Time to Die’ delayed again amid pandemic</strong></h4><br />
                                                        <p>BY Saraswoti Luitel  21st January
                                                             2021
                     &nbsp;&nbsp;
{/*                        
                     <MDBIcon far icon="comment-alt" />   <i class="far fa-comment-alt"></i>*/}
                    </p>
                                                        <h6> The movie’s new debut date is Oct. 8, according to an announcement on the James Bond website and Twitter feed.

“No Time to Die,” from MGM and Comcast Corp’s Universal Pictures, had originally been set to hit the big screen in April 2020 before moving to November 2020 and then April 2021.

The film, which cost an estimated $200 million to produce, marks actor Daniel Craig’s last outing as agent 007.

Cinema owners were hoping “No Time to Die” would kick off a rebound in moviegoing. The pandemic devastated the film business in 2020, and ticket sales in the United States and Canada sunk 80%. That hurt independent theaters and big.....
         <br />
                                                            <br />
                                                            <br />
CONTINUE READING</h6>

                                                    </div> 


                                                </div>

                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col">
                                                    <div className=""  >
                                                       
                                                        <div className=" latest">

                                                        
                                                        {/* { showLatest 
                                                       
                                                       ? */}
                                                            {/* <> */}
                                                           
                                                            </div>
                                                        
                                                { showPrevious ?
                                                        <>
                                                        {

                                            this.state.News.slice(0,8).map((News) => {
                                            console.log(News);
                                                return <p  >
                                                    
                                                    <div className="div1">
                                                        {/* <img src={f6} alt="" /> */}
                                                        {
                                            News.images && News.images.length > 0 &&
                                            (
                                            <ImageSlider  images={News.images} />
                                            )
                                            }

                                            <p className="test" key={News.id}><Link className="test" to={{
                                            pathname: `/newspage/${News._id}`,
                                            News
                                            }}> {ReactHtmlParser(News.title.substring(0, 25) + '...')} </Link><br />


                                                            {/* <br />
                                            ENTERTAINMENT */}
                                                            <h6 className="c" >{News.category.category}   &nbsp;&nbsp;
                                            <FaIcons.FaCommentAlt /> 0</h6></p>

                                                    </div>

                                                </p>
                                            })
                                            }

                                            </> : null
}
{ showLatest ?
<>
                                                        {

this.state.newsl.slice(0,8).map((NewsL) => {
       return <p>
           <div className="div1">
               {/* <img src={f6} alt="" /> */}
               {
                    NewsL.images && NewsL.images.length > 0 &&
                     (
                         <ImageSlider  images={NewsL.images} />
                         )
                     }

               <p className="test" key={NewsL.id}> <Link className="test" to={{
                                            pathname: `/newspage/${NewsL._id}`,
                                            NewsL
                                        }}> {ReactHtmlParser(NewsL.title.substring(0, 25) + '...')}</Link><br />

                   {/* <br />
ENTERTAINMENT */}
                   <h6 className="c" >{NewsL.category.category}   &nbsp;&nbsp;
<FaIcons.FaCommentAlt /> 0</h6></p>

           </div>

       </p>
   })
}</> : null
} 

{ showHot ?
<>
                                                        {

this.state.newaa.slice(0,8).map((News) => {
       return <p>
           <div className="div1">
               {/* <img src={f6} alt="" /> */}
               {
                    News.images && News.images.length > 0 &&
                     (
                         <ImageSlider  images={News.images} />
                         )
                     }

               <p className="test" key={News.id}> <Link className="test" to={{
                                            pathname: `/newspage/${News._id}`,
                                            News
                                        }}> {ReactHtmlParser(News.title.substring(0, 25) + '...')}</Link><br />

                   {/* <br />
ENTERTAINMENT */}
                   <h6 className="c" >{News.category.category}   &nbsp;&nbsp;
<FaIcons.FaCommentAlt /> 0</h6></p>

           </div>

       </p>
   })
}</> : null
} 


{ showHighest?
<>
                                                        {

this.state.NewsH.slice(0,8).map((NewsH) => {
       return <p>
           <div className="div1">
               {/* <img src={f6} alt="" /> */}
               {
                    NewsH.images && NewsH.images.length > 0 &&
                     (
                         <ImageSlider  images={NewsH.images} />
                         )
                     }

               <p className="test" key={NewsH.id}> <Link className="test" to={{
                                            pathname: `/newspage/${NewsH._id}`,
                                            NewsH
                                        }}> {ReactHtmlParser(NewsH.title.substring(0, 25) + '...')}</Link><br />

                   {/* <br />
ENTERTAINMENT */}
                   <h6 className="c" >{NewsH.category.category}   &nbsp;&nbsp;
<FaIcons.FaCommentAlt /> 0</h6></p>

           </div>

       </p>
   })
}</> : null
} 

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



            </div>
        )
    }
}
