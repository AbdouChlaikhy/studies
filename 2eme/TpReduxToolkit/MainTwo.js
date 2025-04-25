import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUsers } from './redux';
import { useSelector } from 'react-redux';


function MainTwo() {
  const dispatch = useDispatch();
  const users = useSelector(state=>state.user.users);
  const loading = useSelector(state=>state.user.loading);
  useEffect(
    ()=>{
      dispatch(fetchUsers())
    },[]
  )

  return (
    <div>
      <h1>Users :</h1>
      {console.log(users)}
    </div>
  )
}

export default MainTwo