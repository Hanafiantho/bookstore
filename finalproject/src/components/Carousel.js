import React from 'react'

class Carousel extends React.Component{
    render () {
        return (
            <div id='carouselExampleControls' className='carousel slide' data-ride='carousel'>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <div className='image1'></div>
                    </div>
                    <div className='carousel-item'>
                        <div className='image2'></div>
                    </div>
                    <div className='carousel-item'>
                        <div className='image3'></div>
                    </div>
                    <a className='carousel-control-prev' href='#carouselExampleControls' role='button' data-slide='prev'>
                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                        <span className='sr-only'>Previous</span>
                    </a>
                    <a className='carousel-control-next' href='#carouselExampleControls' role='button' data-slide='next'>
                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                        <span className='sr-only'>Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Carousel