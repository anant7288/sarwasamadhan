import React, { useState, useContext } from 'react';
import './sidenav.css';
import {Accordion,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft, faSortDown, faSortUp} from '@fortawesome/free-solid-svg-icons';
// import { Context as AuthContext } from  '../context/AuthContext';
import {useHistory,useLocation} from 'react-router-dom';

const SideNav = (props) => {
    // const {logout, state} = useContext(AuthContext);
    // // const {state} = useContext(AuthContext);
    // const {isMaster, isLogisMobile, isLogisApp, isOrderApp, isOrderMOb, 
    //     isAccount, isCatalogue, isSupplier, isAdmin, isSupport, isAnalyst, isLogisticMaster, isFalconMaster} = state.roleCheck;
    const [drop, setDrop] = useState(null)
    // let history = useHistory();
    // let location = useLocation();
    // const endSession = async() => {
    //     let { from } = location.state || { from: { pathname: "/login" } };
    //         await logout();
    //         history.replace(from)
    //         window.location.reload();
       
    // }
    return(
        <div>
             <div  className="sidenav">
                <div className='menuWrapper'>
                
                    <div  className="menuContainer">
                         <div className="closeIcon">
                            <FontAwesomeIcon  icon={faArrowAltCircleLeft} color="white" fontSize="25" onClick ={props.onClose} />
                        </div>
                        <img alt='arzooo-logo' className='menuLogo'
                            src="https://static.arzooo.com/images/f+logo-01.png"></img>
                    </div>
                     
                     <Accordion>
                            {/* {
                                isMaster  || isAnalyst || isOrderMOb || isOrderApp || isSupplier || isAccount ? */}
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0" onClick ={()=>setDrop(drop === 0 ? null: 0 )} >
                                Orders
                                 <FontAwesomeIcon className="arrowIcon" icon={drop === 0 ? faSortUp : faSortDown } fontSize="25" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                  <Link to="/orders" className="menuLink"><Card.Body className="menuText">Store Orders</Card.Body></Link>
                                </Accordion.Collapse>
                                {/* <Accordion.Collapse eventKey="0">
                                   <Link to="/customer-order" className="menuLink"><Card.Body className="menuText">Customer Orders</Card.Body></Link>
                                </Accordion.Collapse> */}
                            </Card>
                            {/* :

                            null */}

                            {/* } */}
                            

                     </Accordion>
                </div>
                

                
             </div>   
        </div>
    )
}



export default SideNav