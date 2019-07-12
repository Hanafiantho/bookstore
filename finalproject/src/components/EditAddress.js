import React from 'react'
import { connect } from 'react-redux'
import { Modal, ModalBody, ModalFooter } from 'reactstrap'

import {onEditAddress, getAddress} from '../actions/index'

class EditAddress extends React.Component {
    state = {
        modal: false
    }
    
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    onSubmitNewAddress = async() => {
        const id = this.props.id
        const user_id = this.props.user_id
        const address_title = this.addrTitle.value
        const recepient_name = this.recepName.value
        const phone = this.phnNumber.value
        const address = this.address.value
        const city = this.city.value
        const postal_code = this.postCode.value
        const province = this.province.value
        const country = this.country.value

        console.log(user_id);
        
        await this.props.onEditAddress(id, address_title, recepient_name, phone, address, city, postal_code, province, country)
        
        this.props.getAddress(user_id)
        this.toggle()
    }
    
    render() {
        console.log(this.props.id, this.props.user_id);

        return (
            <div>
                <a href='#' className='btnEditAddress' onClick={this.toggle}>Edit</a>

                <Modal isOpen={this.state.modal} toggle={this.toggle} size='lg' className='modalAddAddress'>
                    <ModalBody className='p-4'>
                        <div className='row text-center my-3'>
                            <div className='col-12'>
                                <h3>Edit Address</h3>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className='col-12'>
                                <p className='mb-1 addressPoint'>Address Title</p>
                                <input type='text' className='form-control mb-1 inputAddressTag' ref={input => this.addrTitle = input} placeholder={this.props.address_title} required/>
                                <p className='editAddressInfo'>Example : Home, Office, Apartement</p>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className='col-6 pr-0'>
                                <p className='mb-1 addressPoint'>Recepient Name</p>
                                <input type='text' className='form-control inputAddressTag' ref={input => this.recepName = input} placeholder={this.props.recepient_name} required/>
                                <p className='editAddressInfo'>Full name</p>
                            </div>
                            <div className='col-6'>
                                <p className='mb-1 addressPoint'>Phone Number</p>
                                <input type='text' className='form-control mb-1 inputAddressTag' ref={input => this.phnNumber = input} placeholder={this.props.phone} required/>
                                <p className='editAddressInfo'>Number with country code [0-9], Ex: 6282219151532</p>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className='col-12'>
                                <p className='mb-1 addressPoint'>Address</p>
                                <textarea className='form-control mb-1 inputAddressTag' ref={input => this.address = input} placeholder={this.props.address} required/>
                                <p className='editAddressInfo'>Street name and number</p>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-8 pr-0'>
                                <p className='mb-1 addressPoint'>City</p>
                                <input type='text' className='form-control inputAddressTag' ref={input => this.city = input} placeholder={this.props.city} required/>
                            </div>
                            <div className='col-4'>
                                <p className='mb-1 addressPoint'>Postal Code</p>
                                <input type='text' className='form-control inputAddressTag' ref={input => this.postCode = input} placeholder={this.props.postal_code} required/>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-6 pr-0'>
                                <p className='mb-1 addressPoint'>Province</p>
                                <input type='text' className='form-control inputAddressTag' ref={input => this.province = input} placeholder={this.props.province} required/>
                            </div>
                            <div className='col-6'>
                                <p className='mb-1 addressPoint'>Country</p>
                                <input type='text' className='form-control inputAddressTag' ref={input => this.country = input} placeholder={this.props.country} required/>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-outline-dark' onClick={this.toggle}>Cancel</button>{' '}
                        <button className='btn btn-dark' onClick={this.onSubmitNewAddress}>Save</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default connect(null, {onEditAddress, getAddress})(EditAddress)