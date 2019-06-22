import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import Navigation from './Navigation.js'
import ImportProduct from './AddProduct'
import AddCategory from './AddCategory'

import editIcon from '../icon/edit.png'
import deleteIcon from '../icon/delete.png'
import ringer from '../coverImg/thumbnail_ringer.png'

class ManageProducts extends React.Component {
    
    render() {
        if(this.props.admin.username) {
            return (
                <div className='container mt-5 px-0'>
                    <div className='d-flex flex-row'>
                        <div className='navbar-frame pt-0'>
                            <Navigation />
                        </div>
                        {/* <div className='col-1'></div> */}
                        <div className='px-3 content'>
                            <div className='row mb-4'>
                                <div className='col-12 text-left'>
                                    <h3 className='mt-3'>Products</h3>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className='col-12'>
                                    <div classname='container'>
                                        <div className='row'>
                                            <div className='col-3 text-left'>
                                                <AddCategory />
                                            </div>
                                            <div className='col-6'></div>
                                            <div className='col-3 text-right'>
                                                <ImportProduct />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Cover</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Writer</th>
                                                <th scope="col">Synopsis</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='pl-2'>
                                                    <img src={ringer} style={{width: '50px'}}/>
                                                </td>
                                                <td>Fiction</td>
                                                <td>Broken Things</td>
                                                <td>Lauren Oliver</td>
                                                <td>Everyone thinks Mia and Brynn killed their best friend. That driven by their obsession with a novel called The Way into Lovelorn the three girls had imagined themselves into the magical world where their fantasies became twisted, even deadly.</td>
                                                <td>$3.00</td>
                                                <td className='text-center'>50</td>
                                                <td>
                                                    <a href='#' className='mr-2'>
                                                        <img src={editIcon} className='action-icon'/> 
                                                    </a>
                                                    <a href='#'>
                                                        <img src={deleteIcon} className='action-icon'/> 
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

const mapStateToProps = (state) => {
    return { admin: state.auth }
}

export default connect(mapStateToProps)(ManageProducts)