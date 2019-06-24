import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import {connect} from 'react-redux'
import axios from '../config/axios.js'

class BookDetail extends React.Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    
    addProductToCart = () => {
        const user_id = this.props.user.id
        const book_id = this.props.id

        console.log(user_id, book_id)

        axios.get('/checkCart', {
            params : {
                book_id
            }
        }).then(res => {
            console.log(res.data);

            if (res.data.length === 0) {
                axios.post (`/addCart`, {
                    user_id,
                    book_id
                }).then(res => {
                    console.log(res);
                })
            } else {
                console.log('product sudah ada di cart');
                
            }
        })

        {this.toggle()}
    }

    render() {
        console.log(this.props.user)

        return (
            <div className='col-4 text-center mt-4'>
                <button className='btn btn-outline-secondary p-3' onClick={this.toggle}>
                    <div className='row'>
                        <div className='col-12'>
                            <img src={`http://localhost:9000/getBooks/${this.props.cover}`} style={{width: '200px'}}/>
                        </div>
                    </div><div className='row mt-2'>
                        <div className='col-12 text-center'>
                            <a href='#'><h6 className='text-dark' style={{fontWeight: 'bold'}}>{this.props.title}</h6></a>
                        </div>
                    </div>
                </button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size='lg' style={{width: '700px'}}>
                    <ModalHeader toggle={this.toggle} className='border-bottom-0'></ModalHeader>
                    <ModalBody>
                        <div className='row mb-5'>
                            <div className='col-6 text-center'>
                                <img src={`http://localhost:9000/getBooks/${this.props.cover}`} style={{width: '300px'}}/>
                            </div>
                            <div className='col-6 pl-0 pr-5'>
                                <h3 className='mt-2'>{this.props.title}</h3>
                                <p className='author mb-2'>{this.props.writer}</p>
                                <p>${this.props.price}</p>
                                <p className='mt-3 detailProduct'>
                                    {this.props.synopsis}
                                </p>
                                <div className='text-center'>
                                    <button className='btn btn-dark mt-3' onClick={this.addProductToCart}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {user: state.auth }
}

export default connect(mapStateToProps)(BookDetail)