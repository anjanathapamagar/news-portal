import { Link } from 'react-router-dom';
import ImageSlider from "../Components/ForImage.js"
import React, { Component } from 'react'
import Axios from "axios";

export default class Editors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: {},
            previousMonthData: {},
            isRequestComplete: false,
            errors: {},
            News:[],
            dialog: null,
        
        };

    }


    getNews = () =>{
        Axios.get(`https://news-portal-api-server.herokuapp.com/news/popular/previous_month/false/100`)
        .then((res) => {
          console.log(res.data); 
          this.setState({ News: res.data });
  
        }).catch((err) => console.log(err.response));
    }
    componentDidMount=()=>{
        this.getNews();
    }
    render() {
        const {News} = this.state
        console.log(News);
        return (
            <>
            <div className="container" id="skcontainer">
     <div className="row">
         <div className="col">
     <div className="my-5 feature">
     
         
     <div className="centered">
        <div className="text-block0">
        <h6 className="lastmonth">LAST MONTH</h6>
       
         </div>
        
         </div>
         
         <div className="feature__wrapper">
             <div className="row">
                     <div className="feature__item d-flex mt-5">
              
                         <hr/>

                         {

this.state.News.slice(0,4).map((News) => {
    console.log(News)
  return <p  > 
                         <div className="forop"> 
                          {/* <img src={f4} alt="" /> */}
                          {
                    News.images && News.images.length > 0 &&
                    (
                      <ImageSlider  images={News.images} />
                    )
                  } </div>
                  
                          <h6 className="bottom-left lastmtitle font-weight-bold"  key={News.id}><Link to={{
                                            pathname: `/newspage/${News._id}`,
                                            News
                                        }} className="ttitle" style={{ textDecoration: 'none' }}>{News.title.substring(0,30) + '...'} </Link></h6>
                          <h6 className="bottom-left fo font-weight-bold "><b className="authname">By: {News.author.fullName}</b></h6>
                          
                         
                         </p>
})
    }
                     </div>
                 </div>
             </div>
         </div>
     </div>
     </div>
     </div>
     </>
        )
    }
}
