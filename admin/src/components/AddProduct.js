import React from 'react'
import {Modal, ModalBody, ModalFooter, Button} from 'reactstrap'
import axios from '../config/axios'

import bookIcon from '../icon/book.png'
import addIcon from '../icon/add.png'

class ImportProduct extends React.Component {
    state = {
        modal: false,
        categories: []
    }
    
    async componentDidMount() {
        await axios.get('/getCategory').then(res => {
            console.log(res.data)

            this.setState({categories: res.data})
        })
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    
    onSubmitNewBook = () => {
        const cover = this.bookCover.value
        const title = this.title.value
        const writer = this.writer.value
        const price = this.price.value
        const quantity = this.quantity.value
        const synopsis = this.synopsis.value

        console.log(cover, title, writer, price, quantity, synopsis)
    }

    renderCategoriesList = () => {
        if (this.state.categories.length !== 0) {
            return this.state.categories.map(categoryDetail => {
                const {
                    id, 
                    category
                } = categoryDetail

                return (
                    <option>{category}</option>
                )
            })
        }
    }

    render() {
        console.log(this.state.categories);
        
        return (
            <div>
                <button className='btn' onClick={this.toggle}>
                    <img src={addIcon} className='action-icon'/>
                </button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className='modal-inputAddress' size='lg'>
                    <ModalBody>
                        <div className='row text-center my-3'>
                            <div className='col-12'>
                                <h3>Add New Product</h3>
                            </div>
                        </div>
                        <div className='row mb-4'>
                            <div className='col-12 text-center'>
                                <img src={bookIcon} style={{width: '130px'}} className='mb-2'/>
                                <label className='brwsfile' hidden={this.state.isShowingAvatar}>
                                    Browse File
                                    <input type="file" size="60" ref={input => this.bookCover = input} onChange={this.chooseAvatar}/>
                                </label>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-3'></div>
                            <div className='col-6'>
                                <p className='mb-1 addressPoint '>Category</p>
                                <select class="form-control">
                                    {this.renderCategoriesList()}
                                </select>
                            </div>
                            <div className='col-3'></div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-6 pr-0'>
                                <p className='mb-1 addressPoint'>Book Title</p>
                                <input type='text' className='form-control inputAddressTag' ref={input => this.title = input} placeholder={this.props.recepient_name} required/>
                            </div>
                            <div className='col-6'>
                                <p className='mb-1 addressPoint'>Writer</p>
                                <input type='text' className='form-control mb-1 inputAddressTag' ref={input => this.writer = input} placeholder={this.props.phone} required/>
                                
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-6 pr-0'>
                                <p className='mb-1 addressPoint'>Price</p>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" >$</span>
                                    </div>
                                    <input type="number" class="form-control" aria-describedby="inputGroupPrepend3" ref={input => this.price = input} required />
                                </div>
                            </div>
                            <div className='col-6'>
                                <p className='mb-1 addressPoint'>Quantity</p>
                                <input type='number' className='form-control mb-1 inputAddressTag' min="0" max="100" step="1" ref={input => this.quantity = input} placeholder={this.props.phone} required/>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className='col-12'>
                                <p className='mb-1 addressPoint'>Synopsis</p>
                                <textarea className='form-control mb-1 inputAddressTag' rows="5" ref={input => this.synopsis = input} placeholder={this.props.address} required/>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-outline-dark' onClick={this.toggle}>Cancel</button>{' '}
                        <button className='btn btn-dark' onClick={this.onSubmitNewBook}>Save</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ImportProduct