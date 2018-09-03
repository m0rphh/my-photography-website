import { Component } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

export default class App extends Component {

  static async getInitialProps() {
    let response = await axios.get('http://localhost:3000/api/posts');
    return { posts: response.data };
  }

  componentDidMount() {

  }
  render() {
    return (
      <Layout title={'Goran Matejin - Blog'}>
        <div className='container'>
          <style jsx>{`
             .header {
              padding: 16px 16px;
              position: relative;
              z-index: 10;
              display: flex;
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
            .content {
              padding: 16px 16px;
              background-color: #eee;
            }
            .post {
              margin-bottom: 16px;
            }
        `}</style>
          <div className='header'>
            <h1 className='title'>Goran Matejin<span> Photography</span></h1>
          </div>
          <div className='content'>
            {this.props.posts.map((post, i) => {
              return (
                <div className='post' key={i}>
                  <div className='row'>
                    <div className='col-12 col-md-4'>
                      <img className='img-fluid' src={post.image.secure_url} />
                    </div>
                    <div className='col-12 col-md-8'>
                      <h2>{post.title}</h2>
                      <div dangerouslySetInnerHTML={{ __html: post.content.brief }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  };
}


