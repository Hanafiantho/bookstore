import React from 'react'
import { connect } from 'react-redux'
import cookies from 'universal-cookie'

import EditAddress from '../components/EditAddress'
import { getAddress } from '../actions/index.js'
import axios from '../config/axios.js'
const cookie = new cookies()

class AddressList extends React.Component {
    componentDidMount() {
        this.props.getAddress(cookie.get('id'))
    }

    deleteAddress = async (id, user_id) => {
        console.log(user_id);
        
        await axios.delete (`/deleteAddress/${id}`).then(res => {
            console.log(res.data);
        })

        this.props.getAddress(user_id)
    }

    renderAddressList = () => {
        if (this.props.user.address.length !== 0) {
            return this.props.user.address.map(addressDetail => {
                const {
                    id, 
                    user_id, 
                    address_title, 
                    recepient_name, 
                    phone, 
                    address, 
                    city, 
                    province, 
                    country, 
                    postal_code
                } = addressDetail

                return (
                    <div className='border border-dark p-3 mb-3' style={{width: '100%', fontSize: '14px'}}>
                        <p className='mb-2'><span style={{fontWeight: 'bold'}}>{recepient_name}</span> ({address_title})</p>
                        <p className='mb-2'>{phone}</p>
                        <p className='mb-2'>{address}</p>
                        <p className='mb-2'>{city}, {postal_code}</p>
                        <p className='mb-2'>{province}, {country}</p>
                        <div className='row'>
                            <div className='col-1'>
                                <EditAddress 
                                    id = {id}
                                    user_id = {user_id}
                                    address_title = {address_title}
                                    recepient_name = {recepient_name}
                                    phone = {phone}
                                    address = {address}
                                    city = {city}
                                    province = {province}
                                    country = {country}
                                    postal_code = {postal_code}
                                />
                            </div>
                            <div className='col-1 pl-0'>
                                <a href='#' className='btnEditAddress' onClick={() => this.deleteAddress(id, user_id)}>Delete</a>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        console.log(this.props.user.address);

        return (
            <div>
                {this.renderAddressList()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.auth }
}

export default connect(mapStateToProps, { getAddress })(AddressList) 