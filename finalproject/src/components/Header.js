import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'
import {Link} from 'react-router-dom'


// Import Image
import mainLogo from '../img/logo1.png'
import prodLogo from '../img/product.png'
import revLogo from '../img/review.png'
import galLogo from '../img/gallery2.png'
import aboLogo from '../img/about.png'


class Header extends React.Component {
    render() {
        return (
            <div>
                <div className='mb-3 text-center'>
                    <Link to='/'><img src={mainLogo} alt='food-sense-logo' className="main-logo"/></Link>
                </div>
                <Nav vertical className='mb-3'>
                    <NavItem>
                        <NavLink className="navstyle navhover pr-0" href="#"><Link to='/books' className='navstyle navhover'><img src={prodLogo} alt='about-logo' className="nav-logo"/> {' '}Book</Link></NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className="navstyle navhover" href="#"><img src={revLogo} alt='about-logo' className="nav-logo"/> {' '}Review</NavLink>
                    </NavItem>
    
                    <NavItem>
                        <NavLink className="navstyle navhover" href="#"><img src={galLogo} alt='about-logo' className="nav-logo"/> {' '}Gallery</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className="navstyle navhover"><Link to='/about' className='navstyle navhover'><img src={aboLogo} alt='about-logo' className="nav-logo"/> {' '}About</Link></NavLink>
                    </NavItem>
                </Nav>

                <div className='container px-3'>
                    <form className="form">
                        <input className="form-control form-control-sm" type="text" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </div>  
        )
    }
}

export default Header