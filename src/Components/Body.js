import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import ReactHtmlParser from 'react-html-parser';
import ImageSlider from "../Components/Imageslider"

export default class Politics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: null,
      categories: [],
      page: 1,
      category: "",
      search: '.',
      sortOption: "",
      limit: 1,
      users: [],
      news: [],
      Technology: [],
      lifestyles: [],
    }
  }
  getCategories = () => {

    Axios.get('https://news-portal-api-server.herokuapp.com/categories')
      .then((res) => {
        console.log(res.data);
        this.setState({ categories: res.data });

      }).catch((err) => console.log(err.response));
  }
  getnewshealth = () => {

    Axios.get(`https://news-portal-api-server.herokuapp.com/news/1/1/600ab38ed9bc7f0015af1df3/1/1`)
      .then((res) => {
        console.log(res.data);
        this.setState({ news: res.data });

      }).catch((err) => console.log(err.response));
  }
  getnewstechnology = () => {

    Axios.get(`https://news-portal-api-server.herokuapp.com/news/1/1/600b0f090e48ef0015398ca2/new/1`)
      .then((res) => {
        console.log(res.data);
        this.setState({ Technology: res.data });

      }).catch((err) => console.log(err.response));
  }
  getnewslifestyle = () => {

    Axios.get(`https://news-portal-api-server.herokuapp.com/news/1/1/600b0f390e48ef0015398ca3/1/1`)
      .then((res) => {
        console.log(res.data);
        this.setState({ lifestyles: res.data });

      }).catch((err) => console.log(err.response));
  }
  componentDidMount() {
    this.getCategories();
    this.getnewshealth();
    this.getnewstechnology();
    this.getnewslifestyle();

  }

  render() {
    return (
      <div>

        <div className="card-group">

          <div className="card card1">
            {
              this.state.news.map((News) => {
                return <p  >
                  <b className="card-title cardt1">{News.category.category}<small className="text-muted">{News.tags}</small></b>

                  {/* <img className="card-img-top" src="polirics.jpg"  alt="Card image cap" ></img> */}
                  {
                    News.images && News.images.length > 0 &&
                    (
                      <ImageSlider images={News.images} />
                    )
                  }
                  <div className="card-body" key={News._id}>
                    <b className="card-title" >
                      {News.title}
                    </b>
                    <div className="card-text descriptions" > {ReactHtmlParser(News.description.substring(0, 400) + '...')}<p>
                      <small className="text-muted" ><u>
                        <Link to={{
                          pathname: `/newspage/${News._id}`,
                          News
                        }}>Continue Reading</Link></u></small>
                    </p>

                    </div>
                  </div>

                </p>
              })
            }
          </div>


          <div className="card card2">
            {
              this.state.lifestyles.map((lifestyle) => {
                return <p  >
                  <b className="card-title cardt1">{lifestyle.category.category}<small className="text-muted">{lifestyle.tags}</small></b>

                  {/* <img className="card-img-top" src="polirics.jpg"  alt="Card image cap" >{lifestyle.images}</img> */}
                  {
                    lifestyle.images && lifestyle.images.length > 0 &&
                    (
                      <ImageSlider className="card-img-top" images={lifestyle.images} />
                    )
                  }
                  <div className="card-body" key={lifestyle._id}>
                    <b className="card-title" >


                      {lifestyle.title}
                    </b>

                    <div className="card-text descriptions" >{ReactHtmlParser(lifestyle.description.substring(0, 400) + '...')} <p>
                      <small className="text-muted" ><u>
                        <Link to={{
                          pathname: `/newspage/${lifestyle._id}`,
                          lifestyle
                        }}>Continue Reading</Link></u></small>
                    </p>

                    </div>
                  </div>

                </p>
              })
            }
          </div>

          <div className="card card3">
            {
              this.state.Technology.map((technology) => {
                return <p  >
                  <b className="card-title cardt1">{technology.category.category}<small className="text-muted">{technology.tags}</small></b>

                  {
                    technology.images && technology.images.length > 0 &&
                    (
                      <ImageSlider images={technology.images} />
                    )
                  }
                  <div className="card-body" key={technology._id}>
                    <b className="card-title" >

                      {technology.title}
                    </b>

                    <div className="card-text descriptions" > {ReactHtmlParser(technology.description.substring(0, 400) + '...')}   <p>
                      <small className="text-muted" ><u>
                        <Link to={{
                          pathname: `/newspage/${technology._id}`,
                          technology
                        }}>Continue Reading</Link></u></small>
                    </p>
                    </div>
                  </div>

                </p>
              })
            }
          </div>

          <div className="card card1" >
            <div className="card-header">
              CATEGORIES
  </div>
            <ul className="list-group list-group-flush">
              <br></br>
              {

                this.state.categories.map((category) => {
                  return <p>

                    <li className="list-group-item" ><FaIcons.FaCheckCircle /> {category.category}</li>

                  </p>
                })
              }
              <br></br>

              <br></br>
            </ul>
          </div>
        </div>
        <br>
        </br>
        <br></br>
        <br></br>

        {

          this.state.users.map((user) => {
            return <p  >
              <li className="navitem">
                <a className="nav-link" href="#">{user.role}</a>
              </li>
            </p>
          })
        }


      </div>
    )
  }
}


























