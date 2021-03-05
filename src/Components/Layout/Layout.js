import React from 'react'
import '../../style.css';
import { Link } from 'react-router-dom';
import Login from '../Auth/Login.js';
import Registration from '../Auth/Registration.js';
import DefaultImage from '../../images/user.png'
import Dialog from "../Layout/Dialog.js"
import { simplifiedError } from "../utils/simplifiedError.js"
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Axios from 'axios';
import Loading from './Loading';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false,
      errors: {},
      dialog: null,
      category: "",
      categories: [],
      isRequestComplete: true
    }

  }
  componentDidMount() {
    Axios.get('https://news-portal-api-server.herokuapp.com/categories')
      .then((res) => {
        console.log(res.data);
        this.setState({ categories: res.data });

      }).catch((err) => console.log(err.response));
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

  onLogoutClicked = () => {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({ isRequestComplete: false });
      Axios({
        method: "post",
        url: `https://news-portal-api-server.herokuapp.com/users/logout`,
        headers: {
          authorization: token
        }
      }).then(result => {
        this.setState({ isRequestComplete: true });
        localStorage.removeItem("token");
        this.context.setUser(null);
      }).catch(error => {
        let { errors } = this.state;
        if (error.response && error.response.data.message) {
          if (typeof error.response.data.message === "object" && Object.keys(error.response.data.message).length > 0) {
            errors = error.response.data.message;
          } else {
            errors.error = error.response.data.message;
          }
        } else {
          errors.error = "Unable to log you out";
        }
        this.setState({ errors, isRequestComplete: true }, () => this.setUpErrorDialog());
      });
    }
  };
  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    const { user } = this.context;
    const { dialog, isRequestComplete} = this.state;
    return (
      <>
        {
          dialog
        }
        <nav className="navbar navbar-expand navbar-dark scrolling-navbar yamm " id="navbar1">

          <div className="navbar-collapse collapse" id="navbar-collapse-1">
            <div className="container" id="navbarNav">
              <div className="row" id="navrow">
                <div className="col-xs-12" id="navlist">
                  <ul className=" navbar-nav ">

                    <li className="navitem">
                      <a className="nav-link " ><Link to={"/"} >Home</Link> <span className="sr-only"></span></a>
                    </li>
                    {

                      this.state.categories.map((category) => {
                        return <p>
                          <li className="navitem">


                            <a className="nav-link " key={category._id}>
                              <Link to={{
                                pathname: `/cardnews/${category._id}`,
                                category
                              }}>{category.category}</Link></a>
                          </li>
                        </p>
                      })
                    }

                  </ul>

                      {
                        isRequestComplete ? (
                          user ?
                          <ul className="d-flex ml-auto navbar-nav">
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle text-light" id="navbardrop" data-toggle="dropdown">
                                                {
                                                    user.image ?
                                                        <img style={{ height: "20px", width: "20px" }} className="rounded-circle mr-1" src={`data:${user.image.mimetype};base64,${user.image.buffer}`} alt={`Avatar of ${user.fullName}`} />
                                                        :
                                                        <img style={{ height: "20px", width: "20px" }} className="rounded-circle mr-1" src={DefaultImage} alt={"App default image of " + user.fullName} />
                                                }
                                                <span id="loggedInUser">{user.fullName}</span>
                                            </span>
                                            <div className="dropdown-menu dropdown-menu-right rounded-0">
                                                <span className="dropdown-item cursor-pointer" onClick={() => this.onLogoutClicked()}>LOGOUT</span>
                                            </div>
                                        </li>
                                    </ul>
                                    :
                                    <ul className="d-flex ml-auto navbar-nav">
                                        {/* <li className="nav-item p-2">
                                            <Link className="nav-link btn btn-sm btn-outline-light rounded-0 px-2" to="/login">LOGIN</Link>
                                        </li>
                                        <li className="nav-item p-2">
                                            <Link className="nav-link btn btn-sm btn-outline-light rounded-0 px-2" to="/register">REGISTER</Link>
                                        </li> */}
                                    </ul>
                        )
                        : 
                        <Loading/>
                      }

                </div>
              </div>
            </div>
          </div>
             </nav>
      </>
    )
  }
}

export default (Layout);