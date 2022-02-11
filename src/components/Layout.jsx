import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = props => {

    return (
        <div className="">
            <Header />
            <main className='main--dashboard'>
                {props.children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;