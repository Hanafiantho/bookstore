import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import broken_things from '../img/thumbnail_broken_things.png'
import ringer from '../img/thumbnail_ringer.png'
import book_replica from '../img/book_replica.png'
import vanishing_girls from '../img/thumbnail_vanishing_girls.png'
import before_i_fall from '../img/thumbnail_before_i_fall.png'
import delirium from '../img/thumbnail_delirium.png'
import pandemonium from '../img/thumbnail_pandemonium.png'
import panic from '../img/thumbnail_panic.png'
import requiem from '../img/thumbnail_requiem.png'

class Books extends React.Component {
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
            <div className='container px-0'>
                <div className='row pl-3'>
                    <h4>All Books</h4>
                </div>
                <div className='row'>
                    <div className='col-4 text-center mt-4'>
                        <button className='btn btn-outline-secondary p-3' onClick={this.toggle}>
                            <div className='row'>
                                <div className='col-12'>
                                    <img src={broken_things} style={{width: '200px'}}/>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-12 text-center'>
                                    <a href='#'><h6 className='text-dark' style={{fontWeight: 'bold'}}>Broken Things</h6></a>
                                </div>
                            </div>
                        </button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size='lg' style={{width: '700px'}}>
                            <ModalHeader toggle={this.toggle} className='border-bottom-0'></ModalHeader>
                            <ModalBody>
                                <div className='row mb-5'>
                                    <div className='col-6 text-center'>
                                        <img src={broken_things} style={{width: '300px'}}/>
                                    </div>
                                    <div className='col-6 pl-0 pr-5'>
                                        <h3 className='mt-2'>Broken Things</h3>
                                        <p>$3.00</p>
                                        <p className='mt-3 detailProduct'>
                                            Everyone thinks Mia and Brynn killed their best friend. 
                                            That driven by their obsession with a novel called The Way into Lovelorn 
                                            the three girls had imagined themselves into the magical world where their 
                                            fantasies became twisted, even deadly.
                                        </p>
                                        <div className='text-center'>
                                            <button className='btn btn-dark mt-3'>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                        </Modal>
                    </div>
                    <div className='col-4 text-center mt-4'>
                        <button className='btn btn-outline-secondary p-3'>
                            <div className='row'>
                                <div className='col-12'>
                                    <img src={ringer} style={{width: '200px'}}/>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-12 text-center'>
                                    <a href='#'><h6 className='text-dark' style={{fontWeight: 'bold'}}>Ringer</h6></a>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className='col-4 text-center mt-4'>
                        <button className='btn btn-outline-secondary p-3'>
                            <div className='row'>
                                <div className='col-12'>
                                    <img src={book_replica} style={{width: '200px'}}/>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-12 text-center'>
                                    <a href='#'><h6 className='text-dark' style={{fontWeight: 'bold'}}>Book Replica</h6></a>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className='col-4 text-center mt-4'>
                        <button className='btn btn-outline-secondary p-3'>
                            <div className='row'>
                                <div className='col-12'>
                                    <img src={vanishing_girls} style={{width: '200px'}}/>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-12 text-center'>
                                    <a href='#'><h6 className='text-dark' style={{fontWeight: 'bold'}}>Vanishing Girls</h6></a>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className='col-4 text-center mt-4'>
                        <button className='btn btn-outline-secondary p-3'>
                            <div className='row'>
                                <div className='col-12'>
                                    <img src={before_i_fall} style={{width: '200px'}}/>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-12 text-center'>
                                    <a href='#'><h6 className='text-dark' style={{fontWeight: 'bold'}}>Before I Fall</h6></a>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className='col-4 text-center mt-4'>
                        <button className='btn btn-outline-secondary p-3'>
                            <div className='row'>
                                <div className='col-12'>
                                    <img src={delirium} style={{width: '200px'}}/>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-12 text-center'>
                                    <a href='#'><h6 className='text-dark' style={{fontWeight: 'bold'}}>Delirium</h6></a>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className='col-4 text-center mt-4'>
                        <button className='btn btn-outline-secondary p-3'>
                            <div className='row'>
                                <div className='col-12'>
                                    <img src={pandemonium} style={{width: '200px'}}/>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-12 text-center'>
                                    <a href='#'><h6 className='text-dark' style={{fontWeight: 'bold'}}>Pandemonium</h6></a>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className='col-4 text-center mt-4'>
                        <button className='btn btn-outline-secondary p-3'>
                            <div className='row'>
                                <div className='col-12'>
                                    <img src={panic} style={{width: '200px'}}/>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-12 text-center'>
                                    <a href='#'><h6 className='text-dark' style={{fontWeight: 'bold'}}>Panic</h6></a>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className='col-4 text-center mt-4'>
                        <button className='btn btn-outline-secondary p-3'>
                            <div className='row'>
                                <div className='col-12'>
                                    <img src={requiem} style={{width: '200px'}}/>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-12 text-center'>
                                    <a href='#'><h6 className='text-dark' style={{fontWeight: 'bold'}}>Requiem</h6></a>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Books