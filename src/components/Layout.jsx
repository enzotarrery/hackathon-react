import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = props => {

    return <div className="">
        <Header />
        <main>
            <section className="">
                {props.children}
            </section>
        </main>
        <Footer />
    </div>
}

export default Layout