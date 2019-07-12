import React from 'react'
import {connect} from 'react-redux'
import axios from '../config/axios';
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'

import tickIcon from '../img/tick.png'

class EditPassword extends React.Component {
    state = {
        disable : false,
        newpassword : '',
        confirmpassword : ''
    }

    oldEmailInput = async () => {
        const oldpassword = this.oldpassword.value
        const username = this.props.user.username
        console.log(username, oldpassword);

        await axios.get('/getPassword', {
            params : {
                username,
                password: oldpassword
            }
        }).then(res => {
            console.log(res.data);
            if(res.data === true) {
                this.setState(prevState => ({
                    disable: !prevState.disable
                }));
            }
        })
    }
    
    newEmailInput = async () => {
        const newpassword = this.newpassword.value
        console.log(newpassword);
        
        await this.setState({newpassword: newpassword})
        console.log(this.state.newpassword);
    }

    confirmEmailInput = async () => {
        const confirmpassword = this.confirmpassword.value
        console.log(confirmpassword);
        
        await this.setState({confirmpassword: confirmpassword})
        console.log(this.state.confirmpassword);
    }

    inputNewPassword = async () => {
        const newpassword = this.state.newpassword
        const confirmpassword = this.state.confirmpassword
        const username = this.props.user.username

        console.log({newpassword, confirmpassword});
        
        if(newpassword === confirmpassword) {
            await axios.patch (`/editPassword/${username}`, {
                password: newpassword
            }).then(res => {
                console.log(res);

                this.setState(prevState => ({
                    disable: !prevState.disable
                }));

                this.setState({
                    newpassword: '',
                    confirmpassword: ''
                })
            })
        }

        window.location.reload()
    }

    render() {
        console.log(this.props.user);
        
        return (
            <div className='container'>
                <div className='row mb-3'>
                    <div className='col-4'></div>
                    <div className='col-4 px-0'>
                        <p className='mb-1' style={{fontSize: '14px'}}>Old Password</p>
                        <input 
                            type='password' 
                            className='form-control mb-1' 
                            style={{width: '100%'}} 
                            ref={input => this.oldpassword = input}
                            onChange={this.oldEmailInput}
                        />
                        <p style={{fontSize: '11px'}}>Input your account password</p>
                    </div>
                    <div className='col-4'></div>
                </div>
                <div className='row mb-2'>
                    <div className='col-4'></div>
                    <div className='col-4 px-0'>
                        <p className='mb-1' style={{fontSize: '14px'}}>New Password</p>
                        <input 
                            type='password' 
                            className='form-control' 
                            style={{width: '100%'}}
                            ref={input => this.newpassword = input} 
                            disabled={!this.state.disable}
                            onChange={this.newEmailInput}
                        />
                    </div>
                    <div className='col-4'></div>
                </div>
                <div className='row mb-3'>
                    <div className='col-4'></div>
                    <div className='col-4 px-0'>
                        <p className='mb-1' style={{fontSize: '14px'}}>Confirm Password</p>
                        <input 
                            type='password' 
                            className='form-control' 
                            style={{width: '100%'}}
                            ref={input => this.confirmpassword = input} 
                            disabled={!this.state.disable}
                            onChange={this.confirmEmailInput}
                        />
                    </div>
                    <div className='col-4'></div>
                </div>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4 px-0 text-center'>
                        <button className='btn btn-dark' style={{width: '30%'}} onClick={() => {this.inputNewPassword()}}>Save</button>
                        {/* <button className='btn btn-dark' style={{backgroundColor: 'black'}} onClick={this.inputNewPassword}>Register</button> */}
                    </div>
                    <div className='col-4'></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.auth }
}

export default connect(mapStateToProps)(EditPassword)