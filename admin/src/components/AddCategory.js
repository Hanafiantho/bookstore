import React from 'react'
import {Modal, ModalBody, ModalFooter} from 'reactstrap'
import {connect} from 'react-redux'

import {onAddCategory} from '../actions/index'

class AddCategory extends React.Component {
    state = {
        modal: false
    }
    
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    
    onSubmitNewCategory = async () => {
        const category = this.categoryName.value
        console.log(category);

        await this.props.onAddCategory(category)
        
        if(this.props.category.error === '') {
            this.toggle()
        } else {
            return null
        }
    }

    onAddCategoryError = () => {
        console.log(this.props.category.error);
        
        if(this.props.category.error !== ''){
            return (
                <div className="alert alert-danger">
                    {this.props.category.error}
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        console.log(this.props.category.error);
        
        return (
            <div>
                <button className='btn btn-dark' onClick={this.toggle}>Add A New Category</button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className='modal-inputAddress' size='sm'>
                    <ModalBody>
                        <div className='row my-3'>
                            <div className='col-12 text-center'>
                                <h3>Add New Category</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <p className='mb-1 addressPoint'>Category Name</p>
                                <input type='text' className='form-control inputAddressTag' ref={input => this.categoryName = input} required/>
                            </div>
                        </div>
                        <div className='row'>       
                            <div className='col-12'>
                                {this.onAddCategoryError()}
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-outline-dark' onClick={this.toggle}>Cancel</button>{' '}
                        <button className='btn btn-dark' onClick={this.onSubmitNewCategory}>Save</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {category: state.category}
}

export default connect(mapStateToProps, {onAddCategory})(AddCategory)