import React,{component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from './Components/Login.js';
import NewsPage  from "./Components/Single/NewsPage.js";
import Newsticker from "./Components/Layout/Newsticker.js"
import Navbar from './Components/Navbar.js';
import Registration from './Components/Registration.js';
import LoginModal from './Components/LoginModal.js';
// import NewsPage from './Components/NewsPage.js';
import LoginSuccess from './Components/LoginSuccess.js'
import UserProvider from './Components/context/UserContext.js';



function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login} exact/>
        {/* <Route path='/newspage' component={NewsPage} exact/> */}
        <Route path='/index'  component={Newsticker} />
        <Route path='/nav'  component={Navbar} />
        <Route path='/register'  component={Registration} />
        <Route path='/newspage'  component={NewsPage} exact />
        <Route path='/loginsuccess' component={LoginSuccess} exact/>
      </Switch>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;