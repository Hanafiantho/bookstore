import React from 'react'
import {Modal, ModalBody} from 'reactstrap'

class ShoppingDetail extends React.Component {
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
                <button className='btn btn-outline-secondary btn-upload-trf mt-2' style={{width: '100%', height: '35%'}} onClick={this.toggle}>
                    <p className='mb-1'>Shopping</p> 
                    <p className='mb-0'>Detail</p>
                </button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        <div className='row mt-3'>
                            <div className='col-12 text-center'>
                                <h4>Shopping Detail</h4>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default ShoppingDetail