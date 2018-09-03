import { Component } from 'react';
import NextHead from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import Layout from '../components/Layout';

class App extends Component {

  render() {
    return (
      <Layout>
      <div className='container'>
        <style  jsx>{`

            .header {
              padding: 16px 16px;
              position: relative;
              z-index: 10;
              display: flex;
              height: 100vh;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .title {
              color: #fff;
              font-family: 'Roboto';
              text-align: center;
              margin: 30px auto;
              font-weight: 300;
              text-transform: uppercase;
              font-size: 42px;
              letter-spacing: 7px;
            }
            .title span {
              display: block;
              text-align: center;
              text-transform: uppercase;
              font-weight: 300;
              margin-top: 15px;
              font-size: 36px;
            }
            .logo {
              max-width: 250px;
              width: 100%;
              display: block;
              margin: 50px auto;
            }
        `}</style>

        <div className='header'>
            <img className='logo' src={'./static/assets/images/goran-matejin-logo.svg'} />
          <h1 className='title'>Goran Matejin <span>Photography</span></h1>
        </div>
      </div>
      </Layout>
    );
  };
}

export default App;
