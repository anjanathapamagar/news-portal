
import f11 from "../images/b11.jpeg";
import f2 from "../images/collection.png";
import f1 from "../images/10.jpg";
import f4 from "../images/14.jpg";
import f5 from "../images/12.jpg";
import f6 from "../images/11.jpg";

import { Button,  FormGroup, Label, Input} from 'reactstrap';

function Editors (props) {
    return (
        <>
       
       <div className="container" id="skcontainer">
<div className="row">
    <div className="col">
<div className="my-5 feature">

    
<div className="centered1">
   <div className="">
   <h4 className="text-block">EDITOR'S PICK</h4>
  
    </div>
   
    </div>
    
    <div className="feature__wrapper">
        <div className="row">
                <div className="feature__item d-flex mt-5">
                
                    <div className="">
                        <img src={f1} alt="" />
                        <h6 className="bottom-left"><b>Lorem ipsum dolor amet consectetur adipisicing elit sed 
                        {/* <br />consectetur adipisicing elit sed */}
                         </b></h6>
                        <h6 className="bottom-left"><b>ByJOHNSANDER</b></h6>
                       
                    </div>
                    <hr/>
                    <div className=""> 
                     <img src={f4} alt="" />
                     <h6 className="bottom-left"><b>Lorem ipsum dolor amet consectetur adipisicing elit sed </b></h6>
                     <h6 className="bottom-left"><b>ByADAMCOWIE</b></h6>
                     
                    </div>
                    <div className="">
                        <img src={f5} alt="" />
                        <h6  className="bottom-left"><b>Lorem ipsum dolor amet consectetur adipisicing elit sed</b></h6>
                        <h7  className="bottom-left"><b>ByTHOMOS RICKY</b></h7>
                        <div className=""> 
                         {/* <input className="text3" type = "WORLD" name = "WORLD"  value = "WORLD" />  */}
                      
                        </div>
                    </div>
                    <div className="">
                        <img src={f6} alt="" />
                        <h6 className="bottom-left"><b>Lorem ipsum dolor amet consectetur adipisicing elit sed</b> </h6>
                        <h8 className="bottom-left"><b>BySALARKEN</b></h8>
                        <div className="topy">  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
{/* </div> */}
</>
    );
}
export default Editors;