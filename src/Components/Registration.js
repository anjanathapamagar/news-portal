import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

export default class Registration extends Component {

    render() {
        return (

            <div className=" container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="newsp.png" alt="" />
                        <h3>Welcome</h3>s
                        <p>You are 30 seconds away from accessing news</p>
                        <input type="submit" name="" value="Register Now" /><br />
                    </div>
                    <div className="col-md-9 register-right">

                        <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <h3 className="register-heading">Sign Up </h3>
                            <div className="row register-form">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Full Name " />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" maxlength="10" minlength="10" className="form-control" placeholder="Contact no" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email " />
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="password" class="form-control" placeholder="Password" />
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="password" class="form-control" placeholder="Confirm Password" />
                                    </div>

                                    <input type="submit" class="btnRegister" value="Register" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
