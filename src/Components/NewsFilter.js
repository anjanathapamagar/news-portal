import f6 from "../images/7.jpg";
import f1 from "../images/6.jpg";

import f14 from "../images/16.jpg";

import f16 from "../images/5.jpg";
import f17 from "../images/17.jpg";
import fn from "../images/sknews.jpg";
import * as FaIcons from 'react-icons/fa';

function Newsfilter (props) {
    return (
        <>
    <div className="container">             
<div className="row">
    <div className="col">


<div className="left">
    <h3 className="">Explore the Top
    </h3>
<h3 className=""><b>NEWS MAKERS</b></h3>
<br />
</div>
<div className="row">

<h6 className="btnfilter">Filter Content by</h6>
<div className="btn-group">
<button className=" active">LATEST</button>
<button className="">PREVIOUS WEEK</button>
<button className="">HOT ARTICLES</button>
<button className="">HIGHEST RATED</button>
 
</div>
</div>


{/* <div className="float-right">
<Button className="text">LATEST</Button>
<Button className="text1">PREVIOUS</Button>
<Button className="text1">PREVIOUS WEEK</Button>
<Button className="text1">HOT ARTICLES</Button>
<Button className="text1">HIGHEST RATED</Button>

</div> */}




    <div className="feature__wrapper">
    
                <div className="feature__item d-flex mt-4">
                <div className="container">
        <div className="row">
        <div className="col -md-3 ">
                <div className="m">
                    <div className="">
                        <img src={f1} alt="" />
                
                         
                        <h4 className="text-block6">TRAVEL</h4>
                     {/* <Button className="text1 ">TRAVEL</Button> */}
                     <h4 className=""><strong>LOREM IPSUM DOLOR AMT ELIT <br />SED TEMPOR INCIDUNT</strong></h4><br/>
                     <p>BY JOHN SINA   15 MINS AGO &nbsp;&nbsp;   FEB 30, 2016 &nbsp;&nbsp;
                     <FaIcons.FaCommentAlt/>&nbsp;&nbsp;
{/*                        
                     <MDBIcon far icon="comment-alt" />   <i class="far fa-comment-alt"></i>*/}
                    23</p>
    <h6> Lorem ipsum dolor amet consectetur adipisicing 
    sed do eiusmod tempor incididunt labore et dolore magna aliqua enimad minim 
    veniam quis nostruda exercitation ullamco laboris onsequat duis aute irueelit 
    sed do eiusmodtempor incididunt labore e elit sed do eiusmodtemport
        duis aute irue dolorin voluptate velit esse cillum ...
         <br />
         <br />
         <br />
CONTINUE READING</h6>
  
                        
                        
                    </div>
                    
                   
                    </div>
                  
                    </div>
                    <hr/>
                    {/* <div className="">
    <h4 className="">LOREM IPSUM DOLOR AMT ELIT SED TEMPOR INCIDUNT</h4>
    <h6> Lorem ipsum dolor amet consectetur adipisicing elit sed do eiusmod tempor incididunt labore et dolore magna aliqua enimad minim veniam quis nostruda exercitation ullamco laboris onsequat duis aute irue dolorin voluptate velit esse cillum ...

CONTINUE READING</h6>
  
  </div> */}
   <div className="row">
   <div className="col">

                <div className=""  >

                    <div className=" latest">
<div className="div1">
                        <img src={f6} alt="" />
                   
                        <p className="test">COVID-19 pandemic  <br/>
                         a stay-at-home order issued by the Governor.
                         {/* <br />
                         ENTERTAINMENT */}
                         <h6 className="c" >ENTERTAINMENT    &nbsp;&nbsp;
                     <FaIcons.FaCommentAlt/> 45</h6></p>
                        
                      </div>
                     



<br />
<div className="div1">
                        <img src={f16} alt="" />
                        <p className="">Aliquip exea comod rurulabore<br/>
                         nsekuat duis doloree
                         
                         <h6 className="d" >WORLD  &nbsp;&nbsp;
                     <FaIcons.FaCommentAlt/> 45</h6></p>
                      
                      
</div>
<br />
<div className="div1">
                        <img src={f17} alt="" />
                        <p>Volupta tem acusa ntium ulaboredolore
                        <br/> dolore me laud
                        <br/> <h6 className="e" >SPORTS  &nbsp;&nbsp;
                     <FaIcons.FaCommentAlt/> 45</h6> </p>
                        

                        </div>
<br/>
                        <div className="div1">
                        <img src={f16} alt="" />
                        <p>Aliquip exea comod rure <br/>nsekuat duisulabore dolore
                        <br/> <h6 className="f" >HEALTH  &nbsp;&nbsp;
                     <FaIcons.FaCommentAlt/> 45</h6></p>
                        
                      
</div>
<br />
<div className="div1">
                        <img src={f14} alt="" />
                        <p>Perspiciatis unde omnist<br/> enatus error situlabore dolore
                        <br/>  <h6 className="g" >TECHNOLOGY  &nbsp;&nbsp;
                     <FaIcons.FaCommentAlt/> 45</h6> 
                        </p>
                      
                      
</div>
</div>
                               
</div>
</div>

</div>   

                </div>
                
            </div>
            </div>
            </div>
            
        </div>
    </div>
    </div>
  

{/*  */}

</>
    );
}
export default Newsfilter;
