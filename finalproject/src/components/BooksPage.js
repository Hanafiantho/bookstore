import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'
import {Link} from 'react-router-dom'

import Footer from './Footer'
import TopHeader from './TopHeader'
import Books from './Books'

import mainLogo from '../img/logo1.png'

class BooksPage extends React.Component {
    componentDidMount(){
        document.title = 'Bookstore | Books'
    }
    
    render() {
        return (
            <div className='container main-container'>
                <div className='mb-2'>
                    <TopHeader />
                </div>
                <div className='row'>
                    <div className='col-2 pr-0'>
                        {/*  */}
                        <div className='mb-4 text-center'>
                            <Link to='/'><img src={mainLogo} alt='food-sense-logo' className="main-logo"/></Link>
                        </div>
                        <Nav vertical className='mb-3'>
                            <div className='border-top border-bottom'>
                                <h6 className='my-3' style={{fontWeight: 'bold', fontSize: '18px'}}>Book Categories</h6>
                            </div>
                            <NavItem className='pl-3'>
                                <NavLink className="navstyle navhover px-0" href="#"><Link to='/books' className='navstyle navhover'>{' '}Fiction</Link></NavLink>
                            </NavItem>

                            <NavItem className='pl-3'>
                                <NavLink className="navstyle navhover px-0" href="#">{' '}History</NavLink>
                            </NavItem>
            
                            <NavItem className='pl-3'>
                                <NavLink className="navstyle navhover px-0" href="#">{' '}Science</NavLink>
                            </NavItem>

                            <NavItem className='pl-3'>
                                <NavLink className="navstyle navhover px-0" href="#">{' '}Business</NavLink>
                            </NavItem>

                            <NavItem className='pl-3 border-bottom'>
                                <NavLink className="navstyle navhover px-0" href="#">{' '}Comic</NavLink>
                            </NavItem>

                        </Nav>
                        {/*  */}
                    </div>
                    <div className='col-10 pl-5 pr-5 pt-4'>
                        <Books />
                    </div>
                </div>
                <div className='mt-5'>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default BooksPage