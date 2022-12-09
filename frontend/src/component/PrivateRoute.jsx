import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UseAuth from '../hooks/UseAuth'

function PrivateRoute() {

    const { auth } = UseAuth()

    if (auth === undefined) return 'loading....'

    return auth === true ? <Outlet/> : <Navigate to='/auth' />
}

export default PrivateRoute