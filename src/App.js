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
// import NewsPage from './Components/NewsPage.js';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login} exact/>
        {/* <Route path='/newspage' component={NewsPage} exact/> */}
        <Route path='/index'  component={Newsticker} />
        <Route path='/nav'  component={Navbar} />
        <Route path='/register'  component={Registration} />
        <Route path='/newspage'  component={NewsPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;