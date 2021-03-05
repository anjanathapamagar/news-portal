import React,{component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from './Components/Auth/Login.js';
import NewsPage  from "./Components/Single/NewsPage.js";
import Newsticker from "./Components/Layout/Newsticker.js"
import Navbar from './Components/Navbar.js';
import Registration from './Components/Auth/Registration.js';
import LoginModal from './Components/LoginModal.js';
// import NewsPage from './Components/NewsPage.js';
import LoginSuccess from './Components/LoginSuccess.js'
import UserProvider from './Components/context/UserContext.js';
import AllNews from './Components/rough.js';
import CNews from './Components/CNews.js';
import CardNews from './Components/Layout/CardNews.js';
import PrivateRoute from './Components/utils/PrivateRoute.js';
import Comment from './Components/Comment.js'
import Messages from './Components/Contacts.js'



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
        <Route path='/newspage/:newsID'  component={NewsPage} exact />
        <Route path='/loginsuccess' component={LoginSuccess} exact/>
        <Route path='/cardnews/:categoryID'  component={CardNews} />
        <Route path='/comment' component={Comment} exact/>
        <Route path='/message'  component={Messages} />
        {/* <Route path='/rough'  component={AllNews} /> */}
        {/* <Route path='/cnews'  component={CNews}exact /> */}
      </Switch>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;