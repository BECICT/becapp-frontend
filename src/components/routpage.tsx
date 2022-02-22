import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './about'
import Home from './home'
import Login from './login'
import Memberinfoform from './memberinfoform'
import Multiform from './multiform'
import NewMultiform from './newMultiform'
import Personal from './personal'
import Register from './register'
import Signup from './signup'

export default function Routpage() {
    
    return (
        <>
            <Switch>               
                    <Route exact path="/" component={Home} />    
                    <Route exact path="/about" component={About}/>  
                    <Route exact path="/register" component={Register}/>     
                    <Route exact path="/login" component={Login}/>          
                    <Route exact path="/signup" component={Signup}/>   
                    <Route exact path="/membershipform" component={Memberinfoform}/>                      
                    <Route exact path="/newmultiform" component={NewMultiform}/>                    
                    <Route exact path="/personal" component={Personal}/>

            </Switch>           
        </>
    )
}
