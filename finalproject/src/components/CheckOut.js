import React from 'react'
import {connect} from 'react-redux'
import {getCart} from '../actions/index'
import {getAddress} from '../actions/index'
import {getPaymentMethod} from '../actions/index'
import {getShippingMethod} from '../actions/index'
import Cookie from 'universal-cookie'

import AddNewAddress from './AddNewAddress.js'
import Footer from './Footer'

const cookie = new Cookie()

class CheckOut extends React.Component {
    state = {
        value : 0
    }

    componentDidMount() {
        document.title = 'Bookstore | Checkout'
        const user_id = cookie.get('id')

        this.props.getCart(user_id)
        this.props.getAddress(user_id)
        this.props.getPaymentMethod()
        this.props.getShippingMethod()
    }
    
    renderMyBasket = () => {
        if (this.props.user.cart.length) {
            return this.props.user.cart.map(basketDetail => {
                const {
                    cover,
                    title,
                    quantity,
                    price,
                    totprice, 
                    writer
                } = basketDetail

                return (
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-10 border p-2'>
                            <div className='d-flex'>
                                <div className='p-0 mr-2'>
                                    <img src={`http://localhost:9000/getBookCover/${cover}`} style={{width: '50px'}}/>
                                </div>
                                <div className='mr-2' style={{width: '180px'}}>
                                    <p className='mb-0' style={{fontWeight: 'bold', fontSize: '13px'}}>{title}</p>
                                    <p className='mb-0' style={{fontWeight: 'bold', fontSize: '12px'}}>{writer}</p>
                                    <p className='mb-0' style={{fontSize: '10px', color: 'grey'}}>${price} Qty: {quantity}</p>
                                </div>
                                <div>
                                    <p style={{fontWeight: 'bold', fontSize: '12px'}}>${totprice}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-1'></div>
                    </div>
                )
            })
        }
    }

    renderAddress = () => {
        if (this.props.user.address.length) {
            return this.props.user.address.map(addressDetail => {
                const {
                    id,
                    user_id,
                    recepient_name,
                    phone,
                    address,
                    address_title,
                    city, 
                    country,
                    postal_code,
                    province
                } = addressDetail

                return (
                    <div className='row mb-3'>
                        <div className='col-12'>
                            <button className='btn btn-outline-dark' style={{width: '100%'}}>
                                <div className='text-left'>
                                    <p className='mb-2' style={{fontSize: '14px'}}><span style={{fontWeight: 'bold'}}>{recepient_name}</span> ({address_title})</p>
                                    <p className='mb-2' style={{fontSize: '14px'}}>{phone}</p>
                                    <p className='mb-2' style={{fontSize: '14px'}}>{address}</p>
                                    <p className='mb-2' style={{fontSize: '14px'}}>{city}, {postal_code}</p>
                                    <p className='mb-2' style={{fontSize: '14px'}}>{province}, {country}</p>
                                </div>
                            </button>
                        </div>
                    </div>
                )
            })
        }
    }

    renderPayment = () => {
        if (this.props.user.payment.length) {
            return this.props.user.payment.map(paymentDetail => {
                const {
                    id,
                    bank_name,
                    bank_account
                } = paymentDetail

                return (
                    <option value={id}>{bank_name}: {bank_account}</option>
                )
            })
        }
    }

    getPrice = (event) => {
        this.setState({value: event.target.value})
    }

    renderShipping = () => {
        if (this.props.user.shipping.length) {
            return this.props.user.shipping.map(paymentDetail => {
                const {
                    id,
                    kind,
                    price
                } = paymentDetail

                return (
                    <option value={price}>{kind}: ${price}</option>
                )
            })
        }
    }

    onCheckoutClick = () => {
        const user_id = this.props.user.id
        const bank_account = this.refs.payment.value
        const shippingPrice = this.refs.shipping.value
        

        console.log(user_id, bank_account, shippingPrice);
    }

    render() {
        console.log(this.props.user);
        console.log(parseInt(this.props.match.params.grandtotal));
        console.log(this.props.user.payment);
        console.log(this.props.user.shipping);
        console.log(this.state.value);

        var total = 0
        var orderTotal = parseInt(this.state.value)
        var subTotal = parseInt(this.props.match.params.grandtotal)
        total = subTotal + orderTotal

        return (
            <div className='container main-container p-5'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='checkoutTitle'>Checkout</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-7' style={{borderTop : '3px solid black', verticalAlign: 'middle'}}>
                        <div className='row mt-2'>
                            <div className='col-6 text-left'>
                                <p style={{fontWeight: 'bold'}}>Ship To</p>
                            </div>
                            <div className='col-6 text-right'>
                                {/* <AddNewAddress /> */}
                            </div>
                        </div>
                        <div className='row p-3 profileMenu'>
                            <div className='col-12'>
                                {this.renderAddress()}
                            </div>
                        </div>
                        <div className='row' >
                            <div className='col-5'>
                                <div className='row mt-5' style={{borderTop : '3px solid black', verticalAlign: 'middle'}}>
                                    <div className='col-12 text-left mt-2'>
                                        <p style={{fontWeight: 'bold'}}>Payment Method</p>
                                    </div>
                                </div>
                                <div>
                                    <select className='form-control' ref='payment'>
                                        <option selected disabled hidden>Select</option>
                                        {this.renderPayment()}
                                    </select>
                                </div>
                            </div>
                            <div className='col-2'></div>
                            <div className='col-5'>
                                <div className='row mt-5' style={{borderTop : '3px solid black', verticalAlign: 'middle'}}>
                                    <div className='col-12 text-left mt-2'>
                                        <p style={{fontWeight: 'bold'}}>Shipping Method</p>
                                    </div>
                                </div>
                                <div>
                                    <select className='form-control' onChange={this.getPrice} ref='shipping'>
                                        <option selected disabled hidden>Select</option>
                                        {this.renderShipping()}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-4' style={{borderTop : '3px solid black'}}>
                        <div className='row mt-2'>
                            <div className='col-12'>
                                <p style={{fontWeight: 'bold'}}>My Basket</p>
                            </div>
                        </div>
                        {this.renderMyBasket()}
                        <div className='row'>
                            <div className='col-1'></div>
                            <div className='col-10 border'>
                                <div className='d-flex mt-2'>
                                    <div className='mr-2' style={{width: '230px'}}>
                                        <p style={{fontWeight: 'bold', fontSize: '12px'}}>Merchandise Subtotal</p>
                                    </div>
                                    <div>
                                        <p style={{fontWeight: 'bold', fontSize: '12px'}}>${this.props.match.params.grandtotal}</p>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className='mr-2' style={{width: '230px'}}>
                                        <p style={{fontWeight: 'bold', fontSize: '12px'}}>Shipping</p>
                                    </div>
                                    <div>
                                        <p style={{fontWeight: 'bold', fontSize: '12px'}}>${this.state.value}</p>
                                    </div>
                                </div>
                                <div className='d-flex border-top'>
                                    <div className='mr-2 mt-2' style={{width: '230px'}}>
                                        <p style={{fontWeight: 'bold', fontSize: '12px'}}>Order Total</p>
                                    </div>
                                    <div className='mt-2'>
                                        <p style={{fontWeight: 'bold', fontSize: '12px'}}>${total}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-1'></div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-12'>
                                <button className='btn btn-dark' style={{width: '100%'}} onClick={this.onCheckoutClick}>Checkout</button>
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

export default connect(mapStateToProps, {getCart, getAddress, getPaymentMethod, getShippingMethod})(CheckOut)