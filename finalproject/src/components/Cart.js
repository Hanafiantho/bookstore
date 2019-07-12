import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from '../config/axios'

import Footer from './Footer'
import TopHeader from './TopHeader'

import {getCart} from '../actions/index.js'
import {getTotalPrice} from '../actions/index.js'
import Cookie from 'universal-cookie'

const cookie = new Cookie()

class Cart extends React.Component {
    state = {
        grandTotal : 0,
        user_id : 0
    }

    componentDidMount() {
        document.title = 'Bookstore | Cart'
        const user_id = cookie.get('id')
        this.setState({user_id: user_id})

        this.props.getCart(user_id)
        this.props.getTotalPrice(user_id)
    }

    componentWillMount() {
        this.props.getTotalPrice(cookie.get('id'))
    }

    addQuantity = (id) => {
        const quantityTot = document.getElementById(id).value
        console.log(quantityTot)
        console.log(id);
        
        axios.patch (`/editQuantity/${id}`, {
            quantity: quantityTot
        }).then(res => {
            console.log(res);
            const user_id = cookie.get('id')
            this.props.getCart(user_id)
        })

        const user_id = cookie.get('id')
        this.props.getTotalPrice(user_id)
    }

    deleteCart = async (id) => {
        console.log(id);
        
        await axios.delete(`/deleteItemCart/${id}`, {
            params: {
                id
            }
        }).then(res => {
            console.log(res)
        })

        this.props.getCart(this.state.user_id)
    }

    renderItems = () => {
        if (this.props.user.cart.length !== 0) {
            return this.props.user.cart.map(cartDetail => {
                const {
                    id, 
                    cover, 
                    title, 
                    price, 
                    quantity
                } = cartDetail

                return (
                    <tr>
                        <td style={{verticalAlign: 'middle'}}>
                            <img src={`http://localhost:9000/getBookCover/${cover}`} style={{width: '50px'}}/>
                        </td>
                        <td style={{verticalAlign: 'middle'}}>{title}</td>
                        <td style={{verticalAlign: 'middle'}}>
                            <input id ={id} type="number" name="quantity" min="0" max="100" step="1" defaultValue={quantity} onChange={() => {this.addQuantity(id)}}/>
                        </td>
                        <td style={{verticalAlign: 'middle'}}>
                            ${price}
                        </td>
                        <td className='text-center' style={{verticalAlign: 'middle'}}>
                            <button type="button" class="btn btn-dark" style={{width: '100px'}} onClick={() => {this.deleteCart(id)}}>Remove</button>
                        </td>
                    </tr>
                )
            })
        }
    }
    
    renderSummary = () => {
        if (this.props.user.cart.length) { 
            return this.props.user.cart.map(cartDetail => {
                const {
                    id,
                    title, 
                    price, 
                    quantity
                } = cartDetail
                
                const totalPrice = price * quantity
                
                console.log(totalPrice);

                axios.patch(`/totPriceEachItem/${id}`, {
                    totprice: totalPrice
                }).then(res => {
                    console.log(res)
                })

                    return (
                    <div className='row pt-3'>
                        <div className='col-6 text-left'>
                            <p style={{fontWeight: 'bold'}}>{title}</p>
                        </div>
                        <div className='col-6 text-right'>
                            <p>${totalPrice}</p>
                        </div>
                    </div>
                )
            })
        }
    }
    
    render() {
        console.log(this.props.user.cart)
        console.log(this.state.TotalPrice);
        console.log(this.state.user_id);
        console.log(this.props.user.totalprice)
        
        var grandTotal = 0
        if(this.props.user.cart.length) {
            this.props.user.cart.forEach(obj => {
                grandTotal += obj.price * obj.quantity
            })
        }
        
        console.log(grandTotal);
        
        return (
            <div className='container main-container p-5'>
                <TopHeader />
                <div className='row mb-5'>
                    <div className='col-7'>
                        <div className='row mb-4'>
                            <div className='col-12'>
                                <h3 style={{fontWeight: 'bold'}}>Shopping Bag</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <h4>Items</h4>
                            </div>
                        </div>
                        <div className='row' style={{borderTop: '2px solid black'}}>
                            <div className='col-12'>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price</th>
                                            <th scope="col" className='text-center'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderItems()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-4 pt-4'>
                        <div className='row' style={{borderBottom: '2px solid black'}}>
                            <div className='col-12'>
                                <h4>Order Summary</h4>
                            </div>
                        </div>
                        {this.renderSummary()}
                        <div className='row mt-3'>
                            <div className='col-6 text-left'>
                                <p style={{fontWeight: 'bold'}}>Total</p>
                            </div>
                            <div className='col-6 text-right'>
                                <p>{grandTotal}</p>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-12 text-center'>
                                <button className='btn btn-dark' onClick={this.onClick} style={{width: '100%'}}>
                                    <Link style={{color: 'white', textDecoration: 'none', width: '100%'}} to={`/checkout/${grandTotal}`}>Proceed To Checkout</Link>
                                </button>
                            </div>
                        </div>
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

export default connect(mapStateToProps, {getCart, getTotalPrice})(Cart)