import React from 'react'

const Profilepage = () => {
  const Users = [
    { userID : 1, name: "Uthman", age: 31 },
    { userID: 2, name: "Virtue", age: 20 },
    { userID: 3, name: "Mody", age: 18 }
  ]
  return (
    <>
        {Users.map((user) => {
          console.log(user.userID)
        })}
    </>
  )
}

export default Profilepage