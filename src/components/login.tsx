import axios from 'axios';
import { type } from 'os'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Login({setToken}:any) {  
const [state, setState] = useState({Message:"", Showmessage:false})
// const [userexist, setuserexist] = useState();
// let userStr = localStorage.getItem("auth");
// const b = JSON.parse(useState)
// console.log(b)
// const b = {Bearer, ...useState}
// const option = {Bearer: userStr.Bearer}
const url = 'https://becregister.herokuapp.com/api/'
const history = useHistory();
    type initials = {
      email: "",
      password: ""
    }
    // console.log("Bearer: " + response.data)

    const { register, handleSubmit, formState: {errors}} = useForm<initials>();
    const onSubmit: SubmitHandler<initials> = data => {
      axios.post( url + 'auth/login', data)
          .then(response => {
            storage(response.data.token, response.data.role, response.data.userId, response.data.email  )
            const userexist = loggedinUserId(response.data.userId, response.data.token)
            console.log(userexist);
          })        
          .catch(error => {
            if (error) {
              setState({ Message: "Invalid email or password!!!",  Showmessage:true});
            }
              
        })
        }

    const storage = (token: string, role: string, userId: string, email: string) =>{
      // const authString = {
      //   Bearer: token,
      //   Authorized: 1,
      //   Role: role,
      //   UserEmail: email,
      //   UserId: userId
      // }
      localStorage.setItem("Bearer", token)
      localStorage.setItem("Role", role)
      localStorage.setItem("UserEmail", email)
      localStorage.setItem("UserId", userId)
      localStorage.setItem("Authorised", JSON.stringify(1))

      setToken = window.localStorage.getItem('Authorised')
      // window.location.reload()
      // history.push("/")
      
    }

    const loggedinUserId = (userId: string, token: string) =>{
      const options = { Authorization: 'Bearer ' + token }
      axios.get(url + 'member/creator/contact/' + userId, {headers: options })
      .then(res => 
        {
          if (!res.data.Id) {
            history.push("/newmultiform")
          }else{
            history.push("/")
          }
        })
        .catch(error => {
        if (error) {
          setState({ Message: "Error while confirming user info",  Showmessage:true});

    }})}

    const goSingup = () => {
      history.push("/signup")
    }

    return (
      <>
      <br /><br /><br /> <br /><br /><br />
        <section className="registration">
          <div className="container-fuild p-0">
            <div className="row">
              <div className="col-lg-4 col-md-12 p-0"></div>
              <div className="col-lg-4 col-md-12 p-0">
                <div className="registration-block bg-registration overlay-dark">
                  <div className="block">
                    <div className="title text-left">
                      <h3>
                        <span className="alternate">Signin</span>
                      </h3>      
                      <p><b className="alternate">{state.Showmessage ? state.Message : " "}</b>                      
                      </p>               
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="row">
                      <div className="col-md-12">
                        <input
                          {...register("email", {required: true})}
                          className="form-control main"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          {...register("password", {required: true})}
                          type="password"
                          className="form-control main"
                          placeholder="Password"
                        />
                      </div>
                    
                      <div className="col-12">
                        <button type="submit" className="btn btn-white-md">
                          SIGN IN
                        </button>
                      </div>
                    </form>
                    <div className='float-right'>
                    <button  onClick={goSingup}><b className="float-right">SIGN UP HERE</b></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 p-0"></div>
            </div>
          </div>
      

       
        </section>
        <br />
             </>
    );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}