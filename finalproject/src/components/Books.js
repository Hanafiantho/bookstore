import React from 'react'

import BookDetail from './BookDetail'

class Books extends React.Component {

    renderBooks = () => {
        if (this.props.books.length !== 0) {
            return this.props.books.map(booksDetail => {
                const {
                    id, 
                    cover,
                    category,
                    title,
                    writer,
                    price,
                    quantity,
                    synopsis
                } = booksDetail

                return (
                        <BookDetail
                            id = {id}
                            writer = {writer}
                            cover = {cover}
                            title = {title}
                            price = {price}
                            synopsis = {synopsis}
                        />

                )
            })
        }
    }

    render() {
        console.log(this.props.books)
        
        return (
            <div className='container px-0'>
                <div className='row pl-3'>
                    <h4>All Books</h4>
                </div>
                <div className='row'>
                    {this.renderBooks()}
                </div>
            </div>
        )
    }
}

export default Books