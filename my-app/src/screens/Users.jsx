import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/Card"

const Users = () => {

 const [users, setUsers] = useState([])

 const fetchUsers = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await res.json()
   setUsers(data)
 }

 useEffect(()=> {
  fetchUsers()
 },[])


 return(
  <>
      <div className="users">
        <h1>Users</h1>
        <div className="users-list">
          {users?.map(user => {
            return(
              <Card user={user} key={user.id}/>
            )
          })
          }
        </div>

      </div>
  </>

 )
}

export default Users;