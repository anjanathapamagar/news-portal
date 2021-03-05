import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';
import ImageSlider from "../Imageslider"
import { Link } from 'react-router-dom';
import Axios from 'axios'
import Loading from '../Layout/Loading';
import { UserContext } from '../context/UserContext.js';
import Footer from './Footer';
import Newsticker from './Newsticker';
import Layout from './Layout';

export default class CardNews extends Component {
    static contextType = UserContext;

    constructor(props) {
        super(props);
        this.state = {
            news: [],
            isRequestComplete: false
        }
    }
    getNews = () => {
        Axios.get(`https://news-portal-api-server.herokuapp.com/news/1/50/${this.props.match.params.categoryID}/1/i`)


            .then((res) => {
                console.log(res.data);
                this.setState({ news: res.data, isRequestComplete: true });

            }).catch((err) => console.log(err.response));
    }
    componentDidMount() {
        this.getNews();
    }
    render() {
        const { isRequestComplete } = this.state;

        if (!isRequestComplete) return <Loading />;

        return (
            <div>
                <Newsticker />
                <hr></hr>
                <Layout></Layout> <br/>
                 
                <div className="card-group container dark">
                    {
                        this.state.news.map((News) => {
                            return <p className="dark" >
                                <b className="card card-header ">{News.title}
                                <small className="text-muted">{News.tags}</small></b>

                                {/* <img className="card-img-top" src="polirics.jpg"  alt="Card image cap" ></img> */}
                                {
                                    News.images && News.images.length > 0 &&
                                    (
                                        <ImageSlider images={News.images} />
                                    )
                                }
                                <div className="card-body" key={News._id}>
                                    <b className="card-title" >
                                        {News.category.author}
                                        
                                    </b>
                                    <div className="card-text descriptions" > {ReactHtmlParser(News.description.substring(0, 750) + '...')}<p>
                                        <div className="text-muted contread" ><u>   
                                            <Link to={{
                                                pathname: `/newspage/${News._id}`,
                                                News
                                            }}>Continue Reading...</Link></u></div>
                                        <br></br>
                                    </p>
                                        <br></br>

                                    </div>
                                </div>

                            </p>
                        })
                    }

                </div>
                <br></br><br></br><br></br>
                <Footer />
            </div>

        )
    }
}
