import React from 'react'
import Link from 'next/link'
import Photo from '../components/frame'
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


export default ({ url: { query: { id } } }) => (
  <div className='permalink'>
    <Link href='/landscapes' >
    <p style={{ color: 'white', fontSize: 18, textAlign: 'left', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
    <ChevronLeftIcon style={{ color: 'white', fontSize: 34 }} />
    Back
  </p>
  </Link>
  <div className='wrap'>
    <Photo id={id} />

  </div>
  <style jsx>{`
      .permalink {
        padding: 100px;
        text-align: center;
      }

      .wrap {
        display: inline-block;
        border: 1px solid #999;
        margin: auto;
      }
    `}</style>
  </div >
)
