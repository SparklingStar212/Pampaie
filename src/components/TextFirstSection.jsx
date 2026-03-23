import React from 'react'
import RectangularCard from './RectangularCard'

const TextFirstSection = ({ title, description, rectangleText, image, bgColor = 'rgb(240, 240, 255)' }) => {
  return (
    <>
      <section className='text-first sections' style={{backgroundColor: bgColor}}>
        <div className='text-part'>
          <h1>{title}</h1>
          <p>{description}</p>
          <RectangularCard rectangleText={rectangleText} />
        </div>
        <div className='img-part'>
          <div style={{backgroundImage: `url(${image})`}} className='img-con'></div>
        </div>
      </section>
    </>
  )
}

export default TextFirstSection