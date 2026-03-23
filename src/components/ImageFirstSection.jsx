import React from 'react'
import RectangularCard from './RectangularCard'

const ImageFirstSection = ({ title, description, rectangleText, image, bgColor = 'white' }) => {
  return (
    <>
      <section className='text-first sections' style={{backgroundColor: bgColor}}>
        <div className='img-part'>
          <div style={{backgroundImage: `url(${image})`}} className='img-con'></div>
        </div>
        <div className='text-part'>
          <h1>{title}</h1>
          <p>{description}</p>
          <RectangularCard rectangleText={rectangleText} />
        </div>
      </section>
    </>
  )
}

export default ImageFirstSection