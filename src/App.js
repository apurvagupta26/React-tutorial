import React,{useState} from 'react';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
const [usersList,setUsersList]=useState([]);

const addUserHandler=(uname,uage)=>{
  setUsersList((prevUsersList)=>{
    console.log([...prevUsersList,{name:uname,age:uage}]);
    return [...prevUsersList,{name:uname,age:uage,id:Math.random().toString()}];

  })
}

  return (
    <>
     <AddUsers onAddUser={addUserHandler}/>
     <UsersList users={usersList}/>
    </>
  );
}

export default App;
