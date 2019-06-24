import React from 'react'
import {connect} from 'react-redux'

import Footer from './Footer'
import TopHeader from './TopHeader'

import {getCart} from '../actions/index.js'
import Cookie from 'universal-cookie'

const cookie = new Cookie()

class Cart extends React.Component {
    // componentDidMount() {
    //     const user_id = this.props.user.id
    //     console.log(user_id);
        

    //     this.props.getCart(user_id)
    // }

    componentDidMount() {
        const user_id = cookie.get('id')
        if(this.props.user.cart.length === 0) {
            console.log(user_id);
        
            this.props.getCart(user_id)
        }
        
    }

    renderCart = () => {
        if (this.props.user.cart.length !== 0) {
            return this.props.user.cart.map(cartDetail => {
                const {
                    id, 
                    user_id, 
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
                            <input type="number" name="quantity" min="0" max="100" step="1" defaultValue={quantity}/>
                        </td>
                        <td style={{verticalAlign: 'middle'}}>
                            ${price}
                        </td>
                        <td className='text-center' style={{verticalAlign: 'middle'}}>
                            <button type="button" class="btn btn-dark" style={{width: '100px'}}>Remove</button>
                        </td>
                    </tr>
                )
            })
        }
    }
    
    render() {
        console.log(this.props.user.cart)

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
                                        {this.renderCart()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-4 pt-4'>
                        <div className='row'>
                            <div className='col-12'>
                                <h4>Order Summary</h4>
                            </div>
                        </div>
                        <div className='row pt-3' style={{borderTop: '2px solid black'}}>
                            <div className='col-6 text-left'>
                                <p style={{fontWeight: 'bold'}}>Broken Things</p>
                            </div>
                            <div className='col-6 text-right'>
                                <p>$6.00</p>
                            </div>
                        </div>
                        <div className='row border-bottom'>
                            <div className='col-6 text-left'>
                                <p style={{fontWeight: 'bold'}}>Ringer</p>
                            </div>
                            <div className='col-6 text-right'>
                                <p>$5.00</p>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-6 text-left'>
                                <p style={{fontWeight: 'bold'}}>Total</p>
                            </div>
                            <div className='col-6 text-right'>
                                <p>$11.00</p>
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