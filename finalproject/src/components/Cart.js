import React from 'react'
import {connect} from 'react-redux'
import axios from '../config/axios'

import Footer from './Footer'
import TopHeader from './TopHeader'

import {getCart} from '../actions/index.js'
import Cookie from 'universal-cookie'

const cookie = new Cookie()

class Cart extends React.Component {
    state = {
        TotalPrice : [],
        user_id : 0
    }

    componentDidMount() {
        const user_id = cookie.get('id')
        this.setState({user_id: user_id})

        this.props.getCart(user_id)
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
        if (this.props.user.cart.length !== 0) {
            return this.props.user.cart.map(cartDetail => {
                const {
                    title, 
                    price, 
                    quantity
                } = cartDetail
                
                const totalPrice = price * quantity
                console.log(totalPrice);
                
                this.state.TotalPrice.push(totalPrice)

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

    total = () => {
        const cart = this.props.user.cart
        console.log(cart);

        // const {
        //     price, 
        //     quantity
        // } = cartItem

        // console.log(price);
        

        // if(this.props.user.cart.length){
        //     var sumprice = 0
        //     this.props.cart.forEach(item => {
        //         sumprice += obj.price
        //     }); return sumprice
        // } else {
        //     return 0
        // }
    }

    render() {
        console.log(this.props.user.cart)
        console.log(this.state.TotalPrice);
        console.log(this.state.user_id);
        
        return (
            <div className='container'>
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
                                <p>${this.total()}</p>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-12 text-center'>
                                <button className='btn btn-dark' style={{width: '100%'}}>Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer className='mt-5'/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {user: state.auth }
}

export default connect(mapStateToProps, {getCart})(Cart)