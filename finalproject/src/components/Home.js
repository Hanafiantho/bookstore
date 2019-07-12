import React from 'react'

// Import Component
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import TopHeader from './TopHeader'

class Home extends React.Component{
    componentDidMount(){
        document.title = 'Bookstore | Home'
    }

    render() {
        return (
            <div className='container main-container border-bottom-1 p-5'>
                <div className='mb-2'>
                    <TopHeader />
                </div>
                <div className='row'>
                    <div className='col-2 p-0'>
                        <Header />
                    </div>
                    <div className='col-10'>
                        <Content />
                    </div>
                </div>
                <div className='mt-4'>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Home