import React from 'react'

import Footer from './Footer'
import TopHeader from './TopHeader'

import broken_things from '../img/thumbnail_broken_things.png'
import ringer from '../img/thumbnail_ringer.png'

class Cart extends React.Component {
    render() {
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
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{verticalAlign: 'middle'}}>
                                                <img src={broken_things} style={{width: '50px'}}/>
                                            </td>
                                            <td style={{verticalAlign: 'middle'}}>Broken Things</td>
                                            <td style={{verticalAlign: 'middle'}}>
                                                <input type="number" name="quantity" min="0" max="100" step="1" />
                                            </td>
                                            <td style={{verticalAlign: 'middle'}}>
                                                $3.00
                                            </td>
                                            <td className='text-right' style={{verticalAlign: 'middle'}}>
                                                <button type="button" class="btn btn-dark" style={{width: '100px'}}>Remove</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td style={{verticalAlign: 'middle'}}>
                                                <img src={ringer} style={{width: '50px'}}/>
                                            </td>
                                            <td style={{verticalAlign: 'middle'}}>Ringer</td>
                                            <td style={{verticalAlign: 'middle'}}>
                                                <input type="number" name="quantity" min="0" max="100" step="1" />
                                            </td>
                                            <td style={{verticalAlign: 'middle'}}>
                                                $2.50
                                            </td>
                                            <td className='text-right' style={{verticalAlign: 'middle'}}>
                                                <button type="button" class="btn btn-dark" style={{width: '100px'}}>Remove</button>
                                            </td>
                                        </tr>
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

export default Cart