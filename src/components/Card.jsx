import React from 'react'
import '../App.css'

const Card = (props) => {
  return (
    <>
      <div className='yellow-card'>
        <div className="purple-card">
          <h2>{props.cardTitle}</h2>
          <p>{props.cardText}</p>
        </div>
      </div>
    </>
  )
}

export default Card