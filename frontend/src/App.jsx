import React from 'react'
import { Toaster } from 'react-hot-toast';
import { Routes,Route } from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';
import Auth from './pages/Auth';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';

function App() {
  return (
   <>
   <Toaster
   position='top-right'
   toastOptions={{
    style:{
      fontSize:'1.8rem'
    }
   }}
   ></Toaster>
   <Routes>
<Route element={<PrivateRoute/>}>
<Route path='/' element={<Home/>}/>
    <Route path='/edit-profile' element={<EditProfile/>}/>
</Route>
    <Route path="/auth" element={<Auth/>}/>
   </Routes>
   </>
  )
}

export default App;