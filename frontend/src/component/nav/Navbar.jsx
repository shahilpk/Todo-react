import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import classes from './Navbar.module.scss'
import { FaUserAlt } from 'react-icons/fa'
import toast from 'react-hot-toast'

function Navbar() {
    const [user,setUser]=useState(null)
    const navigate= useNavigate()

    const getUser=async()=>{
        try{
            const {data}=await axios.get('/api/users/me')
            setUser(data)
        }catch(err){
console.log(err);
        }
    }
    useEffect(()=>{
        getUser()
    },[])

    const handleLogout=async()=>{
        try{
            await axios.get('/api/auth/logout')
            setUser(null)
            toast.success('User loged out')
            navigate('/auth')
        }catch(err){
           console.log(err);
        }
    }

    if (!user) return null
  return (
    <header style={{width:"100%",padding:"5px"}}>
        <div className={classes.userInfo} >
            <FaUserAlt className={classes.userIcon}></FaUserAlt>
          <div>
            <h1 className={classes.name} style={{color:'white'}}>{user.name}</h1>
            {/* <h1 className={classes.email}>{user.email}</h1> */}
            
          </div>
        </div>
        <nav>
            <button type='button' className={classes.logout} onClick={handleLogout}>logout</button>
        </nav>
    </header>
  )
}

export default Navbar