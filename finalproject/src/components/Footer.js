import React from 'react'
import {Link} from 'react-router-dom'


// Import Image
import instaLogo from '../img/instagram.png'
import twitLogo from '../img/twitter.png'
import fbLogo from '../img/facebook.png'


class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className='row mt-1'>
                    <div className='col-5 pt-4'>
                        <hr />
                    </div>
                    <div className='col-2'>
                        <Link to='/' className='footer-brand'>
                            <p className='text-center mb-0 brand-up'><b>BOOK</b></p>
                            <p className='text-center brand-down'>STORE</p>
                        </Link>
                    </div>
                    <div className='col-5 pt-4'>
                        <hr />
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-5'></div>
                    <div className='col-2 text-center'>
                        <img src={instaLogo} alt='instagram-logo' className='mr-3 medsos-logo'/>
                        <img src={twitLogo} alt='twitter-logo' className='mr-3 medsos-logo'/>
                        <img src={fbLogo} alt='facebook-logo' className='medsos-logo'/>
                    </div>
                    <div className='col-5'></div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>
                        <p className='text-center mt-2 mb-0 footer'><i>© Copyright 2019 Bookstore.</i></p>
                        <p className='text-center footer'><i>All rights reserved. Powered by the <b>Bookstore</b></i></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer