import React from 'react'
import classes from './card.css'
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}></div>
  )
}

export default Card