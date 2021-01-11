import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Newsticker from './Components/Layout/Newsticker';
import Navbar from './Components/Layout/Navbar';
import Registration from './Components/Layout/Registration';
// import Footer from './Components/Layout/Footer';


function App() {
  return (
    <div >
 <BrowserRouter>
<Route path='/index'  component={Newsticker} />
<Route path='/nav'  component={Navbar} />
<Route path='/regi'  component={Registration} />
{/* <Route path='/footer'  component={Footer} /> */}

      </BrowserRouter>
    </div>

  );
}

export default App;