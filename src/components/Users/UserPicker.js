import React, { useState,useEffect,useContext } from "react";
import Spinner from '../UI/Spinner';
import  { useUser } from "./UserContext";
import { UserSetContext } from "./UserContext";
export default function UserPicker () {
  const [users,setUsers]=useState(null);
  const [user,setUser]=useUser();


  useEffect(()=>{
    async function getUsers(url){
         const resp=await fetch(url)
         const data=await resp.json()
         setUsers(data)
         setUser(data[0])
    }
    getUsers('http://localhost:3002/users')
  },[setUser])

  function handleSelect(e){
       console.log('handleSelect',e);
       const selectID=parseInt(e.target.value,10);
       const selectdUser=users.find(u=>u.id===selectID);
       setUser(selectdUser)
  }

  if(users===null){
    return <Spinner />
  }
  return (
    <select onChange={handleSelect}>
      {users.map(u=>(
        <option key={u.id} value={u.id} >{u.name}</option>
      ))}
    </select>
  );
}