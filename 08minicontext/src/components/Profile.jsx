import React from "react"
import UserContext from "../context/UserContext"
import { useContext } from "react"

function Profile() {

  const {user} = useContext(UserContext);

  if(!user) return <div>Please login</div>

  return (
    <div>
        <h1>Hello {user.username}</h1>
    </div>
  )
}

export default Profile
