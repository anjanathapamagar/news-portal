import { Button, Modal } from 'react-bootstrap'
import React, {useState} from 'react'
import news from '../images/news1.gif';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

export default function LoginModal({open, children, onClose}) {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
           
        <FaUserCircle  id="closeicon" size='1.5rem' className="usericon" color="white" onClick={handleShow}/>
      

      <Modal  size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="closeb">
                    </Modal.Header>
                    <Modal.Body>
                        <LoginForm/>
                        {/* <h2>hello</h2> */}
                    </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="danger" className="closeb" onClick={handleClose}>
            Close
          </Button> */}
          </Modal.Footer>
      </Modal>

        </>
    )
    function LoginForm(props){
        return(
            <div class="container register">
            <div class="row">
                <div class="col-md-3 register-left">
                    <img src={news} alt=""/>
                    <h3>Welcome</h3>
                    <p>This is News Portal</p>
                    {/* <input type="submit" name="" value="Login"/><br/> */}
                </div>
                <div class="col-md-9 register-right">
                   
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 class="register-heading">Login Form</h3>
                            <div class="row register-form">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Phone number" value="" />
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Password *" value="" />
                                    </div>
                                
                                    <input type="submit" class="btnRegister"  value="Login"/>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
    
        </div>
    
        )
    }
}
