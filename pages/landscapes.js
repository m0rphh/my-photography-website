import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import Modal from '../components/modal';
import {
  CloudinaryContext,
  Transformation,
  Image
} from 'cloudinary-react';
import Layout from '../components/Layout';

export default class App extends React.Component {

  static async getInitialProps() {
    let res = await axios.get('https://res.cloudinary.com/dj6ppswvb/image/list/b.json')
    let images = res.data.resources;
    return {
      images
    }
  }

  constructor(props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }


  // handling escape close
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown(e) {
    if (!this.props.url.query.photoId) return
    if (e.keyCode === 27) {
      this.props.url.back()
    }
  }

  dismissModal() {
    Router.push('/');
  }

  showPhoto(e, id) {
    e.preventDefault();
    Router.push(`/?photoId=${id}`, `/photo?id=${id}`)
  }

  render() {
    const { url, images } = this.props
    // console.log(images)
    return (
			<Layout title={'Goran Matejin - Landscapes'}>
        <div className='grid'>
          {
            url.query.photoId &&
            <Modal
              id={url.query.photoId}
              onDismiss={() => this.dismissModal()}
            />
          }

          <CloudinaryContext cloudName="dj6ppswvb">
            {
              images.map(data => {
                return (
                  <div className="responsive" key={data.public_id}>

                    <Link
                      href={(`/photo?id=${data.public_id}`)}
                      // onClick={(e) => this.showPhoto(e, data.public_id)}
                    >

                      <Image publicId={data.public_id}>
                        <Transformation

                          width='300'
                          crop="scale"
                        //  height="200"
                        //  dpr="auto"
                        //    responsive_placeholder="blank"
                        />
                      </Image>
                    </Link>
                  </div>
                )
              })
            }
          </CloudinaryContext>
					<style jsx>{`
					.responsive {
						cursor: pointer;
					}
          .list {
            padding: 50px;
            text-align: center;
          }
          .photo {
            display: flex;
						max-width: 1040px;
						width: 100%;
						margin: auto;
						justify-content: space-between;
						align-items: center;
          }
          .photoLink {
            color: #333;
            verticalAlign: middle;
            cursor: pointer;
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
