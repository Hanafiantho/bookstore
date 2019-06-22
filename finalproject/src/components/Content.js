import React from 'react'

import Carousel from './Carousel'

class Content extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Carousel />
                    </div>
                </div>
                <div className='row mt-5 border-bottom border-dark'>
                        <div className='col'>
                            <h2 className='float-left'>New This Week</h2>
                        </div>
                        <div className='col pt-3'>
                            <a className='float-right seeallhover text-dark'>See all >></a>
                        </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-2'>
                        <div className='card border-0' style={{width: '8rem'}}>
                            <div className='card-head text-center'>
                                <img src={require ('../img/crazyrichasians.jpeg')} style={{width: 120}} />
                            </div>
                            <div className='card-body pl-2'>
                                <h6 className='card-title mb-2'>Crazy Rich Asian</h6>
                                <a href='#'></a>
                                <p className='mb-0 apfont text-primary'>Kwan, Kevin</p>
                                <p className='apfont text-danger'>Rp 122.000</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-2'>
                        <div className="card border-0" style={{width: '8rem'}}>
                            <div className='card-head text-center'>
                                <img src={require ('../img/harrypotter.jpeg')} style={{width: 120}} />
                            </div>
                            <div className='card-body pl-1'>
                                <h6 className='card-title mb-2'>Harry Potter</h6>
                                <p className='mb-0 apfont text-primary'>Rownling, J. K.</p>
                                <p className='apfont text-danger'>Rp 164.000</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className="card border-0" style={{width: '8rem'}}>
                            <div className='card-head text-center'>
                                <img src={require ('../img/flowergirls.jpeg')} style={{width: 120}} />
                            </div>
                            <div className='card-body pl-1'>
                                <h6 className='card-title mb-2'>The Flower Girls</h6>
                                <p className='mb-0 apfont text-primary'>Clark-Platts, Alice</p>
                                <p className='apfont text-danger'>Rp 218.000</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='card border-0' style={{width: '8rem'}}>
                            <div className='card-head text-center'>
                                <img src={require ('../img/harrypotter.jpeg')} style={{width: 120}} />
                            </div>
                            <div className='card-body pl-1'>
                                <h6 className='card-title mb-2'>Harry Potter</h6>
                                <p className='mb-0 apfont text-primary'>Rownling, J. K.</p>
                                <p className='apfont text-danger'>Rp 164.000</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='card border-0' style={{width: '8rem'}}>
                            <div className='card-head text-center'>
                                <img src={require ('../img/prestin&child.jpeg')} style={{width: 120}} />
                            </div>
                            <div className='card-body pl-1'>
                                <h6 className='card-title mb-2'>The Paraoh Key</h6>
                                <p className='mb-0 apfont text-primary'>Clark-Platts, Alice</p>
                                <p className='apfont text-danger'>Rp 218.000</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='card border-0' style={{width: '8rem'}}>
                            <div className='card-head text-center'>
                                <img src={require ('../img/flowergirls.jpeg')} style={{width: 120}} />
                            </div>
                            <div className='card-body pl-1'>
                                <h6 className='card-title mb-2'>The Flower Girls</h6>
                                <p className='mb-0 apfont text-primary'>Clark-Platts, Alice</p>
                                <p className='apfont text-danger'>Rp 218.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content