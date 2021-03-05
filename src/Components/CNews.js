import Axios from 'axios';

import React, { Component, useState , useStyles, useEffect} from 'react'
import "./Box.css"
// import {Card} from "react-bootstrap";
import {simplifiedError} from "../Components/utils/simplifiedError.js"
import Dialog from "../Components/Layout/Dialog.js"
import { BaseURL } from './utils/Constant.js';
import Validator from 'validator';
import {  FaFontAwesome, FaUserCircle } from 'react-icons/fa';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Image, Container, Dimmer, Loader, Pagination } from 'semantic-ui-react';
import ImageSlider from '../Components/Imageslider.js'

// export default class CNews extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             category: "",
//             search: "",
//             sortOption: "",
//             page: 1,
//             limit: 20,
//             categories: [],
//             news: [],
//             searchSuggestions: [],
//             errors: {},
//             dialog: null,
//             isRequestComplete: false
//         };
//     }

//     setUpErrorDialog = () => {
//         const { errors } = this.state;
//         const keysToBeIgnored = [];
//         const errorMessage = simplifiedError(errors, keysToBeIgnored);
//         if (errorMessage.errorString) {
//             const errorDialog = <Dialog type="danger" headerText="SOMETHING WENT WRONG" bodyText={errorMessage.errorString} positiveButton={{ text: "OK" }} clearDialog={() => this.setState({ dialog: null })} icon={<FontAwesomeIcon icon={faExclamationTriangle} />} />;
//             this.setState({ dialog: errorDialog, errors: errorMessage.errorObject });
//         }
//     };

//     onChangeHandler = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         if (name === "limit" && value <= 0) return;
//         this.setState({ [name]: value }, () => {
//             if (name === "search" && Validator.trim(value).length > 5) this.setState({ isRequestComplete: false }, () => this.getSearchSuggestions());
//             if (name === "category" || name === "sortOption") this.setState({ isRequestComplete: false }, () => this.getNews());
//         });
//     };

//     onNextPageBtnClicked = () => {
//         const { page } = this.state;
//         this.setState({ page: page + 1, isRequestComplete: false }, () => {
//             this.getNews();
//         });
//     };

//     onPreviousPageBtnClicked = () => {
//         const { page } = this.state;
//         if (page > 1) {
//             this.setState({ page: page - 1, isRequestComplete: false }, () => {
//                 this.getNews();
//             });
//         }
//     };
//     getNews = () => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             const { page, limit } = this.state;
//             let { category, search, sortOption } = this.state;
//             category = category ? category : "null";
//             search = search ? search : "null";
//             sortOption = sortOption ? sortOption : "null";
//             Axios({
//                 method: 'get',
//                 url: `${BaseURL}news/my/1/1/5ffd73046d56b4001758d88e/1/.`,
//                 headers: {
//                     authorization: token
//                 }
//             }).then(result => {
//                 const news = result.data;
//                 this.setState({ news, isRequestComplete: true });
//             }).catch(error => {
//                 let { errors } = this.state;
//                 if (error.response && error.response.data.message) {
//                     if (typeof error.response.data.message === "object" && Object.keys(error.response.data.message).length > 0) {
//                         errors = error.response.data.message;
//                     } else {
//                         errors.error = error.response.data.message;
//                     }
//                 } else {
//                     errors.error = "Unable to fetch news";
//                 }
//                 this.setState({ errors, isRequestComplete: true }, () => this.setUpErrorDialog());
//             });
//         }
//     };

//     getCategories = () => {
//         Axios({
//             method: 'get',
//             url: `${BaseURL}categories`
//         }).then(result => {
//             this.setState({ categories: result.data, isRequestComplete: true });
//         }).catch(error => {
//             let { errors } = this.state;
//             if (error.response && error.response.data.message) {
//                 if (typeof error.response.data.message === "object" && Object.keys(error.response.data.message).length > 0) {
//                     errors = error.response.data.message;
//                 } else {
//                     errors.error = error.response.data.message;
//                 }
//             } else {
//                 errors.error = "Unable to fetch news categories";
//             }
//             this.setState({ errors, isRequestComplete: true }, () => this.setUpErrorDialog());
//         });
//     };

//     componentDidMount = () => {
//         this.getNews();
//         this.getCategories();
//     };


//     render() {
//         const { news, categories, description, category, search, sortOption, page, limit, searchSuggestions, dialog, isRequestComplete } = this.state;
//         return ( 
//             // news.map((news)=> 
//     //     <Card style={{ width: "18rem" }} key={news._id} className="box">
//     //     <Card.Img variant="top" src="holder.js/100px180" src={news.news.image} />
//     //     <Card.Body>
//     //       <Card.Title>{news.news.title}</Card.Title>
//     //       <Card.Text>{news.news.description}</Card.Text>
//     //     </Card.Body>
//     //   </Card>)
//     <Container style={{padding:'20px'}}>
// 						<Card.Group>
// 			        {news.news.map((news,index)=> (
// 				        	<Card href={news.BaseURL} key={index} color="red" centered raised>
				        		
// 				        		{
//                                     news.images && news.images.length > 0 &&
//                                     (
//                                         <ImageSlider images={news.images} />
//                                     )
//                                 }
// 				        		<Card.Content>
// 				        			<Card.Header>{news.title}</Card.Header>
// 				        			{/* <Card.Meta textAlign="right">{news.author}</Card.Meta> */}
// 				        			<Card.Description>{news.description}</Card.Description>
// 				        		</Card.Content>
// 				        		{/* <Card.Content textAlign="right" extra>
// 				        			{elem.source.name}
// 				        			<br/>
// 				        			{elem.publishedAt}
// 				        		</Card.Content> */}
// 				        	</Card>
// 			        ))}
// 		        </Card.Group>
// 		      </Container>
           
//         )
//     }
// }


export default function CNews() {
    const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
   const fetchData = async () => {
    const result = await Axios("https://news-portal-api-server.herokuapp.com/news/1/1/600ab38ed9bc7f0015af1df3/1/1");
    setData(result.data);
  };
  fetchData();
  }, []);

 const handleClick = (value) => () => {
   console.log(value);
 };
    return (
        <div>
            
        </div>
    )
}

