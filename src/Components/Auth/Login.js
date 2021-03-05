import React ,{Component, useState} from 'react'
import {Form, FormGroup, Label, Input, Button ,Modal} from 'react-bootstrap'
import {Link, Redirect} from 'react-router-dom'
import news from '../../images/news1.gif';
import Loading from '../Layout/Loading.js';
import {  FaFontAwesome, FaUserCircle } from 'react-icons/fa';
import { simplifiedError } from '../utils/simplifiedError.js';
import Dialog from '../Layout/Dialog';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Validator from 'validator'
import Axios from 'axios';
import { BaseURL } from '../utils/Constant.js';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import { UserContext } from '../context/UserContext.js';
import validator from 'validator';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
toast.configure();
export default class Login extends Component {
    static contextType = UserContext;
    constructor(props){
        super(props);
       
        this.state ={
            // addModalShow:false,
            phone: "",
            password: "",
            errors: {},
            dialog: null,
            isRequestComplete: true,
            isLoginComplete: false
        }
        
    }

    setUpErrorDialog = () => {
        const { errors } = this.state;
        const keysToBeIgnored = ["phone", "password"];
        const errorMessage = simplifiedError(errors, keysToBeIgnored);
        if (errorMessage.errorString) {
            const errorDialog = <Dialog type="danger" headerText="LOGIN FAILED" bodyText={errorMessage.errorString} positiveButton={{ text: "OK" }} clearDialog={() => this.setState({ dialog: null })} icon={<FontAwesomeIcon icon={faExclamationTriangle} />} />;
            this.setState({ dialog: errorDialog, errors: errorMessage.errorObject });
        }
    };

    onChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    };

    onInputFieldFocus = e => {
        let { errors } = this.state;
        delete errors[e.target.name];
        this.setState({ errors });
    };

    onInputFieldBlur = e => {
        let { errors } = this.state;
        if (Validator.trim(e.target.value).length === 0)
            errors[e.target.name] = `${e.target.name.substr(0, 1).toUpperCase()}${e.target.name.substr(1, (e.target.name.length -1))} is required`;
        this.setState({ errors });
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState({ errors: {} });
        const data = {
            phone: this.state.phone,
            password: this.state.password
        };

        if (this.validate(data)) {
            this.setState({ isRequestComplete: false });
            Axios({
                method: "post",
                url: `https://news-portal-api-server.herokuapp.com/users/login`,
                data
            }).then(result => {
                this.setState({ isRequestComplete: true, isLoginComplete: true });
                const { user, token } = result.data;
                if (token) {
                    localStorage.setItem("token", token);
                    this.context.setUser(user);
                }
                toast.success("Login successfully!!")
            }).catch(error => {
                let { errors } = this.state;
                if (error.response && error.response.data.message) {
                    if (typeof error.response.data.message === Object && Object.keys(error.response.data.message).length > 0) {
                        errors = error.response.data.message;
                    } else {
                        errors.error = error.response.data.message;
                    }
                } else {
                    errors.error = "Invalid credentials provided";
                }
                // console.log(errors);
                this.setState({ errors, isRequestComplete: true }, () => this.setUpErrorDialog());
            });
        }
    };

    validate = (input) => {
        let errors = {};

        if (!input.phone)
        {errors.phone = "Phone is required";}
        else if(!Validator.isNumeric(validator.trim(input.phone))){
            errors.phone = "Phone number must be numeric"
        }else if(validator.trim(input.phone).length !== 10){
            errors.phone = "Phone number must not be less than 10 character"
        }


        if (!input.password)
            {errors.password = "Password is required";}
           else if(validator.trim(input.password).length < 6){
            errors.password = "Password must not be less than 6 character"
            }


        this.setState({ errors });
        return Object.keys(errors).length === 0;
    };

    render() {
        const { errors, phone, password, dialog, isRequestComplete, isLoginComplete } = this.state;
        // console.log(errors);
        const { user } = this.context;

        if (isLoginComplete==true) return <Redirect to="/" />;
        // let addModalClose =()=> this.setState({addModalShow:false});
        
        return (
              <>
                        {
                dialog
                
            }
            {
                !isRequestComplete && <Loading />
            }
            <ToastContainer 
            />
                {/* <FaUserCircle  id="closeicon" size='1.5rem' className="usericon" color="white" onClick={() =>this.setState({addModalShow:true})}></FaUserCircle> */}
                <Modal
                {...this.props}
                 size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                //  show={this.state.addModalShow} 
                // onHide={addModalClose}
                >
                     <Modal.Header closeButton className="closeb">
                        {/* <Modal.Title id="contained-modal-title-vcenter">
                            Login Form
                        </Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body className="modalbody">
                        {/* <LoginForm/> */}
                        <div class="container register">
        <div class="row">
            <div class="col-md-3 register-left">
                <img src={news} alt=""/>
                <h3>Welcome</h3>
                <p>This is News Portal</p>
                
            </div>
            <div class="col-md-9 register-right">
               
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 class="register-heading">Login Form</h3>
                        <div class="row register-form">
                            <div class="col-md-10">
                            <form onSubmit={this.onSubmit} method="post">
                            <div class="form-group">
                                    <input type="number" name="phone" value={phone} onChange={this.onChange} onFocus={this.onInputFieldFocus} onBlur={this.onInputFieldBlur} placeholder="YOUR PHONE NUMBER" className={"form-control rounded-0 " + (errors.phone ? "is-invalid" : "")} autoComplete="off"/>
                                    <div className="invalid-feedback">
                                    <span>{errors.phone}</span>
                                            </div>
                                </div>
                                <div class="form-group">
                                    <input type="password" name="password" value={password} onChange={this.onChange} onFocus={this.onInputFieldFocus} onBlur={this.onInputFieldBlur} placeholder="YOUR PASSWORD" className={"form-control rounded-0 " + (errors.password ? "is-invalid" : "")} autoComplete="off" />
                                    <div className="invalid-feedback">
                                                <span>{errors.password}</span>
                                            </div>
                                </div>
                            
                                <input type="submit" class="btnRegister"  name="login" value="Login"/>
                            </form>
                               
                                
                            </div>
                            
                        </div>
                        
                    </div>
                  
                </div>
            </div>
        </div>

    </div>
                        
                    </Modal.Body>
                    {/* <Modal.Footer>
        <Button variant="danger" onClick={this.onHide} >Close</Button>
      </Modal.Footer> */}
                </Modal>

             </>
           
            )
    }
}



