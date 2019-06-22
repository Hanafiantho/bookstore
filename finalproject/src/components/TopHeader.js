import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {onLoginClick} from '../actions/index'
import {connect} from 'react-redux'
import {
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
} from 'reactstrap'

import { onLogoutUser } from '../actions/index'

// Import Picture
import lockLogo from '../img/lock.png'
import cartLogo from '../img/cart1.png'

class TopHeader extends React.Component {
    state = {
        modal : false
    }

    onSubmitClick = () => {
        const username = this.username.value
        const password = this.password.value

        this.props.onLoginClick(username, password)
    }

    toggle = () => {
        this.setState(prevState => ({
            modal : !prevState.modal
        }))
    }

    onLoginError = () => {
        console.log(this.props.user);
        
        if(this.props.user.error !== ''){
            return (
                <div className="alert alert-danger">
                    {this.props.user.error}
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        if(this.props.user.username === '' || this.props.user.username === undefined) {
            console.log(this.props.user);

            return (
                <div className='row'>
                    <div className='col-10'></div>
                    <div className='col-2'>
                        <a className='ml-1 text-dark loginhover' onClick={this.toggle}><img className='lock-icon' src={lockLogo} alt='lock-icon' /> Login/Register</a>
    
                        <Modal isOpen={this.state.modal} toggle={this.toggle} style={{width: '370px'}}>
                            <ModalHeader cssModule={{'modal-title': 'w-100 text-center'}}>
                                <div style={{fontSize : '26px'}}>Member Login</div>
                            </ModalHeader>
                                
                            <ModalBody>
                                <form className='form text-center'>
                                    <div className='form-group'>
                                        <div className='input-group'>
                                            <span className='input-group-addon'></span>
                                            <input ref={input => {this.username = input}} type='text' className='form-control' placeholder='Username' required='required' />
                                        </div>
                                    </div>
                                        <div className='form-group'>
                                            <div className='input-group'>
                                                <span className='input-group-addon'></span>
                                                <input ref={input => {this.password = input}} type='password' className='form-control' placeholder='Password' required='required' />
                                            </div>
                                        </div>
                                </form>
    
                                <div className='form-group'>
                                    <button type='submit' className='btn btn-dark btn-block btn-lg' onClick={this.onSubmitClick}>Login</button>
                                </div>
                                <p className='hint-text text-center'><a className='text-danger' href='#'>Forgot Password?</a></p>
                                <p>{this.onLoginError()}</p>
                            </ModalBody>
    
                            <ModalFooter className='mx-auto'>
                                <p>Don't have an account?</p> 
                                <p><Link to='/register'>Create one</Link></p>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            )
        } else {
            return (
                
                <div className='row'>
                    <div className='col-10'></div>
                    <div className='col-1 pt-1' style={{paddingRight: '30px'}}>
                        <Link to='/cart'><img src={cartLogo} alt='cart-logo' className='float-right' style={{width: '16px'}}/></Link>
                    </div>
                    <div className='col-1 userLog dropdown'>
                        <a href='#' className='mb-0 text-dark float-right dropdown-toggle loginhover' data-toggle='dropdown'>
                            {this.props.user.username}<span className='caret'></span>
                        </a>

                        <div className='dropdown-menu'>
                            <Link to='/editprofile' className='dropdown-item drop-item'>Profile</Link>
                            <div className='dropdown-divider'></div>
                            <a href='#' className='dropdown-item drop-item' onClick={this.props.onLogoutUser}>Log out</a>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return { user: state.auth };
};

export default connect(mapStateToProps,{onLoginClick, onLogoutUser})(TopHeader)