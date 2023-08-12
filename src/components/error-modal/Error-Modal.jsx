import React from 'react'
import Button from '../button/Button'
import './ErrorModal.css'

const Errormodal = (props) => {
  return (
    <div>
    <div className='backdrop' onClick= {props.clearError}>
    <div className='modal' >
        <header className='header'>
            <h2> {props.title}   </h2>
        </header>
        <div className='content'>
            <p> {props.message}</p>
        </div>
        <footer className='actions'>
        <Button  onClick = {props.clearError} >Okay</Button>
        </footer>
    </div>
    </div>
    </div>
  )
}

export default Errormodal