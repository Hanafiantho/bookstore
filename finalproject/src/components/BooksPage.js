import React from 'react'
import {Link} from 'react-router-dom'
import axios from '../config/axios'
import {connect} from 'react-redux'

import Footer from './Footer'
import TopHeader from './TopHeader'
import Books from './Books'
import CategoryNavigation from './CategoryNavigation'

import {onGetBooks} from '../actions/index'

import mainLogo from '../img/logo1.png'

class BooksPage extends React.Component {
    state = {
        categories: []
    }
    
    async componentDidMount(){
        document.title = 'Bookstore | Books'

        await axios.get('/getCategory').then(res => {
            console.log(res.data)

            this.setState({categories: res.data})
        })

        this.props.onGetBooks()
    }

    
    render() {
        console.log(this.state.categories);
        console.log(this.props.user.books);
        console.log(this.props);
        

        return (
            <div className='container main-container p-5'>
                <div className='mb-2'>
                    <TopHeader />
                </div>
                <div className='row'>
                    <div className='col-2 pr-0'>
                        <div className='mb-4 text-center'>
                            <Link to='/'><img src={mainLogo} alt='food-sense-logo' className="main-logo"/></Link>
                        </div>
                        <CategoryNavigation 
                            categories = {this.state.categories}
                        />
                    </div>
                    <div className='col-10 pl-5 pr-5 pt-4'>
                        <Books 
                            books = {this.props.user.books}
                            category = {this.props.match.params.category}
                        />
                    </div>
                </div>
                <div className='mt-5'>
                    <Footer />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {user: state.auth }
}

export default connect(mapStateToProps, {onGetBooks})(BooksPage)