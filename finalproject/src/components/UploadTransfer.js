import React from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'

import invoice from '../img/invoice.png'

class UploadTransfer extends React.Component {
    state = {
        modal: false
    }
    
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <button className='btn btn-outline-secondary btn-upload-trf mt-4' style={{width: '100%', height: '35%'}} onClick={this.toggle}>
                    <p className='mb-1'>Upload</p> 
                    <p className='mb-0'>Transfer Receipt</p>
                </button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        <div className='row mt-3'>
                            <div className='col-12 text-center'>
                                <h3>Upload Transfer Receipt</h3>
                            </div>
                        </div>
                        <div className='row mx-3 mt-3'>
                            <div className='col-12 pl-0'>
                                Make sure your transfer receipt has :
                            </div>
                        </div>
                        <div className='row mx-3 mt-1'>
                            <div className='col-6 p-1'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <p style={{fontWeight: 'bolder', fontStyle: 'italic'}} className='mb-1'>Date/Time of Transfer</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <p style={{fontWeight: 'bolder', fontStyle: 'italic'}} className='mb-1'>Success Status</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <p style={{fontWeight: 'bolder', fontStyle: 'italic'}} className='mb-1'>Bank Account</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <p style={{fontWeight: 'bolder', fontStyle: 'italic'}} className='mb-1'>Total Transfer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row border mx-3 mt-3 mb-3 text-center upload-area'>
                            <div className='col-12'>
                                <div className='row mt-3'>
                                    <div className='col-12'>
                                        <img src={invoice} style={{width: '170px'}}/>
                                    </div>
                                </div>
                                <div className='row mt-3 mb-3'>
                                    <div className='col-12'>
                                        <label className='brwsfile' hidden={this.state.isShowingAvatar} style={{width: '70%'}}>
                                            Browse File
                                            <input type="file" size="60" ref={input => this.bookCover = input} onChange={this.chooseBookCover}/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default UploadTransfer