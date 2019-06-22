import React from 'react'
import { connect } from 'react-redux'
import { Modal, ModalBody, ModalFooter } from 'reactstrap'

import axios from '../config/axios.js'
import AddressList from '../components/AddressList'
import { getAddress } from '../actions/index.js'

class AddressDetail extends React.Component {
    state = {
        modal: false,
        isMainAddress: true
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    onSubmitAddress = async () => {
        const user_id = this.props.user.id
        const address_title = this.addrTitle.value
        const recepient_name = this.recepName.value
        const phone = this.phnNumber.value
        const address = this.address.value
        const city = this.city.value
        const postal_code = this.postCode.value
        const province = this.province.value
        const country = this.country.value

        console.log(user_id, address_title, recepient_name, phone, address, city, postal_code, province, country);
        
        await axios.post (`/addAddress`, {
            user_id,
            address_title,
            recepient_name,
            phone,
            address,
            city, 
            postal_code,
            province,
            country
        }).then(res => {
            console.log(res);
        })

        this.toggle()

        this.props.getAddress(user_id)
    }

    render() {
        return (
            <div>
                <button className='mb-3 btnAddAddress' onClick={this.toggle}>
                    Add New Address
                </button>
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
                        <div className='row mb-2'>
                            <div className='col-12'>
                                <input type="checkbox" id="mainaddress" className='mr-2' checked={this.state.isMainAddress}/>
                                <label for="mainaddress" className='mb-0 addressPoint'>Main Address</label>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-outline-dark' onClick={this.toggle}>Cancel</button>{' '}
                        <button className='btn btn-dark' onClick={this.onSubmitAddress}>Add</button>
                    </ModalFooter>
                </Modal>
                <div>
                    <AddressList />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.auth }
}

export default connect(mapStateToProps, {getAddress})(AddressDetail)