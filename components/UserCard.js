import React from 'react'

function UserCard({user}) {

    const {image,name,isOnline} = user;

    const deleteUser = async () => {
        let url = 'https://6624556e04457d4aaf9c1522.mockapi.io/users/'
        let response = await axios.delete(`${url}/${user.id}`)
    }

  return (
    <div onClick={deleteUser} className='userCard'>
        <img className='userPic' src={user.image} alt="" />
        <h4>{user.name} {user.isOnline ? `🟢` : `🔴`}</h4>
    </div>
  )
}

export default UserCard