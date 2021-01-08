
// import f1 from "../images/b11.jpeg";
// import f2 from "../images/collection.png";
import f3 from "../images/1.jpg";
import f4 from "../images/2.jpg";
import f5 from "../images/3.jpg";
import f6 from "../images/4.jpg";

import { Button,  FormGroup, Label, Input} from 'reactstrap';

function Section (props) {
    return (
        <>
       
       <div className="container">
    
           
<div className="row">
    <div className="col">
<div className="my-5 feature">

    
<div className="centered">
<div className="text-block0">
    <h4 className="">Latest From Categories</h4>
  
  </div>

    </div>
    
    <div className="">
        <div className="row ">
                <div className="feature__item d-flex mt-5">
                
                    <div className="">
                  
                        <img src={f3} alt="" />
                        
                        <h6 className="bottom-left1" >Lorem ipsum dolor amet </h6>
                        <div className="text-block1" > POLITICS
                     
                     </div>
                        {/* <div className="text-block1" > POLITICS
                   
                        </div> */}
                    </div>
                   
                    <div className=""> 
                     <img src={f4} alt=""  />
                     <h6 className="bottom-left1" >Lorem ipsum dolor amet </h6>
                     <div className="text-block2"> TECHNOLOGY 
                   
                        </div>
                    </div>
                    <div className="">
                        <img src={f5} alt="" />
                        <h6 className="bottom-left1" >Lorem ipsum dolor amet</h6>
                        <div  className="text-block3"> WORLD
                       
                        </div>
                    </div>
                    <div className="">
                        <img src={f6} alt="" />
                    
                        <h6 className="bottom-left1">Lorem ipsum dolor amet </h6>
                        <div className="text-block4">  HEALTH
                     
                    
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
export default Section;