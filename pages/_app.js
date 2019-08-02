
// import Head from 'next/head'
// import Navbar from '../components/layout/Navbar';

//import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/main.scss';


import React from 'react'
import App, { Container } from 'next/app'

class Layout extends React.Component {
    render() {
        const { children } = this.props
        return <div className='layout'>{children}</div>
    }
}

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Layout styles={styles}>
                    <Component {...pageProps} />
                </Layout>
            </Container>
        )
    }
}