import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import brandImg from '../icon/logo1.png'

import {onLoginClick} from '../actions'

class Login extends React.Component {
    onLoginClick = () => {
        const username = this.username.value
        const password = this.password.value

        console.log(username, password)
        
        this.props.onLoginClick(username, password)
    }
    
    render() {
        console.log(this.props.admin.username);
        
        if(this.props.admin.username === '') {
            return (
                <div className='container' style={{width: '1000px', height: '500px'}}>
                    <div className='p-3 mt-5' style={{width: '320px', margin: '0px auto', border: "3px solid black", borderRadius: '10px'}}>
                        <div className='row mb-2'>
                            <div className='col-12 text-center'>
                                <img src={brandImg} style={{width: '100px'}}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <form>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Username</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            id="exampleInputEmail1" 
                                            aria-describedby="emailHelp" 
                                            placeholder="Enter username"
                                            ref={input => this.username = input}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            id="exampleInputPassword1" 
                                            placeholder="Password" 
                                            ref={input => this.password = input}    
                                        />
                                    </div>
                                </form>
                                <div className='text-center mt-4'>
                                    <button className="btn btn-dark" style={{width: '130px'}} onClick={this.onLoginClick}>
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )    
        } else {
            return <Redirect to="/product"/>
        }
    }
}

const mapStateToProps = state => {
    return { admin: state.auth }
}

export default connect (mapStateToProps, {onLoginClick})(Login)