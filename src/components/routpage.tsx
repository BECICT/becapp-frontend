import React, { useEffect, useState } from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import ProtectedRoute, { ProtectedRouteProps } from '../utilis/auth'
import About from './about'
import Home from './home'
import Login from './login'
// import Memberinfoform from './memberinfoform'
// import Multiform from './multiform'
import NewMultiform from './newMultiform'
import Personal from './personal'
import Register from './register'
import Signup from './signup'

export default function Routpage() {
    const[user, setUser] = useState<any>(null)

    useEffect(() => {
      const au = localStorage.getItem('Authorised');
      au === '1' ? setUser(true) : setUser(false)
    }, [])
    

    // const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    //     isAuthenticated: user,
    //     authenticationPath: '/login',
    //   };


    
    return (
        <>
            <Routes>   
                {user === false &&(
                    <><Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/register" element={<Register />} />                      
                    <Route path="/signup" element={<Signup />} />  
                    <Route path="/login" element={<Login setToken={function (...args: any[]) {
                              throw new Error('Function not implemented.')
                          } }/>}/>  

                    <Route path='*' element={<Navigate to={'/login'} />}></Route>
                    </> 
//  authenticate={() => setUser(true)}
                ) } {user === true && (
                      <>     
                        <Route path="/" element={<Home />} />                                
                        <Route path="/newmultiform" element={<NewMultiform />} />
                        <Route path="/personal/:id" element={<Personal />} />
                        
                        <Route path='*' element={<Navigate to={'/'} />}></Route>
                    </>
                )}           
                        
                   
            </Routes>           
        </>
    )
}
{/* <Route path="/newmultiform" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<NewMultiform />} />} />
                        <Route path="/personal:{id}" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Personal />} />} />
                        */}