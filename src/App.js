import React, { useState } from 'react';
import Adduser from './components/add-user/add-user';
import UserList from './components/user-list/UserList';


function App() {
  const [usersList, setUsersList] = useState([])

  const handleUserAdd = (uName, uAge) =>{
    // console.log(name, age , "from the app")
    setUsersList((prevUserList) =>{
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString() }]
    })
  }

  return (
    <div>
  <Adduser onAddUser={handleUserAdd}/>
  <UserList users = {usersList} />
    </div>
  );
}

export default App;
