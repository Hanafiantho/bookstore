import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'
import {Link} from 'react-router-dom'

class CategoryNavigation extends React.Component {
    renderCategory = () => {
        if (this.props.categories.length !== 0) {
            return this.props.categories.map(categoryDetail => {
                const {
                    id, 
                    category
                } = categoryDetail

                return (
                    <NavItem className='pl-3'>
                        <NavLink className="navstyle navhover px-0" href="#"><Link to={`/books/${category}`} className='navstyle navhover'>{' '}{category}</Link></NavLink>
                    </NavItem>
                )
            })
        }
    }
    
    render() {
        console.log(this.props.categories);
        
        return (
            <Nav vertical className='mb-3'>
                <div className='border-top border-bottom'>
                    <h6 className='my-3' style={{fontWeight: 'bold', fontSize: '18px'}}>Book Categories</h6>
                </div>
                {this.renderCategory()}
            </Nav>
        )
    }
}

export default CategoryNavigation