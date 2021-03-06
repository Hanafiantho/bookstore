import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import Navigation from './Navigation.js'
import ImportProduct from './AddProduct'
import AddCategory from './AddCategory'
import EditProducts from './EditProducts'

import {onGetBooks} from '../actions/index'

import deleteIcon from '../icon/delete.png'
import axios from '../config/axios.js';

class ManageProducts extends React.Component {
    componentDidMount() {
        this.props.onGetBooks()
    }


    deleteBook = async (id) => {
        await axios.delete(`/deleteBooks/${id}`, {
            params: {
                id
            }
        }).then(res => {
            console.log(res)
        })

        this.props.onGetBooks()
    }

    renderBooks = () => {
        console.log(this.props.books.books);
        
        if (this.props.books.books.length !== 0) {
            return this.props.books.books.map(bookDetail => {
                const {
                    id, 
                    category,
                    cover,
                    title,
                    writer,
                    price,
                    quantity,
                    synopsis
                } = bookDetail
    
                return (
                    <tr>
                        <td className='pl-2'>
                            <img src={`http://localhost:9000/getBooks/${cover}`} style={{width: '50px'}}/>
                        </td>
                        <td>{category}</td>
                        <td>{title}</td>
                        <td>{writer}</td>
                        <td>{synopsis}</td>
                        <td>${price}</td>
                        <td className='text-center'>{quantity}</td>
                        <td>
                            <div className='d-flex'>
                                <EditProducts
                                    id = {id}
                                    cover = {cover}
                                    category = {category}
                                    title = {title}
                                    writer = {writer}
                                    synopsis = {synopsis}
                                    price = {price}
                                    quantity = {quantity}
                                />
                                <a href='#' onClick={() => {this.deleteBook(id)}}>
                                    <img src={deleteIcon} className='action-icon'/> 
                                </a>
                            </div>
                        </td>
                    </tr>
                )
            })
        }
    }

    render() {
        console.log(this.props.books.books)

        if(this.props.admin.username) {
            return (
                <div className='container mt-5 px-0'>
                    <div className='d-flex flex-row'>
                        <div className='navbar-frame pt-0'>
                            <Navigation />
                        </div>
                        {/* <div className='col-1'></div> */}
                        <div className='px-3 content'>
                            <div className='row mb-4'>
                                <div className='col-12 text-left'>
                                    <h3 className='mt-3'>Products</h3>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className='col-12'>
                                    <div classname='container'>
                                        <div className='row'>
                                            <div className='col-3 text-left'>
                                                <AddCategory />
                                            </div>
                                            <div className='col-6'></div>
                                            <div className='col-3 text-right'>
                                                <ImportProduct />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Cover</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Writer</th>
                                                <th scope="col">Synopsis</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderBooks()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

const mapStateToProps = (state) => {
    return { 
        admin: state.auth,
        books: state.books
    }
}

export default connect(mapStateToProps, {onGetBooks})(ManageProducts)