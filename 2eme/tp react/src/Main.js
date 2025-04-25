import React from "react";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchUsers } from "./redux";



function Main() {
    
        const users= useSelector(state=>state.users);
        const loading =useSelector(state=>state.loading);
        const dispatch =useDispatch()
    
    useEffect(
        ()=>{dispatch(fetchUsers())}
        ,[]
    )




return(
    <div>
        <h1>Users :</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
                    {users.map((user) => {
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                        </tr>                    
                    })}
            </table>
    </div>
)


}
export default Main