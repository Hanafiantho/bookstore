import React from 'react'
import {Modal, ModalBody, ModalFooter} from 'reactstrap'
import axios from '../config/axios'
import {connect} from 'react-redux'

import {onGetBooks} from '../actions/index'

import bookIcon from '../icon/book.png'
import addIcon from '../icon/add.png'

class ImportProduct extends React.Component {
    state = {
        modal: false,
        categories: [],
        previewCover: '',
        bookCover: null
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

    chooseBookCover = async () => {
        await this.setState({bookCover: this.bookCover.files[0]})
        console.log(this.state.bookCover);
        
        const previewCover = URL.createObjectURL(this.state.bookCover);
        console.log(previewCover);

        this.setState({previewCover : previewCover})
    }

    renderImg = () => {
        if (this.state.previewCover) {
            return <img src={this.state.previewCover} className=' mb-2 book-cover' />
        } else {
            return <img src={bookIcon} className='mb-2 book-cover'/>
        }
    }

    onSubmitNewBook = async () => {
        const cover = this.state.bookCover
        const categories = this.refs.categoryList.value
        const title = this.title.value
        const writer = this.writer.value
        const price = this.price.value
        const quantity = this.quantity.value
        const synopsis = this.synopsis.value

        // console.log(cover, category, title, writer, price, quantity, synopsis)
        const formData = new FormData()

        formData.append("cover", cover)
        formData.append("categories", categories)
        formData.append("title", title)
        formData.append("writer", writer)
        formData.append("price", price)
        formData.append("quantity", quantity)
        formData.append("synopsis", synopsis)
                
        await axios.post (`/addBook`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            console.log(res.data);

                    // dispatch({
                    //     type: "ADD_USER_AVATAR",
                    //     payload: {avatar}
                    // })
        })

        {this.props.onGetBooks()}

        this.setState({previewCover: ''})
        
        {this.toggle()}
    }

    renderCategoriesList = () => {
        if (this.state.categories.length !== 0) {
            return this.state.categories.map(categoryDetail => {
                const {
                    id, 
                    category
                } = categoryDetail

                return (
                    <option value={id}>{category}</option>
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
                                {this.renderImg()}
                                <label className='brwsfile' hidden={this.state.isShowingAvatar}>
                                    Browse File
                                    <input type="file" size="60" ref={input => this.bookCover = input} onChange={this.chooseBookCover}/>
                                </label>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-3'></div>
                            <div className='col-6'>
                                <p className='mb-1 addressPoint '>Category</p>
                                <select className="form-control" ref='categoryList'>
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

export default connect(null, {onGetBooks})(ImportProduct)