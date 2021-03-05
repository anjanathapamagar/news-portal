import React, { Component } from 'react'
import Axios from 'axios'
import * as FaIcons from 'react-icons/fa';
import { Card, Container,Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Politics extends Component {

    constructor(props) {
        super(props);
        this.state ={
          
          categories:[],
          page: 1,
          category: "",
          search: '.',
          sortOption: "",
          limit: 1,
          users:[],
          news:[],
        }
          }
          getCategories =() =>{
            
            Axios.get('http://localhost:5000/categories')
            .then((res)=>{
                console.log(res.data);
                this.setState({categories:res.data});
      
            }).catch((err)=>console.log(err.response));
          }
          getnewspolitics =() => {
            // const { page, limit } = this.state;
            // let { category, search, sortOption } = this.state;
            // category = category ? category : "null";
            // search = search ? search : "null";
            // sortOption = sortOption ? sortOption : "null";
            Axios.get(`https://news-portal-api-server.herokuapp.com/news/1/1/600ab38ed9bc7f0015af1df3/1/1`)
            .then((res)=>{
                console.log(res.data);
                this.setState({news:res.data});
      
            }).catch((err)=>console.log(err.response));
          }
        componentDidMount(){
         this.getCategories();
         this.getnewspolitics();

      }
      
         
    render() {
        return (
            <div>
              	{/* <Container style={{padding:'20px'}}>
                {this.state.News.map((News)=> (
						<Card.Group>
			        
				        	<Card   color="red" centered raised>
				        		<Image
				        	src="polirics.jpg"/>
				        		<Card.Content>
				        			<Card.Header>{News.title}</Card.Header>
				        			<Card.Meta textAlign="right">{News.author}</Card.Meta>
				        			<Card.Description>{News.description}</Card.Description>
				        		</Card.Content>
				        		<Card.Content textAlign="right" extra>
				        			{News.source.name}
				        			<br/>
				        			{News.publishedAt}
				        		</Card.Content>
				        	</Card>
			        
		        </Card.Group>
            ))}
		      </Container> */}

<div className="card-group">

          <div className="card card1">
          {
   this.state.news.map((News)=>{
    return <p  > 
            <b className="card-title cardt1">HEALTH <small className="text-muted">{News.tags}</small></b>

            <img className="card-img-top" src="polirics.jpg"  alt="Card image cap" ></img>
            <div className="card-body">
              <b className="card-title bold" >{News.title} </b>
               <div className="card-text "><p>
                 <small className="text-muted">{News.description}</small></p></div>
            {/*  <p className="card-text">{News.title}</p>
              <p className="card-text continue"><small className="text-muted"><u>Continue Reading...</u></small></p> */}
              <Link to="/newspage" className="card-text continue">Continue reading</Link>
            </div>
            
</p>
})
    }
          </div>


    
          <div className="card card2">
            {/* <h5 class="card-title cardt2">FOOD</h5> */}
            <b className="card-title cardt2">FOOD <small className="text-muted">Asia,Europe ...</small></b>
            <img className="card-img-top" src="food.jpeg" alt="Card image cap" />
            <div className="card-body">
              <b className="card-title">Title two</b>
              <p className="card-text"><small className="text-muted">By Author Two</small></p>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text continue"><small class="text-muted"><u>Continue Reading...</u></small></p>
            </div>
          </div>
          <div className="card card3">
            {/* <h5 class="card-title cardt3">ENTERTAINMENT</h5> */}
            <b className="card-title cardt3">ENTERTAINMENT <small className="text-muted">Nepop, Kpop ...</small></b>
            <img className="card-img-top" src="images.jpg" alt="Card image cap" />
            <div className="card-body">
              <b className="card-title">Title three</b>
              <p className="card-text"><small className="text-muted">By Author one</small></p>

              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text continue"><small className="text-muted"><u>Continue Reading...</u></small></p>
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
              <li className="list-group-item"><FaIcons.FaCheckCircle /> Health</li>
              <br></br>
              <li className="list-group-item"> <FaIcons.FaCheckCircle /> Fashion & Lifestyle</li>
              <br>
              </br>
              <li className="list-group-item"> <FaIcons.FaCheckCircle /> World Products</li>
              <br></br>
              <li className="list-group-item"> <FaIcons.FaCheckCircle /> Music & Video</li>
              <br></br>
              <li className="list-group-item"> <FaIcons.FaCheckCircle /> Fun & Funny Moments</li>
              <br></br>
            </ul>
          </div>
        </div>
<br>
</br>
<br></br>
<br></br>


                  {
                      
            this.state.categories.map((category)=>{
              return <p  > 
      <li className="navitem">
        <a className="nav-link" href="#">{category.category}</a>
      </li>
      </p>
  })
    }
                {
            
            this.state.users.map((user)=>{
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
