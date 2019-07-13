import React from 'react'

import Footer from './Footer'
import UploadTransfer from './UploadTransfer'

import shopbagLogo from '../img/shopping-bag.png'
import lightbulb from '../img/lightbulb-idea.png'

class Transaction extends React.Component {
    render() {
        return (
            <div className='container main-container p-5'>
                <div className='row'>
                    <div className='col-6'>
                        <h4>Waiting For Payment (1)</h4>
                    </div>
                    <div className='col-6'></div>
                </div>
                <div className='row border mx-1 mt-2' style={{border: '1px solid black !important'}}>
                    <div className='col-1 text-ceter p-4'>
                        <img src={shopbagLogo} href='shopping bag logo' style={{width: '50px'}}/>
                    </div>
                    <div className='col-7 pt-4 pl-3 pb-4'>
                        <div className='row'>
                            <div className='col-12 text-left'>
                                <h5>Shopping</h5>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-4'>
                                Date of Transaction
                            </div>
                            <div className='col-1 pl-0'>
                                :
                            </div>
                            <div className='col-7'>
                                12 July 2019
                            </div>
                        </div>
                        <div className='row mt-1'>
                            <div className='col-4'>
                                Total Transaction
                            </div>
                            <div className='col-1 pl-0'>
                                :
                            </div>
                            <div className='col-7'>
                                $20
                            </div>
                        </div>
                        <div className='row mt-1'>
                            <div className='col-4'>
                                Payment Method 
                            </div>
                            <div className='col-1 pl-0'>
                                :
                            </div>
                            <div className='col-7'>
                                Bank Transfer
                            </div>
                        </div>
                        <div className='row mt-1'>
                            <div className='col-4'>
                                Bank Account 
                            </div>
                            <div className='col-1 pl-0'>
                                :
                            </div>
                            <div className='col-7'>
                                <span style={{width: 'bold'}}>BCA 3723098781</span>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-12'>
                                <div className='d-flex border p-2' style={{height: '45px', width: '70%'}}>
                                    <img src={lightbulb} style={{width: '23px'}}/><p className='mb-0 ml-1' style={{fontSize: '18px'}}>Pay Before 13 July 2019, 23.30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 p-4'>
                        <UploadTransfer />
                        <button className='btn btn-outline-secondary btn-upload-trf mt-2' style={{width: '100%', height: '35%'}}>
                            <p className='mb-1'>Products</p> 
                            <p className='mb-0'>Detail</p>
                        </button>
                    </div>
                </div>
                <div className='mt-5'>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Transaction