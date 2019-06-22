import React from 'react'
import { connect } from 'react-redux'

import { 
    onEditFirstname, 
    onEditLastname, 
    onEditEmail,
    onEditPhone
} from '../actions/index.js'

import editLogo from '../img/edit.png'
import checkLogo from '../img/checked.png'
import closeLogo from '../img/close.png'

class PersonalInfo extends React.Component {
    state = {
        isShowingFirstname : false,
        isShowingLastname : false,
        isShowingEmail : false,
        isShowingPhone : false
    }

    // -------------------------------------------------------- //
    editFirstname = () => {
        this.setState(prevState => ({
            isShowingFirstname : !prevState.isShowingFirstname
        }))
    }

    saveNewFirstname = () => {
        const newfirstname = this.newfirstname.value
        const username = this.props.user.username

        this.props.onEditFirstname(username, newfirstname)
        this.editFirstname()
    }

    // -------------------------------------------------------- //
    editLastname = () => {
        this.setState(prevState => ({
            isShowingLastname : !prevState.isShowingLastname
        }))
    }
    
    saveNewLastname = () => {
        const newlastname = this.newlastname.value
        const username = this.props.user.username

        this.props.onEditLastname(username, newlastname)
        this.editLastname()
    }

    // -------------------------------------------------------- //
    editEmail = () => {
        this.setState(prevState => ({
            isShowingEmail : !prevState.isShowingEmail
        }))
    }

    saveNewEmail = () => {
        const newemail = this.newemail.value
        const username = this.props.user.username

        this.props.onEditEmail(username, newemail)
        this.editEmail()
    }

    // -------------------------------------------------------- //
    editPhone = () => {
        this.setState(prevState => ({
            isShowingPhone : !prevState.isShowingPhone
        }))
    }

    saveNewPhone = () => {
        const newphone = this.newphone.value
        const username = this.props.user.username

        this.props.onEditPhone(username, newphone)
        this.editPhone()
    }

    render() {
        return (
            <table className='table-info'>
                <tr>
                    <td className='user-info'>Username</td>
                    <td style={{width: '40%', height: '40px'}}>{this.props.user.username}</td>
                </tr>
                <tr>
                    <td className='user-info'>First Name</td>
                    <td>
                        <p className='mb-0' hidden={this.state.isShowingFirstname}>{this.props.user.firstname}</p>
                        <input type='text' className='form-control inputEditPlace' hidden={!this.state.isShowingFirstname} placeholder='input new first name' ref={input => this.newfirstname = input}/>
                    </td>
                    <td>
                        <a href='#' hidden={this.state.isShowingFirstname} onClick={this.editFirstname}>
                            <img src={editLogo} alt='edit logo' className='icon'/>
                        </a>
                        <a href='#' hidden={!this.state.isShowingFirstname} onClick={this.saveNewFirstname}>
                            <img src={checkLogo} className='icon'/>
                        </a>
                        <a href='#' hidden={!this.state.isShowingFirstname} onClick={this.editFirstname}>
                            <img src={closeLogo} className='ml-2 icon'/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td className='user-info'>Last Name</td>
                    <td>
                        <p className='mb-0' hidden={this.state.isShowingLastname}>{this.props.user.lastname}</p>
                        <input type='text' className='form-control inputEditPlace' hidden={!this.state.isShowingLastname} placeholder='input new last name' ref={input => this.newlastname = input}/>
                    </td>
                    <td>
                        <a href='#' hidden={this.state.isShowingLastname} onClick={this.editLastname}>
                            <img src={editLogo} alt='edit logo' className='icon'/>
                        </a>
                        <a href='#' hidden={!this.state.isShowingLastname} onClick={this.saveNewLastname}>
                            <img src={checkLogo} className='icon'/>
                        </a>
                        <a href='#' hidden={!this.state.isShowingLastname} onClick={this.editLastname}>
                            <img src={closeLogo} className='ml-2 icon'/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td className='user-info'>Email</td>
                    <td>
                        <p className='mb-0' hidden={this.state.isShowingEmail}>{this.props.user.email}</p>
                        <input type='text' className='form-control inputEditPlace' hidden={!this.state.isShowingEmail} placeholder='input new email' ref={input => this.newemail = input}/>
                    </td>
                    <td>
                        <a href='#' hidden={this.state.isShowingEmail} onClick={this.editEmail}>
                            <img src={editLogo} alt='edit logo' className='icon'/>
                        </a>
                        <a href='#' hidden={!this.state.isShowingEmail} onClick={this.saveNewEmail}>
                            <img src={checkLogo} className='icon'/>
                        </a>
                        <a href='#' hidden={!this.state.isShowingEmail} onClick={this.editEmail}>
                            <img src={closeLogo} className='ml-2 icon'/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td className='user-info'>Phone</td>
                    <td>
                        <p className='mb-0' hidden={this.state.isShowingPhone}>{this.props.user.phone}</p>
                        <input type='text' className='form-control inputEditPlace' hidden={!this.state.isShowingPhone} placeholder='input new phone' ref={input => this.newphone = input}/>
                    </td>
                    <td>
                        <a href='#' hidden={this.state.isShowingPhone} onClick={this.editPhone}>
                            <img src={editLogo} alt='edit logo' className='icon'/>
                        </a>
                        <a href='#' hidden={!this.state.isShowingPhone} onClick={this.saveNewPhone}>
                            <img src={checkLogo} className='icon'/>
                        </a>
                        <a href='#' hidden={!this.state.isShowingPhone} onClick={this.editPhone}>
                            <img src={closeLogo} className='ml-2 icon'/>
                        </a>
                    </td>
                </tr>
            </table>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.auth }
}

export default connect(mapStateToProps, {onEditFirstname, onEditLastname, onEditEmail, onEditPhone})(PersonalInfo)