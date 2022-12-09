import React from 'react'
import Login from '../component/auth/Login'
import Register from '../component/auth/Register'
import Layout from '../component/Layout'
import classes from './Auth.module.scss'

function Auth() {
  return (
   <Layout>
     <div className={classes.form_container}>
      <div className="row">
        <div className="col-md-6">
        <Login />
        </div>
        <div className="col-md-6">
        <Register />
        </div>
      </div>
      
      
     </div>
   </Layout>
  )
}

export default Auth