import { type } from 'os';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import Contact from './subComponent/contact'
import Employment from './subComponent/employment'
import PersonalInfo from './subComponent/personalInfo'
import Profile from './subComponent/profile'
import Qualification from './subComponent/qualification'

type initials  = {
  otherPhonenumber : "",
  PrimaryPhoneNo:"",
  email: "",
}

export default function Memberinfoform() {
  const [page, setPage] =  useState(0);
  //const [bttntype, setbttntype] =  useState("");
  const [formData, setFormData] = useState({    
    tagNo:"",
    photoUrl: "",
    title: "",
    surname: "",
    firstname: "",
    othername: "",
    birthdate: "",
    gender: "",
    maritalstatus: "",
    nextofkin: "",
    phoneNoOfNextOfKin: "",
    membershipStatus: "",
    subunitId: "",

    address1: "",
    address2:"",
    PrimaryPhoneNo: "",
    otherPhonenumber: "",
    email:"",

    dateOfNewBirth: "",
    placeOfNewBirth: "",
    dateJoinedChurch: "",
    wofbistatus: "",
    waterBaptizim: false,
    dateOfWaterBaptizim: "",
    holyGhostBaptisim: false,
    dateOfHolyGhostBaptizim: "",
    wsfstatus: "",
    area: "",
    district: "",
    zone: "",

    employmentStatus: "",
    officeAddress: "",
    profession: "",

    educationalQualification: "",
    student: "",
    nameOfSchool: "",
    level: ""
  })
  const { handleSubmit, formState: {errors}} = useForm<initials>();
  // const onSubmit: SubmitHandler<initials> = data => {
  //   // axios.post('http://localhost:3330/api/auth/signup', data)
  //   //     .then(response => {if(response.data){
  //   //         history.push("/login")
  //   //     }})        
  //   //     .catch(error => {
  //   //       if (error) {
  //   //         setState({ Message: "Faild to submit, please try again",  Showmessage:true});
  //   //       }
            
  //   //   })
    
  //   alert("testing")

  //     }   

      const submitfunc = ()=>{
       alert("testing")
        //handleSubmit(onSubmit)
        console.log(formData)
      }


  const pageTitles = ["Personal Info", "Profile", "Contact", "Employment" ]

  const loadPages = () => {if (page === 0) {
    return <PersonalInfo formData={formData} setFormData={setFormData}/>
  }else if(page === 1){
    return <Profile formData={formData} setFormData={setFormData}/>
  }else if(page === 2){
    return<Contact formData={formData} setFormData={setFormData}/>
  }else if(page === 3){
    return <Employment formData={formData} setFormData={setFormData}/>
  }
}
    return (
        <>
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
   <form className="row">
   {loadPages()}
   </form>
   <div className="col-12 text-center">
          <button disabled={page == 0} 
          onClick={() => {setPage((currentpage) => currentpage - 1)}}  className="btn btn-main-md">
            Prev
          </button>&nbsp;
         
          <button         
          onClick={() => {
            if (page === pageTitles.length - 1) {                  
              submitfunc();  
            }else{
            setPage((currentpage) => currentpage + 1)}} }
          className="btn btn-main-md">
            {page === pageTitles.length - 1 ? "Submit": "Next" }
          </button>
        </div>
  </div>
</section>

        </>
    )
}
