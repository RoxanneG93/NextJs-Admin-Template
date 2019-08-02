
// import Head from 'next/head'
// import Navbar from '../components/layout/Navbar';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import '../assets/vendor/@fortawesome/fontawesome-free/css/fontawesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

// NOTE this example only shows how to use the solid free icons.
import {  faChartBar, faChartPie, faUsers, faPercent, } from '@fortawesome/free-solid-svg-icons'
library.add(faChartBar, faChartPie, faUsers, faPercent, );

import styles from '../styles/main.scss';
import Sidebar from "../components/Sidebar/Sidebar.jsx";


import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Collapse,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    
    Row,
    Col
  } from "reactstrap";


import React from 'react'
import App, { Container } from 'next/app';


class Layout extends React.Component {
    render() {
        const { children } = this.props
        return <div className="container-fluid">
            <Row>
                <div className="col-xs-12 col-sm-2 col-md-2">
                  <Sidebar />  
                </div>
                <div className="col-xs-12 col-sm-10 col-md-10">
                        {children}
                </div>
            </Row>
        </div>
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