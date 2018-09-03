import React from 'react';
import Router from 'next/router';
import Modal from '../components/modal';
import Layout from '../components/Layout';

export default class extends React.Component {
  static getInitialProps () {
    return {
      photos: new Array(15).fill(0).map((v, k) => k + 1)
    }
  }

  constructor (props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this);
    this.state = {
      gallery: []
    }
  }

  // handling escape close
  componentDidMount () {
    // axios.get('https://res.cloudinary.com/dj6ppswvb/image/list/b.json')
    // 			.then(res => {
    // 				//    console.log(res.data.resources[0].public_id);
    // 				this.setState({
    // 					gallery: res.data.resources
    // 				});
    // 			});
    // document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount () {
    // document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown (e) {
    if (!this.props.url.query.photoId) return
    if (e.keyCode === 27) {
      this.props.url.back()
    }
  }

  dismissModal () {
    Router.push('/')
  }

  showPhoto (e, id) {
    e.preventDefault()
    Router.push(`/?photoId=${id}`, `/photo?id=${id}`)
  }

  // getImageUrl = () => {
  //    let gal = this.state.gallery;
  //    let newArray = gal.map(imag => {
  //    	return (`http://res.cloudinary.com/dj6ppswvb/image/upload/` + imag.public_id)
  //    });
  // }


  render () {
    const { url, photos } = this.props;
    return (
      <Layout>
      <div className='list'>
        {
          url.query.photoId &&
            <Modal
              id={url.query.photoId}
              onDismiss={() => this.dismissModal()}
            />
        }
        {
          photos.map((id) => (
            <div key={id} className='photo'>
              <a
                className='photoLink'
                href={`/photo?id=${id}`}
                onClick={(e) => this.showPhoto(e, id)}
              >
                {id}
              </a>
            </div>
          ))
        }
        <style jsx>{`
          .list {
            padding: 50px;
            text-align: center;
          }

          .photo {
            display: inline-block;
          }

          .photoLink {
            color: #333;
            verticalAlign: middle;
            cursor: pointer;
            background: #eee;
            display: inline-block;
            width: 250px;
            height: 250px;
            line-height: 250px;
            margin: 10px;
            border: 2px solid transparent;
          }

          .photoLink:hover {
            borderColor: blue;
          }
        `}</style>
      </div>
      </Layout>
    )
  }
}
