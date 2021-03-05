import React, { Component } from 'react'
import Navbar from '../Navbar.js'
import '../../style.css';
import axios from 'axios'


export default class Newsticker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CoronaNews: [],
        }
    }
    componentDidMount() {
        axios.get(`https://nepalcorona.info/api/v1/data/nepal`, this.state)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    CoronaNews: res.data
                });

            }).catch((err) => console.log(err.response));
    }
    render() {
        const { CoronaNews } = this.state;
        return (
            <div>
                <div className="tickerwrapper">
                    <div className="bigHeading">  Top Headline .</div>
                    <div className="text-update">
                        {/* <p>  <li >Number of positive are<span className="covidp">{CoronaNews.tested_positive}</span> with<span className="covidn">{CoronaNews.tested_negative}</span> negative result.Total number of<span className="covidt">{CoronaNews.tested_total}</span> were tested. </li></p> */}
                        <p>  <li >Number of positive are<span className="covidp">53</span> with<span className="covidn">2015</span> negative result.Total number of<span className="covidt">2068</span> were tested. </li></p>

                    </div>
                </div>
                <br></br>
                <Navbar />
            </div>
        )
    }
}

