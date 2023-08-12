import React from 'react'
import './UsersList.css'

const UserList = (props) => {
  return (
    <div className='users'>
    <ul>
       {props.users.map((user) =>(
        <li key={user.id}>{user.name} ({user.age} years old)</li>
       ))}
    </ul>
    </div>
  )
}

export default UserList