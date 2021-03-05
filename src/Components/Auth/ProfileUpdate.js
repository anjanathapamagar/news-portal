import React ,{Component, useState} from 'react'
import {Modal} from 'react-bootstrap'
import { Redirect} from 'react-router-dom'
import news from '../../images/news1.gif';
import Loading from '../Layout/Loading.js';
import {  FaUserCircle } from 'react-icons/fa';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faPhone, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Validator from 'validator';
// import Loading from './Layout/Loading'
import { simplifiedError } from '../utils/simplifiedError';
import Dialog from '../Layout/Dialog';
import {ToastContainer, toast} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.min.css';


export default class Login extends Component {
    // static contextType = UserContext;
    constructor(props){
        super(props);
       
        this.state ={
            // addModalShow:false,
            fullName: '',
            phone: '',
            // address: '',
            password: '',
            confirm_password: '',
            errors: {},
            dialog: null,
            isLoggedIn: false,
            isRegisterComplete:false,
            isRequestComplete: true
        }
        
    }

    setUpErrorDialog = () => {
      const { errors } = this.state;
      const keysToBeIgnored = ["fullName", "phone", "password", "confirm_password"];
      const errorMessage = simplifiedError(errors, keysToBeIgnored);
      if (errorMessage.errorString) {
          const errorDialog = <Dialog type="danger" headerText="SOMETHING WENT WRONG" bodyText={errorMessage.errorString} positiveButton={{ text: "OK" }} clearDialog={() => this.setState({ dialog: null })} icon={<FontAwesomeIcon icon={faExclamationTriangle} />} />;
          this.setState({ dialog: errorDialog, errors: errorMessage.errorObject });
      }
  };

  onPhoneBlur = e => {
      const phone = e.target.value;
      if (Validator.trim(phone).length === 0) {
          this.setState({ errors: { phone: "Phone number is required" } });
      } else if (Validator.trim(phone).length !== 10) {
          this.setState({ errors: { phone: "Phone number must be 10 characters long" } });
      } else if (!Validator.isNumeric(phone)) {
          this.setState({ errors: { phone: "Phone number must be numeric value" } });
      } else {
          this.setState({ isRequestComplete: false });
          Axios({
              method: "post",
              url: `https://news-portal-api-server.herokuapp.com/users/validate-unique-user`,
              data: { phone }
          }).then(result => {
              this.setState({ isRequestComplete: true });
              if (!result.data.isUnique) {
                  this.setState({ errors: { phone: "Phone number is already taken" } });
              } else {
                  const { errors } = this.state;
                  if (errors.phone) {
                      delete errors.phone;
                  }
                  this.setState({ errors });
              }
              
          }).catch(error => {
              let { errors } = this.state;
              if (error.response && error.response.data.message) {
                  if (typeof error.response.data.message === Object && Object.keys(error.response.data.message).length > 0) {
                      errors = error.response.data.message;
                  } else {
                      errors.error = error.response.data.message;
                  }
              } else {
                  errors.error = "Unable to verify the phone number";
              }
              this.setState({ errors, isRequestComplete: true }, () => this.setUpErrorDialog());
          });
      }
  };

  onChange = e => {
      let name = e.target.name;
      let value = e.target.value;
      this.setState({ [name]: value });
  };

  onInputFieldFocus = (e) => {
      let { errors } = this.state;
      delete errors[e.target.name];
      this.setState({ errors });
  };

  onfullNameBlur = e => {
      const fullName = Validator.trim(e.target.value);
      if (fullName.length === 0) {
          let { errors } = this.state;
          errors.fullName = "Full name is required";
          this.setState({ errors });
      } else if (fullName.length > 0 && Validator.isNumeric(fullName)) {
          let { errors } = this.state;
          errors.fullName = "Full name cannot be numeric characters";
          this.setState({ errors });
      } else if (fullName.length > 0) {
          let containsNumeric = false;
          for (let i = 0; i <= 10; i++) {
              if (fullName.indexOf(i) > -1) {
                  containsNumeric = true;
                  break;
              }
          }
          if (containsNumeric) {
              let { errors } = this.state;
              errors.fullName = "Full name cannot contain numeric characters";
              this.setState({ errors });
          }
      }
  };

  onPasswordBlur = () => {
      let { errors, password, confirm_password } = this.state;

      if (!password) {
          errors.password = "Password is required";
      } else if (password.length < 6) {
          errors.password = "Password must be 6 characters long";
      } else if (confirm_password.length >= 6) {
          if (confirm_password !== password) {
              errors.confirm_password = "Password doesn't match";
          } else {
              delete errors.confirm_password;
          }
      }
      this.setState({ errors });
  };

  onConfirmPasswordBlur = () => {
      let { errors, password, confirm_password } = this.state;
      if (!confirm_password) {
          errors.confirm_password = "Confirm password is required";
      } else if (confirm_password.length < 6) {
          errors.confirm_password = "Password must be 6 characters long";
      } else if (confirm_password.length > 6) {
          if (confirm_password !== password) {
              errors.confirm_password = "Confirm password doesn't match";
          } else {
              delete errors.password;
          }
      }
      this.setState({ errors });

  };

  onFormSubmit = e => {
      e.preventDefault();
      const data = {
          fullName: this.state.fullName,
          phone: this.state.phone,
          address: this.state.address,
          password: this.state.password,
         // author: "USER",
           role: "USER",
          confirm_password: this.state.confirm_password
      };

      if (this.validate(data)) {
          this.setState({ isRequestComplete: false });
          Axios({
              method: 'post',
              url: `https://news-portal-api-server.herokuapp.com/users/register`,
              data: data
          }).then(result => {
              this.setState({ isRequestComplete: true , isRegisterComplete:true});
              const {  token } = result.data;
              if (token) {
                  localStorage.setItem("token", token);
                   
                  // this.setState({isRequestComplete:true})
                      
                  //  this.context.setUser(user);
              }
              toast.success("Registration successful!!")
          }).catch(error => {
              let { errors } = this.state;
              if (error.response && error.response.data.message) {
                  if (typeof error.response.data.message === Object && Object.keys(error.response.data.message).length > 0) {
                      errors = error.response.data.message;
                  } else {
                      errors.error = error.response.data.message;
                  }
              } else { 
                  errors.error = "Unable to get you registered";
              }
              this.setState({ errors, isRequestComplete: true } ,() => this.setUpErrorDialog());
          });

      }
  };

  validate = inputs => {
      const errors = {};

      if (!inputs.fullName) {
          errors.fullName = "Full name is required";
      }
      else {
          if (Validator.isNumeric(inputs.fullName))
              errors.fullName = "Full name cannot be numeric characters";
      }

      if (!inputs.phone)
          errors.phone = "Phone is required";
          else{
          if (inputs.phone.length > 10)
              errors.phone = "Phone number invalid";
          }

      if (!inputs.password)
          errors.password = "Password is required";
      else
          if (inputs.password.length < 6)
              errors.password = "Password must be 6 characters long";

      if (!inputs.confirm_password)
          errors.confirm_password = "Confirm password is required";
      else {
          if (inputs.confirm_password.length < 6)
              errors.password = "Password must be 6 characters long";
          else if (inputs.confirm_password !== inputs.password)
              errors.confirm_password = "Confirm password doesen't match";
      }
      this.setState({ errors });
      return Object.keys(errors).length === 0;
  };


    render() {
        const { errors, fullName,phone, password,confirm_password, dialog, isRequestComplete, isRegisterComplete } = this.state;
        // console.log(errors);
        const { user } = this.context;

        if (isRegisterComplete==true ) return <Redirect to="/" />;
        // let addModalClose =()=> this.setState({addModalShow:false});
        
        return (
              <>
                        {
                dialog
                
            }
            {
                !isRequestComplete && <Loading />
            }
            
                {/* <FaUserCircle  id="closeicon" size='1.5rem' className="usericon" color="white" onClick={() =>this.setState({addModalShow:true})}></FaUserCircle> */}
                <Modal
                {...this.props}
                 size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
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
                        <h3 class="register-heading">Update Profile</h3>
                        <div class="row register-form">
                            <div class="col-md-10">
                            <form onSubmit={this.onFormSubmit} method="post">
                                    <div className="form-group">
                                        <label htmlFor="fullName" className="text-info">FULL NAME</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text  rounded-0" id="inputGroupPrepend"> <FontAwesomeIcon icon={faUser} /> </span>
                                            </div>
                                            <input type="text" name="fullName" value={fullName} onFocus={this.onInputFieldFocus} onBlur={this.onfullNameBlur} onChange={this.onChange} placeholder="YOUR FULL NAME" className={"form-control rounded-0 " + (errors.fullName ? "is-invalid" : "")} autoComplete="off" />
                                            <div className="invalid-feedback">
                                                <span>{errors.fullName}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone" className="text-info">Phone</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text  rounded-0" id="inputGroupPrepend"> <FontAwesomeIcon icon={faPhone} /> </span>
                                            </div>
                                            <input type="number" name="phone" onFocus={this.onInputFieldFocus} onBlur={this.onPhoneBlur} value={phone} onChange={this.onChange} placeholder="YOUR PHONE NUMBER" className={"form-control rounded-0 " + ((errors.phone) ? "is-invalid" : "")} autoComplete="off" />
                                            <div className="invalid-feedback">
                                                <span>{errors.phone}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="passeord" className="text-info">PASSWORD</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text  rounded-0" id="inputGroupPrepend"> <FontAwesomeIcon icon={faLock} /> </span>
                                            </div>
                                            <input type="password" name="password" onFocus={this.onInputFieldFocus} value={password} onBlur={this.onPasswordBlur} onChange={this.onChange} placeholder="YOUR PASSWORD" className={"form-control rounded-0 " + (errors.password ? "is-invalid" : "")} autoComplete="off" />
                                            <div className="invalid-feedback">
                                                <span>{errors.password}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="confirm_password" className="text-info">CONFIEM PASSWORD</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text  rounded-0" id="inputGroupPrepend"> <FontAwesomeIcon icon={faLock} /> </span>
                                            </div>
                                            <input type="password" name="confirm_password" onFocus={this.onInputFieldFocus} onBlur={this.onConfirmPasswordBlur} value={confirm_password} onChange={this.onChange} placeholder="CONFIRM PASSWORD" className={"form-control rounded-0 " + (errors.confirm_password ? "is-invalid" : "")} autoComplete="off" />
                                            <div className="invalid-feedback">
                                                <span>{errors.confirm_password}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer text-center form-group rounded-0">
                                        <button type="submit" className="btn btn-success rounded-0" >REGISTER</button>
                                    </div>
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
