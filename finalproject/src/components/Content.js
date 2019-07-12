import React from 'react'
import {connect} from 'react-redux'

import {onGetNewBooks} from '../actions/index'
import Carousel from './Carousel'

class Content extends React.Component {
    componentDidMount() {
        this.props.onGetNewBooks()
    }
    
    renderNewBooks = () => {
        if (this.props.user.newbooks.length) {
            return this.props.user.newbooks.map(newbooksDetail => {
                const {
                    id,
                    cover,
                    category,
                    price,
                    title,
                    writer
                } = newbooksDetail

                return (
                    <div className='col-2 text-left'>
                        <button className='btn p-3' onClick={this.toggle}>
                            <div className='row'>
                                <div className='col-12'>
                                    <img src={`http://localhost:9000/getBooks/${cover}`} style={{width: '130px'}}/>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-12 text-center'>
                                    <h6 className='text-dark' style={{fontWeight: 'bold'}}>{title}</h6>
                                </div>
                            </div>
                        </button>
                    </div>
                )
            })
        }
    }

    render() {
        console.log(this.props.user.newbooks);
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <Carousel />
                    </div>
                </div>
                {/* <div className='row mt-5' style={{borderBottom: '3px solid black'}}>
                        <div className='col-12'>
                            <h2 className='float-left'>New Arrivals</h2>
                        </div>
                </div>
                <div className='row mt-2'>
                    {this.renderNewBooks()}
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.auth }
}

export default connect (mapStateToProps, {onGetNewBooks})(Content)