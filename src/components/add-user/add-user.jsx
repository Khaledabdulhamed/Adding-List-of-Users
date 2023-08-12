import React from 'react'
import './AddUser.css'
import Button from '../button/Button.jsx'
import { useState } from 'react'
import Errormodal from '../error-modal/Error-Modal'



const Adduser = (props) => {
  const [enteredUserName, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()

    const addUserHandler = (event) =>{
        event.preventDefault();
        if (enteredUserName.trim().length ===0 || enteredAge.trim().length===0){
          setError({
            title: "Invalid Input",
            message: "please enter a valid name and age(non empty values)",
          })
          return
        }
        if (+enteredAge < 1 ){ // the + sign is to convert the string to number
          setError({
            title: "Invalid Age",
            message: "please enter a valid age > 0 ",
          })
          return
        }
        console.log(enteredAge, enteredUserName)
        props.onAddUser(enteredUserName,enteredAge)
        setEnteredAge("")
        setEnteredUsername("")
    }

    const userNameChangeHandler = (event) =>{
      setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = (event) =>{
      setEnteredAge(event.target.value)
    }
    const errorHandler= () => {
      setError(null)
    }



  return (
    <div>
    {error && <Errormodal title={error.title} message={error.message} clearError= {errorHandler}/>}
    <div className='input'>
   <form onSubmit={addUserHandler}>
    <label htmlFor='username' >UserName:</label>
    <input id='username' type='text' onChange={userNameChangeHandler} value={enteredUserName} />
    <label htmlFor='age'>Age Years</label>
    <input id='age' type='number' onChange={ageChangeHandler} value={enteredAge}/>
    <Button type='submit'>Add user</Button>
   </form>
   </div>
   </div>
  )
}

export default Adduser