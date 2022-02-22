import axios from 'axios';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export default function Multiform() {
    const [page, setPage] =  useState(0);
    const [btnvisible, setbtnvisible] = useState(true)
    const [newbirth, setnewbirth] = useState(false);
    const history = useHistory();
    // type initials = {    
    //     tagNo:"",
    //     photoUrl: "",
    //     title: "",
    //     surname: "",
    //     firstname: "",
    //     othername: "",
    //     birthdate: "",
    //     gender: "",
    //     maritalstatus: "",
    //     nextofkin: "",
    //     phoneNoOfNextOfKin: "",
    //     membershipStatus: "",
    //     subunitId: "",
    
    //     address1: "",
    //     address2:"",
    //     PrimaryPhoneNo: "",
    //     otherPhonenumber: "",
    //     email:"",
    
    //     dateOfNewBirth: "",
    //     placeOfNewBirth: "",
    //     dateJoinedChurch: "",
    //     wofbistatus: "",
    //     waterBaptizim: false,
    //     dateOfWaterBaptizim: "",
    //     holyGhostBaptisim: false,
    //     dateOfHolyGhostBaptizim: "",
    //     wsfstatus: "",
    //     area: "",
    //     district: "",
    //     zone: "",
    
    //     employmentStatus: "",
    //     officeAddress: "",
    //     profession: "",
    
    //     educationalQualification: "",
    //     student: "",
    //     nameOfSchool: "",
    //     level: ""
    //   }

    const { register, handleSubmit, formState: {errors}} = useForm();

    console.log(errors);
    
    const onSubmit = (data: any)  => {
      axios.post('http://localhost:3330/api/auth/signup', data)
          .then(response => {if(response.data){
              history.push("/login")
          }})        
          .catch(error => {
            if (error) {
             // setState({ Message: "Faild to submit, please try again",  Showmessage:true});
            }
              
        })
    alert("TEST")
        } 

        const pageTitles = ["Personal Info", "Profile", "Contact", "Employment" ]

 
  return <>
       <section className="section contact-form">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="section-title">
          <h3>{pageTitles[page]} <span className="alternate"></span></h3>
          <p>Please ensure the information passed here are true and correct.</p>
        </div>
      </div>
    </div>
   {/* Pass template here */}
   <form  onSubmit={handleSubmit(onSubmit)} className="row">
   {/* {loadPages()} */}
   {page === 0 && (<section>
    <div className="col-md-6">
          <input
            {...register("tagNo", { required: "tag no is requird" })}
            className="form-control main"
            placeholder="Tag Number"            
          />
        </div>
        <div className="col-md-6">
          <input
            {...register("title", { required: "please select a title" })}
            className="form-control main"
            //dropdown
            placeholder="Title"
          />
        </div>
        <div className="col-md-6">
          <input
            {...register("surname", { required: "surname is reqired" })}
            className="form-control main"
            placeholder="Surname"
          />
          {errors.surname && (
            <span className="alternate">The Surnmae field is required</span>
          )}
        </div>
        <div className="col-md-6">
          <input
            {...register("firstname", {
              required: "first name field is required",
            })}
            className="form-control main"
            placeholder="First Name"
          />
          {errors.firstname && (
            <span className="alternate">The First Name field is required</span>
          )}
        </div>
        <div className="col-md-6">
          <input
            {...register("othername", { required: true })}
            className="form-control main"
            placeholder="Other Name"
          />
          {errors.othername && (
            <span className="alternate">The othername field is required</span>
          )}
        </div>
        <div className="col-md-6">
          <input
            {...register("birthdate", { required: true })}
            type={`${newbirth === true ? "date" : "text"}`} onFocus={() => setnewbirth(true)}
            className="form-control main"
            placeholder="Date of Birth"
          />
          {errors.birthdate && (
            <span className="alternate">The birthdate field is required</span>
          )}
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <select
              className="form-control main"
              {...register("gender", { required: "gender is reqired" })}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          {errors.gender && (
            <span className="alternate">The Surnmae field is required</span>
          )}
        </div>
        <div className="col-md-6">
          <input
            {...register("maritalstatus", {
              required: "maritalstatus field is required",
            })}
            className="form-control main"
            placeholder="Marital Status"
          />
          {errors.maritalstatus && (
            <span className="alternate">
              The maritalstatus field is required
            </span>
          )}
        </div>
        <div className="col-md-6">
          <input
            {...register("nextofkin", {
              required: "next of kin field is required",
            })}
            className="form-control main"
            placeholder="Next of Kin"
          />
          {errors.nextofkin && (
            <span className="alternate">The next of kin field is required</span>
          )}
        </div>
        <div className="col-md-6">
          <input
            {...register("phoneNoOfNextOfKin", {
              required: "phone No of Next of Kin field is required",
              pattern:
                /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm,
            })}
            className="form-control main"
            placeholder="Phone no of Next of Kin "
          />
          {errors.phoneNoOfNextOfKin && (
            <span className="alternate">
              The phoneNoOfNextOfKin field is required
            </span>
          )}
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <select
              className="form-control main"
              {...register("membershipStatus", {
                required: "membershipStatus is reqired",
              })}
            >
              <option value=""> Membership Status</option>
              <option value="Active">Active</option>
              <option value="Probation">Probation</option>
              <option value="NonActive">NonActive</option>
              <option value="Deactivated">Deactivated</option>
            </select>
          </div>
          {errors.membershipStatus && (
            <span className="alternate">
              The membershipStatus field is required
            </span>
          )}
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <select
              className="form-control main"
              {...register("subunitId", { required: "subunitId is reqired" })}
            >
              <option value="">Select FROMDB</option>
              <option value="Male">FROMDB</option>
              <option value="Female">FROMDB</option>
            </select>
          </div>
          {errors.subunitId && (
            <span className="alternate">
              The subunitsubunitId field is required
            </span>
          )}
        </div>
        </section>)}
        {page === 1 && (<section>
        <div className="col-md-6">
          <input
            {...register("email", { required: true })}
            className="form-control main"
            placeholder="email"
           
          />
          {errors.email && (
            <span className="alternate">This field is required</span>
          )}
        </div>
        </section>)}
        {page === 2 && (<section> 
           
        </section>)}
   </form>
   <div className="col-12 text-center">
          <button disabled={page === 0} 
          onClick={() => {setPage((currentpage) => currentpage - 1); setbtnvisible(true)}} type='button'  className="btn btn-main-md">
            Prev
          </button>&nbsp;
         
          {btnvisible ? <button         
          onClick={() => {
            if (page === pageTitles.length - 1) {            
                setbtnvisible(false)
            }else{
            setPage((currentpage) => currentpage + 1)}} } type='button'
          className="btn btn-main-md">
            Next
          </button>
          :
          <button         
          type='submit'
          className="btn btn-main-md">
           Submit
          </button>}
        </div>
  </div>
</section>

  </>;
}
