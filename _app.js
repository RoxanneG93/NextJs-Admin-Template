import React from 'react';
import App, { Container } from 'next/app';
import Navbar from './components/layout/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';


class Layout extends React.Component {
    render () {
      const { children } = this.props
      return (
          <div className='layout'>
              <nav className="test">test</nav>
               {children}
        </div>
      )
        
     
    }
}

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
        
    }


    render() {
        return (
            <Container>
                {/* TEST from app file */}
                {/* <Navbar /> */}
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Container>
        )
    }
}

export default MyApp;  
