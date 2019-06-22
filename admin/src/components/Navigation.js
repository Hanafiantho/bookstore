import React from 'react'
import {connect} from 'react-redux'

import brandImg from '../icon/logo1.png'
import powerLogo from '../icon/power.png'

import {onLogoutAdmin} from '../actions/index'

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <div className='row mt-3 mb-2'>
                    <div className='col-12 text-center'>
                        <img src={brandImg} className='brand-logo'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link " id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="false">Home</a>
                            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Products</a>
                            <a class="nav-link " id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Transactions</a>
                            <a class="nav-link " id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={this.props.onLogoutAdmin}>
                                <p><img src={powerLogo} style={{width: '18px'}}/> Logout</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {onLogoutAdmin})(Navigation)