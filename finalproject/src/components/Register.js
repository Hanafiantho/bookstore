import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {onRegister} from '../actions/index'

import Footer from './Footer'

// Import Image
import usernameLogo from '../img/username.png'
import emailLogo from '../img/email.png'
import passwordLogo from '../img/lock.png'

class Register extends React.Component {
    componentDidMount(){
        document.title = 'Bookstore | Register'
    }

    onButtonClick = () => {
        const firstname = this.firstname.value
        const lastname = this.lastname.value
        const username = this.username.value
        const email = this.email.value
        const password = this.password.value
        this.props.onRegister(firstname, lastname, username, email, password)
    }

    render() {
        console.log(this.props.username)
        return(
            <div className='container main-container-wl'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='container regist-form'>
                            <div className='row'>
                                <div className='col-6 img-regist'></div>

                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col'>
                                            <h4>Registration Form</h4>
                                        </div>
                                    </div>
                                    <div className='row mt-4'>
                                        <div className='col-6'>
                                            <input type='text' className='regist-input' placeholder='First Name' ref={input => this.firstname = input}/>
                                        </div>
                                        <div className='col-6'>
                                            <input type='text' className='regist-input' placeholder='Last Name' ref={input => this.lastname = input}/>
                                        </div>
                                    </div>
                                    <div className='row mt-4'>
                                        <div className='col'>
                                            <input type='text' className='regist-input' placeholder='Username' ref={input => this.username = input}/>
                                            <img src={usernameLogo} alt='username' className='mt-2 regist-logo'/>
                                        </div>
                                    </div>
                                    <div className='row mt-4'>
                                        <div className='col'>
                                            <input type='text' className='regist-input' placeholder='Email Address' ref={input => this.email = input}/>
                                            <img src={emailLogo} alt='email' className='mt-2 regist-logo'/>
                                        </div>
                                    </div>
                                    <div className='row mt-4'>
                                        <div className='col'>
                                            <input type='password' className='regist-input' placeholder='Password' ref={input => this.password = input}/>
                                            <img src={passwordLogo} alt='password' className='mt-2 regist-logo'/>
                                        </div>
                                    </div>
                                    <div className='row mt-5'>
                                        <div className='col'>
                                            <button className='btn btn-dark' style={{backgroundColor: 'black'}} onClick={this.onButtonClick}>Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default connect (null, {onRegister})(Register)