import React from 'react'
import {Modal, ModalBody, ModalFooter} from 'reactstrap'

class AddNewAddress extends React.Component {
    state = {
        modal: false,
        isMainAddress: true
    }
    
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    
    render() {
        return (
            <div>
                <button className='btn btn-dark' onClick={this.toggle}>Edit</button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} size='lg' className='modalAddAddress'>
                    <ModalBody className='p-4'>
                        <div className='row text-center my-3'>
                            <div className='col-12'>
                                <h3>Add Address</h3>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className='col-12'>
                                <p className='mb-1 addressPoint'>Address Title</p>
                                <input type='text' className='form-control mb-1 inputAddressTag' ref={input => this.addrTitle = input} required/>
                                <p style={{fontSize: '10px', color: 'rgb(158, 157, 157)'}}>Example : Home, Office, Apartement</p>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className='col-6 pr-0'>
                                <p className='mb-1 addressPoint'>Recepient Name</p>
                                <input type='text' className='form-control inputAddressTag' ref={input => this.recepName = input} required/>
                                <p style={{fontSize: '10px', color: 'rgb(158, 157, 157)'}}>Full name</p>
                            </div>
                            <div className='col-6'>
                                <p className='mb-1 addressPoint'>Phone Number</p>
                                <input type='text' className='form-control mb-1 inputAddressTag' ref={input => this.phnNumber = input} required/>
                                <p style={{fontSize: '10px', color: 'rgb(158, 157, 157)'}}>Number with country code [0-9], Ex: 6282219151532</p>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className='col-12'>
                                <p className='mb-1 addressPoint'>Address</p>
                                <textarea className='form-control mb-1 inputAddressTag' ref={input => this.address = input} required/>
                                <p style={{fontSize: '10px', color: 'rgb(158, 157, 157)'}}>Street name and number</p>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-8 pr-0'>
                                <p className='mb-1 addressPoint'>City</p>
                                <input type='text' className='form-control inputAddressTag' ref={input => this.city = input} required/>
                            </div>
                            <div className='col-4'>
                                <p className='mb-1 addressPoint'>Postal Code</p>
                                <input type='text' className='form-control inputAddressTag' ref={input => this.postCode = input} required/>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-6 pr-0'>
                                <p className='mb-1 addressPoint'>Province</p>
                                <input type='text' className='form-control inputAddressTag' ref={input => this.province = input} required/>
                            </div>
                            <div className='col-6'>
                                <p className='mb-1 addressPoint'>Country</p>
                                <input type='text' className='form-control inputAddressTag' ref={input => this.country = input} required/>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-outline-dark' onClick={this.toggle}>Cancel</button>{' '}
                        <button className='btn btn-dark' onClick={this.onSubmitAddress}>Add</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default AddNewAddress