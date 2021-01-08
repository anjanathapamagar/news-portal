
import React ,{Component} from 'react'
import {Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {Link, Redirect} from 'react-router-dom'
import news from '../images/news1.gif';
import newimg from '../images/image.jpg';
class Login extends Component {
    render() {
        return (
            // <div id="loginpg">
            <div>
<div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src={news} alt=""/>
                        <h3>Welcome</h3>
                        <p>This is News Portal</p>
                        {/* <input type="submit" name="" value="Login"/><br/> */}
                    </div>
                    <div class="col-md-9 register-right">
                       
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Login Form</h3>
                                <div class="row register-form">
                                    <div class="col-md-10">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Email" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" value="" />
                                        </div>
                                    
                                        <input type="submit" class="btnRegister"  value="Login"/>
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


export default Login