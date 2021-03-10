import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import SideNav from './sideNav'


const HeaderBar = () => {
    const [showMenu, toggleMenu] = useState(false);
    return (
        <nav className='nav headerBar' style={{position: 'fixed', zIndex: 5, width: '100%',height: '68px'}}>
            <div className='container-fluid'>
                
                <div className='navbar-header'>
                    <div  className='navbar-brand'>
                    <FontAwesomeIcon  icon={faBars} color="white" onClick={e=>toggleMenu(true)}/>
                    {/* <img alt='arzooo-header-logo' className='headerLogo'
                     src="https://static.arzooo.com/images/f+logo-01.png"></img> */}
                      
                    </div>

                    <img alt='arzooo-header-logo' className='headerLogo pull-right'
                     src="https://static.arzooo.com/images/transparent+background.png" style={{float:'right',width:'150px',height: '60px'}}></img>
                
                </div>

            </div>
            {showMenu && <SideNav onClose={()=>toggleMenu(false)}/>}
        </nav>
        
    );
    
}



export default HeaderBar;