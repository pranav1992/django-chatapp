import React from 'react'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setSearchUser } from '../../../redux/slices/userSlice';

function UserSearchedCard({user, }) {
 const dispatch = useDispatch();
  return (
    <Link to={"/"+user?.id} onClick={()=>dispatch(setSearchUser())} className='flex items-center gap-4 p-3 lg:p-4 border border-transparent border-b-slate-200 hover:border-primary rounded cursor-pointer'>
      <div>
        <Avatar width={40} height={40} name = {user?.username} userId={user?.id} imageUrl={""}/>
      </div>
      <div>
        <div className='font-bold text-ellipsis line-clamp-1'>
          {user.username}
        </div>
        <p className='text-sm text-ellipsis line-clamp-1'> {user?.email} </p>
      </div>
    </Link>
  )
}
export default UserSearchedCard
