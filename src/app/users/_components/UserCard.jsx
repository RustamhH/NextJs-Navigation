import Link from 'next/link'
import React from 'react'

const UserCard = ({user}) => {
  return (
    <Link href={`users/${user.id}`}>
        <div className='p-10 border border-gray-200 rounded-lg'>
            <p>
                {user.name}
            </p>
            
            <p>
                {user.email}
            </p>
            <p>
                {user.phone}
            </p>

        </div>
    </Link>
  )
}

export default UserCard