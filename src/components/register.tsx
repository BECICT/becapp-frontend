import axios from 'axios';
import { type } from 'os';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
// import { useMutation } from 'react-query';

type inpute  = {
    surName: "",
    otherName: "",
    email: "",
    phoneNumber: ""
}
export default function Register() {
    const initMessage = {text: "Please ensure that the phone number and email are correct, we will call or send you a mail once we start conducting interview", showMessage: true}
    const [state, setState] = useState({Message:"", Showmessage:false});
    const {register, handleSubmit, watch, reset, formState:{errors}} = useForm<inpute>();
    const onSubmit: SubmitHandler<inpute> = data => {
    axios.post('http://localhost:3330/api/utility/reg', data)
        .then(response => 
          {setState({Message: "Your information have been saved, we will contact you for interview", Showmessage:true});          
        })        
        .catch(error => {
            setState({ Message: error.message,  Showmessage:true});
            console.error('There was an error!', error);
        })
      }

   
    return (
        <>
        <br/><br/><br/><br/>
        <section className="registration">
          <div className="container-fuild p-0">
            <div className="row">
            <div className="col-lg-4 col-md-12 "></div>
              <div className="col-lg-4 col-md-12 ">
                <div className="registration-block bg-registration overlay-dark">
                  <div className="block">
                    <div className="title text-left">
                      <h3>
                        Register <span className="alternate"></span>
                      </h3>
                      <p>
                        {!state.Showmessage ? initMessage.text : " "}
                      </p>
                      <p className="alternate"><b>{state.Showmessage ? state.Message : " "}</b>                      
                      </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="row">
                      <div className="col-md-6">
                        <input
                          {...register("surName", {required: true})}
                          className="form-control main"
                          placeholder="SurName"
                        />
                        {errors.surName && <span className="alternate">The surname field is required</span>}
                      </div>
                      <div className="col-md-6">
                        <input
                          {...register("otherName", {required: true})}
                          className="form-control main"
                          placeholder="Other Name"
                        />
                        {errors.otherName && <span className="alternate">The otherName field is required</span>}
                      </div>
                      <div className="col-md-6">
                        <input
                          {...register("email", {required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}
                          className="form-control main"
                          placeholder="Email"
                        />
                        {errors.email && <span className="alternate">The email field is required</span>}
                      </div>
                      <div className="col-md-6">
                        <input
                          {...register("phoneNumber", {required: true, pattern: /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm})}
                          className="form-control main"
                          placeholder="Phone"
                        />
                        {errors.phoneNumber && <span className="alternate">The Phone number field is required</span>}
                      </div>
                      
                      <div className="col-12">
                        <button type="submit" className="btn btn-white-md">
                          Register Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 "></div>
            </div>
          </div>
        </section>
        </>
    )
}

