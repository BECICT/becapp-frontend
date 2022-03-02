import axios from 'axios';
import { type } from 'os'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink, useHistory } from 'react-router-dom';

export default function Signup() {
    const [state, setState] = useState({Message:"", Showmessage:false})
    const history = useHistory();
    type initials = {
        fullname: "",
        email: "",
        password: "",
        confirmpassword: "",
        regCode: ""
      }

      const { register, handleSubmit, formState: {errors}} = useForm<initials>();
      const onSubmit: SubmitHandler<initials> = data => {
        axios.post('https://becregister.herokuapp.com/api/auth/signup', data)
            .then(response => {if(response.data){
                history.push("/login")
            }})        
            .catch(error => {
              if (error) {
                setState({ Message: "Faild to submit, please try again",  Showmessage:true});
              }
                
          })
          }   
  

    return (
        <>
        <br /><br /><br /> <br />
             <section className="registration">
          <div className="container-fuild p-0">
            <div className="row">
              <div className="col-lg-4 col-md-12 p-0"></div>
              <div className="col-lg-4 col-md-12 p-0">
                <div className="registration-block bg-registration overlay-dark">
                  <div className="block">
                    <div className="title text-left">
                      <h3>
                        <span className="alternate">Signup</span>
                      </h3>      
                      <p><b className="alternate">{state.Showmessage ? state.Message : " "}</b>                      
                      </p>               
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="row">
                    <div className="col-md-12">
                        <input
                          {...register("regCode", {required: true})}
                          className="form-control main"
                          placeholder="RegistrationCode"
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          {...register("fullname", {required: true})}
                          className="form-control main"
                          placeholder="Fulname"
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          {...register("email", {required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}
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
                      <div className="col-md-12">
                        <input
                          {...register("confirmpassword", {required: true})}
                          type="password"
                          className="form-control main"
                          placeholder="Confirm Password"
                        />
                      </div>
                    
                      <div className="col-12">
                        <button type="submit" className="btn btn-white-md">
                          SIGNUP
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 p-0"></div>
            </div>
          </div>
      

       
        </section>
        </>
    )
}
