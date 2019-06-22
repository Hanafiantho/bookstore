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
            <div className='container main-container border-bottom-1'>
                <div className='mb-2'>
                    <TopHeader />
                </div>
                <div className='row'>
                {/* navbar */}
                    <div className='col-2 p-0'>
                        <Header />
                    </div>
                {/* slide image */}
                    <div className='col-10'>
                        <Content />
                    </div>
                </div>

                {/* Footer */}
                <div className='mt-1'>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Home