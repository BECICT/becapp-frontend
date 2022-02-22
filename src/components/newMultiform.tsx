import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewMultiform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
const url = 'http://localhost:3330/api/'
// const token = JSON.parse(window.localStorage.getItem("auth"))

  console.log(errors);

  const [page, setPage] = useState(0);
  const [btnvisible, setbtnvisible] = useState(true)
//----------------------------------------
  const [newbirth, setnewbirth] = useState(false);
  const [dateJoined, setdateJoined] = useState(false);
  const [Waterbaptisim, setWaterbaptisim] = useState(false);
  const [date, setDate] = useState(false);

//---------------------------------------


  const onSubmit = (data: any) =>{
    axios.post( url + 'utility/multiform', data).then(res => {
      console.log("DATA: " + res.data , "header: " + res.headers)
    })
  } //console.log("Street: "+JSON.stringify(data));
  const pageTitles = ["Personal Info", "Profile", "Contact", "Employment"];

  const prevBtn = () => {
   setPage((currentpage) => currentpage - 1); 
   setbtnvisible(true)
}
const nxtbtn = () =>{        
    if (page === pageTitles.length - 1) { 
      setbtnvisible(false)
    }else{
    setPage((currentpage) => currentpage + 1)}
}

  return (
    <>
      <section className="section contact-form">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h3>
                  {pageTitles[page]} <span className="alternate"></span>
                </h3>
                <p>
                  Please ensure the information passed here are true and
                  correct.
                </p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="row">
            {page === 0 && (
              <>
                {" "}
                <div className="col-md-4">
                  <input
                    {...register("tagNo", {
                      required: "this field is requird",
                    })}
                    className="form-control main"
                    placeholder="Tag Number"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    {...register("title", {
                      required: "this field is requird",
                    })}
                    className="form-control main"
                    //dropdown
                    placeholder="Title"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    {...register("surname", {
                      required: "this field is requird",
                    })}
                    className="form-control main"
                    placeholder="Surname"
                  />
                  {errors.surname && (
                    <span className="alternate">
                      The Surnmae field is required
                    </span>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    {...register("firstname", {
                      required: "this field is requird",
                    })}
                    className="form-control main"
                    placeholder="First Name"
                  />
                  {errors.firstname && (
                    <span className="alternate">
                      The First Name field is required
                    </span>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    {...register("othername", {
                      required: "this field is requird",
                    })}
                    className="form-control main"
                    placeholder="Other Name"
                  />
                  {errors.othername && (
                    <span className="alternate">
                      The othername field is required
                    </span>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    {...register("birthdate", {
                      required: "this field is requird",
                    })}
                      type={`${newbirth === true ? "date" : "text"}`} onFocus={() => setnewbirth(true)}
                    className="form-control main"
                    placeholder="Date of Birth"
                  />
                  {errors.birthdate && (
                    <span className="alternate">
                      The birthdate field is required
                    </span>
                  )}
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <select
                      className="form-control main"
                      {...register("gender", {
                        required: "this field is requird",
                      })}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  {errors.gender && (
                    <span className="alternate">
                      The Surnmae field is required
                    </span>
                  )}
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <select
                      className="form-control main"
                      {...register("maritalstatus", {
                        required: "this field is requird",
                      })}
                    >
                      <option value="">Marital Status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Widow/Widower">Widow/Widower</option>
                      <option value="Divoced">Divoced</option>
                    </select>
                  </div>
                  {errors.maritalstatus && (
                    <span className="alternate">
                      The Surnmae field is required
                    </span>
                  )}
                </div>            
                <div className="col-md-4">
                  <input
                    {...register("nextofkin", {
                      required: "this field is requird",
                    })}
                    className="form-control main"
                    placeholder="Next of Kin"
                  />
                  {errors.nextofkin && (
                    <span className="alternate">
                      The next of kin field is required
                    </span>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    {...register("phoneNoOfNextOfKin", {
                      required: "this field is requird",
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
                <div className="col-md-4">
                  <div className="form-group">
                    <select
                      className="form-control main"
                      {...register("membershipStatus", {
                        required: "this field is requird",
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
                <div className="col-md-4">
                  <div className="form-group">
                    <select
                      className="form-control main"
                      {...register("subunitId", {
                        required: "this field is requird",
                      })}
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
                </div>{" "}
              </>
            )}
            {page === 1 && (
              <>
                <div className="col-md-4">
                  <input
                    {...register("dateOfNewBirth", { required: true })}
                    type={`${date === true ? "date" : "text"}`}
                    onFocus={() => setDate(true)}
                    className="form-control main"
                    placeholder="Date of NewBirth"
                  />
                  {errors.dateOfNewBirth && (
                    <span className="alternate">
                      The birthdate field is required
                    </span>
                  )}
                </div>

                <div className="col-md-4">
                  <input
                    {...register("placeOfNewBirth", { required: true })}
                    className="form-control main"
                    placeholder="Place of new Birth"
                  />
                  {errors.placeOfNewBirth && (
                    <span className="alternate">This field is required</span>
                  )}
                </div>

                <div className="col-md-4">
                  <input
                    {...register("dateJoinedChurch", { required: true })}
                    type={`${dateJoined == true ? "date" : "text"}`}
                    onFocus={() => setdateJoined(true)}
                    className="form-control main"
                    placeholder="Date of when you joined this church"
                  />
                  {errors.dateJoinedChurch && (
                    <span className="alternate">This field is required</span>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    {...register("wofbistatus", { required: true })}
                    className="form-control main"
                    placeholder="WOFBI Status"
                  />
                  {errors.wofbistatus && (
                    <span className="alternate">This field is required</span>
                  )}
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <select
                      className="form-control main"
                      {...register("waterBaptizim", {
                        required: "this feild is reqired",
                      })}
                    >
                      <option value="">Are you Baptized in water</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  {errors.waterBaptizim && (
                    <span className="alternate">This field is required</span>
                  )}
                </div>

                <div className="col-md-4">
                  <input
                    {...register("dateOfWaterBaptizim", { required: true })}
                    type={`${Waterbaptisim == true ? "date" : "text"}`}
                    onFocus={() => setWaterbaptisim(true)}
                    className="form-control main"
                    placeholder="Date of Water Baptisim"
                  />
                  {errors.dateOfWaterBaptizim && (
                    <span className="alternate">
                      The birthdate field is required
                    </span>
                  )}
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <select
                      className="form-control main"
                      {...register("holyGhostBaptisim", {
                        required: "this feild is reqired",
                      })}
                    >
                      <option value="">
                        Are you Baptized in the HolyGhost
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  {errors.holyGhostBaptisim && (
                    <span className="alternate">This field is required</span>
                  )}
                </div>

                <div className="col-md-4">
                  <input
                    {...register("dateOfHolyGhostBaptizim", { required: true })}
                    // type={`${Holybaptisim === true ? "date" : "text"}`}
                    // onFocus={() => setHolybaptisim(true)}
                    className="form-control main"
                    placeholder="Date of  HolyGhost Baptisim"
                  />
                  {errors.dateOfHolyGhostBaptizim && (
                    <span className="alternate">This field is required</span>
                  )}
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <select
                      className="form-control main"
                      {...register("holyGhostBaptisim", {
                        required: "this feild is reqired",
                      })}
                    >
                      <option value="">WSF Status</option>
                      <option value="Location Provider">
                        Location Provider
                      </option>
                      <option value="Minister">Minister</option>
                      <option value="Ass.Minister">Ass.Minister</option>
                      <option value="Member">Member</option>
                    </select>
                  </div>
                  {errors.holyGhostBaptisim && (
                    <span className="alternate">This field is required</span>
                  )}
                </div>

                <div className="col-md-4">
                  <input
                    {...register("area", { required: true })}
                    className="form-control main"
                    placeholder="Area"
                  />
                  {errors.area && (
                    <span className="alternate">This field is required</span>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    {...register("district", { required: true })}
                    className="form-control main"
                    placeholder="District"
                  />
                  {errors.district && (
                    <span className="alternate">This field is required</span>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    {...register("zone", { required: true })}
                    className="form-control main"
                    placeholder="Zone"
                  />
                  {errors.zone && (
                    <span className="alternate">This field is required</span>
                  )}
                </div>
              </>
            )}

            {page === 2 && (
              <>
                <div className="col-md-4">
                  <input
                    {...register("address1", { required: true })}
                    className="form-control main"
                    placeholder="Address 1"
                  />
                  {errors.address1 && (
                    <span className="alternate">This field is required</span>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    {...register("address2", { required: true })}
                    className="form-control main"
                    placeholder="Address 2"
                  />
                  {errors.address2 && (
                    <span className="alternate">This field is required</span>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    {...register("PrimaryPhoneNo", {
                      required: true,
                      pattern:
                        /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm,
                    })}
                    className="form-control main"
                    placeholder="Phone"
                  />
                  {errors.PrimaryPhoneNo && (
                    <span className="alternate">
                      The Phone number field is required
                    </span>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    {...register("otherPhonenumber", {
                      required: true,
                      pattern:
                        /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm,
                    })}
                    className="form-control main"
                    placeholder="Alt.Phone"
                  />
                  {errors.otherPhonenumber && (
                    <span className="alternate">
                      The Phone number field is required
                    </span>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                    className="form-control main"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span className="alternate">
                      The email field is required
                    </span>
                  )}
                </div>
              </>
            )}

{page === 3 && (
              <>
               <div className="col-md-4">
      <div className="form-group">
        <select
          className="form-control main"
          {...register("employmentStatus", {
            required: "this feild is reqired",
          })}
         
        >
          <option value="">Employment Staus</option>
          <option value="Employed">Employed</option>
          <option value="Unemployed">Unemployed</option>
          <option value="Student">Student</option>
        </select>
      </div>
      {errors.employmentStatus && (
        <span className="alternate">This field is required</span>
      )}
    </div>

    <div className="col-md-4">
      <input
        {...register("profession", { required: true })}
        className="form-control main"
        placeholder="Profession"
      />
      {errors.profession && (
        <span className="alternate">This field is required</span>
      )}
    </div>
  
    <div className="col-md-4">
      <input
        {...register("officeAddress", { required: true })}
        className="form-control main"
        placeholder="Office Address"
       
      />
      {errors.officeAddress && (
        <span className="alternate">This field is required</span>
      )}
    </div>

    <div className="col-md-4">
      <input
        {...register("educationalQualification", { required: true })}
        className="form-control main"
        placeholder="Educational Qualification"
       
      />
      {errors.educationalQualification && (
        <span className="alternate">This field is required</span>
      )}
    </div>
  
    <div className="col-md-4">
      <input
        {...register("nameOfSchool", { required: true })}
        className="form-control main"
        placeholder="Name of School"
       
      />
      {errors.nameOfSchool && (
        <span className="alternate">This field is required</span>
      )}
    </div>

    <div className="col-md-4">
      <input
        {...register("level", { required: true })}
        className="form-control main"
        placeholder="Level"
       
      />
      {errors.level && (
        <span className="alternate">This field is required</span>
      )}
    </div>

</>
            )}



            <div className="col-12 text-center">
              <button type="button" disabled={page == 0} onClick={()=> {prevBtn()}} className="btn btn-main-md">
                Prev
              </button>&nbsp;
              {btnvisible ? <button type="button" onClick={()=> {nxtbtn()}}  className="btn btn-main-md">
                Next
              </button> :
              <button type="submit" className="btn btn-main-md">Submit</button>}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
