import React from 'react'

import Header from './Header'
import Footer from './Footer'

import TopHeader from './TopHeader'

class About extends React.Component {
    render() {
        return (
            <div className='container main-container'>
                <div className='mb-2'>
                    <TopHeader />
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <Header />
                    </div>
                    <div className='col-10 pl-5 pr-5'>
                        <div className='row mt-3'>
                            <p className='about-title'>About Us</p>
                        </div>
                        
                        <div className='row'>
                            <p>BOOKSTORE was founded in 1985 to provide high-quality imported books and magazines to readers in Indonesia. Through the years, our network has grown and we now have over 45 retail outlets in strategic shopping areas around Indonesia including airports and malls.</p>
                            
                            <p>BOOKSTORE make the latest air-flown imported books and magazines available in an attractive environment. Our staffs are trained to be knowledgeable and helpful.</p>
                            
                            <p>BOOKSTORE allow in-store staff to assist you in ordering any book or magazine from around the world and have it delivered directly to your home or office.</p>
                            
                            <p>BOOKSTORE.COM enables you to select from over 21 million international books and magazines with fast, guaranteed delivery and low prices.</p>

                            <p>This service is regarded as the best online retailer in Indonesia for the following reasons:
                                <ol>
                                    <li>Fast delivery for best-selling products</li>
                                    <li>Advance preordering of best-selling books and magazines for delivery to your home or office within 2 days of the official release date in Indonesia.</li>
                                    <li>Convenient online shopping puts you just a click away from your favorite books and magazines in the comfort of your home or office without fighting traffic and crowds</li>
                                    <li>No hidden costs because unlike other online stores BOOKSTORE does not charge extra fees or taxes later after you order. All prices shown on our website include delivery and taxes.</li>
                                    <li>Secure online payments managed by reputable banks. BOOKSTORE does not receive or retain your credit card data as payments are handled via a secure link direct to the bank portal.</li>
                                </ol>
                            </p>

                            <p>BOOKSTORE is the leading Indonesian bookstore for all your reading needs with friendly staffs who are ready to help you anytime. If you have a question or problem you can email or call us and get an immediate reply. That’s our promise!</p>
                        </div>
                    </div>
                </div>
                <div className='mt-3'>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default About