import React from 'react'
import Footer from './Footer'
import { connect } from 'react-redux'

import avaIcon from '../img/avatar.png'

import PersonalInfo from '../components/PersonalInfo.js'
import AddressDetail from '../components/AddressDetail.js'
import EditPassword from '../components/EditPassword.js'
import {onAddAvatar, onGetAvatar, keepLogin} from '../actions/index'

class EditProfile extends React.Component {
    state = {
        isShowingAvatar : false,
        previewImg : '',
        avatar: null
    }

    componentDidMount() {
        const username = this.props.user.username
        this.props.keepLogin(username)
    }

    renderImg = () => {
        if (this.state.previewImg) {
            return <img src={this.state.previewImg} className='userAvatar' />
        } else if(this.props.user.avatar) {
            return <img src={this.props.user.avatar} className='userAvatar' />
        } else {
            return <img src={avaIcon} className='userAvatar' />
        }
    }

    editAvatar = () => {
        this.setState(prevState => ({
            isShowingAvatar : !prevState.isShowingAvatar
        }))
    }

    chooseAvatar = async () => {
        await this.setState({avatar: this.avatar.files[0]})
        console.log(this.state.avatar);
        
        const previewImg = URL.createObjectURL(this.state.avatar);
        console.log(previewImg);

        this.setState({previewImg : previewImg})
        
        if (previewImg.length) {
            this.editAvatar()
        }
    }

    saveAvatar = async () => {
        const id = this.props.user.id
        const avatar = this.state.avatar
        const username = this.props.user.username

        console.log(id);
        console.log(avatar);
        console.log(username);
        
        await this.props.onAddAvatar(id, avatar)

        await this.props.onGetAvatar(username)
        
        // this.setState({
        //     previewImg: this.props.user.avatar,
        //     isShowingAvatar: !this.state.isShowingAvatar
        // })

        console.log(this.state.previewImg);

        this.editAvatar()
    }

    render() {
        console.log(this.props.user.username)
        console.log(this.state.previewImg)
        console.log(this.state.avatar)
        console.log(this.props);
        
        
        return (
            <div className='container main-container'>
                <div className='row mb-3'>
                    <div className='col-3'>
                        <div className='card cardAvatar'>
                            <div className='text-center'>
                                <div className='avatar-place mt-3'>
                                    {this.renderImg()}
                                </div>
                            </div>
                            <div className='card-body text-center'>
                                <label className='brwsfile' hidden={this.state.isShowingAvatar}>
                                    Browse File
                                    <input type="file" size="60" ref={input => this.avatar = input} onChange={this.chooseAvatar}/>
                                </label>
                                <button className='saveAvaBtn' hidden={!this.state.isShowingAvatar} onClick={this.saveAvatar}>Save</button>
                                <button className='saveAvaBtn' hidden={!this.state.isShowingAvatar} onClick={this.saveAvatar}>Delete</button>
                                <p className='mt-3 mb-0 file-requirement'>Maximum File Size : 2 Megabytes</p>
                                <p className='file-requirement'>File Type : jpg, jpeg, png</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-9 px-3'>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active text-dark" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Personal Info</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Address</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Password</a>
                            </li>
                        </ul>
                        <div className="tab-content border border-top-0 profileMenu" id="myTabContent">
                            <div className="tab-pane fade show active p-3 pl-4" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <PersonalInfo />
                            </div>
                            <div className="tab-pane fade p-4" id="profile" role="tabpanel">
                                <AddressDetail />
                            </div>
                            <div className="tab-pane fade p-4" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <EditPassword />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <Footer />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.auth }
}

export default connect(mapStateToProps, {onAddAvatar, onGetAvatar, keepLogin}) (EditProfile)