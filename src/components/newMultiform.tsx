import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import querystring  from "react-query"
// import PubSub from 'pubsub-js'

export default function NewMultiform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    reValidateMode: 'onChange'
  });
  const history = useNavigate();


  // const url = 'https://becregister.herokuapp.com/api/'
  const url = 'http://localhost:3331/api/'
  const token = localStorage.getItem("Bearer")

  console.log(errors);
   
  const [state, setState] = useState({Message:"", Showmessage:false})
  const [page, setPage] = useState(0);
  const [btnvisible, setbtnvisible] = useState(true)
  //----------------------------------------
  const [newbirth, setnewbirth] = useState(false);
  const [dateJoined, setdateJoined] = useState(false);
  const [Waterbaptizim, setWaterbaptizim] = useState(false);
  const [holyGhostBaptisim, setHolyGhostBaptisim] = useState(false);
  const [date, setDate] = useState(false);
  const [employmentStatus, setEmploymentStatus] = useState(false);
  // const [profession, setProfession] = useState(false);
  const [student, setStudent] = useState(false);
  const UserId = localStorage.getItem("UserId");

  //---------------------------------------



  const onSubmit = (data: any) => {
    console.log('DATA: '+ data)
    axios.post(url + 'member/multiform', data, {headers: { 'Authorization': `Bearer ${token}` }
    }).then(res => {
      if (!res.data.error) {
      //   const result = res.data.data
      // const stringresult = JSON.stringify({...result})
        history(`/personal/${res.data.data.Id}`)
      }else{
        setState({ Message: res.data.errorMessage,  Showmessage:true});
      }           
    }).catch((err) => {
      if (err) {
        setState({ Message: 'Somthing went wrong. Please contact your unit head',  Showmessage:true});
      }
    });
  } 
  const pageTitles = ["Personal Info", "Profile", "Contact", "Employment"];
  

  const selectEmploymentStatus = (e: any) => {
    if (e.target.value === "Student") {
      setStudent(true);
      setEmploymentStatus(false);
    }
    else if (e.target.value === "Employed") {
      setStudent(false)
      setEmploymentStatus(true);
    }

  }

  // const selectProfession = (e: any) => {
  //   if(e.target.value === "Employed") {
  //     setProfession(true);
  //   }
  //   else{
  //     setProfession(false)
  //   }
  // }


  const selectHolyGhostBaptisim = (e: any) => {
    // const water = getValues("holyGhostBaptisim")
    if (e.target.value === "Yes") {
      setHolyGhostBaptisim(true);
    }
    else {
      setHolyGhostBaptisim(false);
    }
  };

  const selectWaterBaptizim = (e: any) => {
    // const holyGhost = getValues("waterBatpizim")
    if (e.target.value === "Yes") {
      setWaterbaptizim(true);
    } else {
      setWaterbaptizim(false)
    }
  };


  function prevBtn(): void {
    setPage((currentpage) => currentpage - 1);
    setbtnvisible(true);
  }
  const nxtbtn = () => {
    if (page === pageTitles.length - 1) {
      setbtnvisible(false)
    } else {
      setPage((currentpage) => currentpage + 1)
    }
   
  }

  return (
    <>
      <section className="section contact-form">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
              <p><b className="alternate">{state.Showmessage ? state.Message : " "}</b>                      
                      </p> 
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
                  <label htmlFor="tagNo">
                    {errors.tagNo && (
                      <span className="alternate">This field is required</span>
                    )}
                  </label>
                  <input
                    {...register("tagNo", { required: true })}
                    className="form-control main"
                    placeholder="Tag Number"
                  />

                </div>
                <div className="col-md-4">
                  <label htmlFor="title">
                    {errors.title && (
                      <span className="alternate">This field is required</span>
                    )}
                  </label>
                  <input
                    {...register("title", {
                      required: true
                    })}
                    className="form-control main"
                    //dropdown
                    placeholder="Title"
                  />

                </div>
                <div className="col-md-4">
                  <label htmlFor="surname">
                    {errors.surname && (
                      <span className="alternate">
                        The Surname field is required
                      </span>
                    )}
                  </label>
                  <input
                    {...register("surname", {
                      required: true
                    })}
                    className="form-control main"
                    placeholder="Surname"
                  />

                </div>
                <div className="col-md-4">
                  <label htmlFor="firstname">
                    {errors.firstname && (
                      <span className="alternate">
                        The First Name field is required
                      </span>
                    )}
                  </label>
                  <input
                    {...register("firstname", {
                      required: true
                    })}
                    className="form-control main"
                    placeholder="First Name"
                  />

                </div>
                <div className="col-md-4">
                  <label htmlFor="othername">
                    {errors.othername && (
                      <span className="alternate">
                        The othername field is required
                      </span>
                    )}
                  </label>
                  <input
                    {...register("othername", {
                      required: true
                    })}
                    className="form-control main"
                    placeholder="Other Name"
                  />

                </div>
                <div className="col-md-4">
                  <label htmlFor="birthdate">
                    {errors.birthdate && (
                      <span className="alternate">
                        The birthdate field is required
                      </span>
                    )}
                  </label>
                  <input
                    {...register("birthdate", {
                      required: true
                    })}
                    type={`${newbirth === true ? "date" : "text"}`} onFocus={() => setnewbirth(true)}
                    className="form-control main"
                    placeholder="Date of Birth"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="gender">
                    {errors.gender && (
                      <span className="alternate">
                        The gender field is required
                      </span>
                    )}
                  </label>
                  <div className="form-group">
                    <select
                      className="form-control main"
                      {...register("gender", {
                        required: true
                      })}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                </div>
                <div className="col-md-4">
                  <label htmlFor="maritalstatus">
                    {errors.maritalstatus && (
                      <span className="alternate">
                        This field is required
                      </span>
                    )}
                  </label>
                  <div className="form-group">
                    <select
                      className="form-control main"
                      {...register("maritalstatus", {
                        required: true
                      })}
                    >
                      <option value="">Marital Status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Widow/Widower">Widow/Widower</option>
                      <option value="Divoced">Divoced</option>
                    </select>
                  </div>

                </div>
                <div className="col-md-4">
                  <label htmlFor="nextofkin">
                    {errors.nextofkin && (
                      <span className="alternate">
                        The next of kin field is required
                      </span>
                    )}
                  </label>
                  <input
                    {...register("nextofkin", {
                      required: true
                    })}
                    className="form-control main"
                    placeholder="Next of Kin"
                  />

                </div>
                <div className="col-md-4">
                  <label htmlFor="phoneNoOfNextOfKin">
                    {errors.phoneNoOfNextOfKin && (
                      <span className="alternate">
                        This field is required
                      </span>
                    )}
                  </label>
                  <input
                    {...register("phoneNoOfNextOfKin", {
                      required: true,
                      pattern:
                        /(^[0]\d{10}$)|(^[\+]?[234]\d{12}$)/
                    })}
                    className="form-control main"
                    type="number"
                    placeholder="Phone no of Next of Kin "
                  />

                </div>
                {/* <div className="col-md-4">
                  <label htmlFor="membershipStatus">
                    {errors.membershipStatus && (
                      <span className="alternate">
                        The membershipStatus field is required
                      </span>
                    )}
                  </label>
                  <div className="form-group">
                    <select
                      className="form-control main"
                      {...register("membershipStatus", {
                        required: true
                      })}
                    >
                      <option value=""> Membership Status</option>
                      <option value="Active">Active</option>
                      <option value="Probation">Probation</option>
                      <option value="NonActive">NonActive</option>
                      <option value="Deactivated">Deactivated</option>
                    </select>
                  </div>

                </div> */}
                <div className="col-md-4">
                  <label htmlFor="subunitId">
                    {errors.subunitId && (
                      <span className="alternate">
                        The subunitsubunitId field is required
                      </span>
                    )}
                  </label>
                  <div className="form-group">
                    <select
                      className="form-control main"
                      {...register("subunitId", {
                        required: true
                      })}
                    >
                      <option value="">Select</option>
                      <option value="Operation">Operation</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="TMU">TMU</option>
                    </select>
                  </div>

                </div>{" "}
              </>
            )}
            {page === 1 && (
              <>
                <div className="col-md-4">
                  <label htmlFor="dateOfNewBirth">
                    {errors.dateOfNewBirth && (
                      <span className="alternate">
                        The birthdate field is required
                      </span>
                    )}
                  </label>
                  <input
                    {...register("dateOfNewBirth", { required: true })}
                    type={`${date === true ? "date" : "text"}`}
                    onFocus={() => setDate(true)}
                    className="form-control main"
                    placeholder="Date of NewBirth"
                  />
                </div>


                <div className="col-md-4">
                  <label htmlFor="placeOfNewBirth">
                    {errors.placeOfNewBirth && (
                      <span className="alternate">This field is required</span>
                    )}
                  </label>
                  <input
                    {...register("placeOfNewBirth", { required: true })}
                    className="form-control main"
                    placeholder="Place of new Birth"
                  />

                </div>

                <div className="col-md-4">
                  <label htmlFor="dateJoinedChurch">
                    {errors.dateJoinedChurch && (
                      <span className="alternate">This field is required</span>
                    )}
                  </label>
                  <input
                    {...register("dateJoinedChurch", { required: true })}
                    type={`${dateJoined == true ? "date" : "text"}`}
                    onFocus={() => setdateJoined(true)}
                    className="form-control main"
                    placeholder="Date of when you joined this church"
                  />

                </div>
                <div className="col-md-4">
                  <label htmlFor="wofbistatus">
                    {errors.wofbistatus && (
                      <span className="alternate">This field is required</span>
                    )}
                  </label>
                  <input
                    {...register("wofbistatus", { required: true })}
                    className="form-control main"
                    placeholder="WOFBI Status"
                  />

                </div>

                <div className="col-md-4">
                  <label htmlFor="waterBaptizim">
                    {errors.waterBaptizim && (
                      <span className="alternate">This field is required</span>
                    )}
                  </label>
                  <div className="form-group">
                    <select
                      className="form-control main"
                      // onChange={selectWaterBaptizim}
                      {...register("waterBaptizim", {
                        required: true
                      })}
                      onChange={(e) => selectWaterBaptizim(e)}
                    >
                      <option value="">Are you Baptized in water</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                </div>
                {Waterbaptizim ?
                  <div className="col-md-4">
                    <label htmlFor="dateOfWaterBaptizim">
                      {errors.dateOfWaterBaptizim && (
                        <span className="alternate">
                          The birthdate field is required
                        </span>
                      )}
                    </label>
                    <input
                      {...register("dateOfWaterBaptizim", {
                        required: true,
                        // onChange={selectWaterBaptizim}
                      })}
                      type="date"
                      //  type={`${Waterbaptizim === true ? "date" : "text"}`}
                      onFocus={() => setWaterbaptizim(true)}
                      className="form-control main"
                      placeholder="Date of Water Baptisim"
                    />
                  </div>
                  : null}


                <div className="col-md-4">
                  <label htmlFor="holyGhostBaptisim">
                    {errors.holyGhostBaptisim && (
                      <span className="alternate">This field is required</span>
                    )}
                  </label>
                  <div className="form-group">
                    <select
                      className="form-control main"
                      // onChange={selectHolyGhostBaptisim}
                      {...register("holyGhostBaptisim", {
                        required: true
                      })}
                      onChange={(e) => selectHolyGhostBaptisim(e)}
                    >
                      <option value="">
                        Are you Baptized in the HolyGhost
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>

                  </div>


                </div>
                {holyGhostBaptisim ?
                  <div className="col-md-4">
                    <label htmlFor="dateOfHolyGhostBaptizim">
                      {errors.dateOfHolyGhostBaptizim && (
                        <span className="alternate">This field is required</span>
                      )}
                    </label>
                    <input
                      {...register("dateOfHolyGhostBaptizim", { required: true })}
                      type="date"
                      // type={`${holyGhostBaptisim === true ? "date" : "text"}`}
                      onFocus={() => setHolyGhostBaptisim(true)}
                      className="form-control main"
                      placeholder="Date of  HolyGhost Baptisim"
                    />
                  </div>
                  : null}

                <div className="col-md-4">
                  <label htmlFor="holyGhostBaptisim">
                    {errors.holyGhostBaptisim && (
                      <span className="alternate">This field is required</span>
                    )}
                  </label>
                  <div className="form-group">
                    <select
                      className="form-control main"
                      {...register("wSFStatus", {
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

                </div>
                <div className="col-md-4">
                  <label htmlFor="WSF Address">
                    {errors.district && (
                      <span className="alternate">This field is required</span>
                    )}
                  </label>
                  <input
                    {...register("district", { required: true })}
                    className="form-control main"
                    placeholder="WSF Address"
                  />

                </div>
                <div className="col-md-4">
                  <label htmlFor="area">
                    {errors.area && (
                      <span className="alternate">This field is required</span>
                    )}
                  </label>
                  <input
                    {...register("area", { required: true })}
                    className="form-control main"
                    placeholder="Area"
                  />

                </div>              
                <div className="col-md-4">
                  <label htmlFor="zone">
                    {errors.zone && (
                      <span className="alternate">This field is required</span>
                    )}
                  </label>
                  <input
                    {...register("zone", { required: true })}
                    className="form-control main"
                    placeholder="Zone"
                  />

                </div>
              </>
            )}

            {page === 2 && (
              <>
                <div className="col-md-4">
                  <label htmlFor="address1">
                    {errors.address1 && (
                      <span className="alternate">This field is required</span>
                    )}
                  </label>
                  <input
                    {...register("Address1", { required: true })}
                    className="form-control main"
                    placeholder="Address 1"
                  />

                </div>
                <div className="col-md-4">
                  <label htmlFor="address2">
                    {errors.address2 && (
                      <span className="alternate">This field is required</span>
                    )}
                  </label>
                  <input
                    {...register("address2", { required: true })}
                    className="form-control main"
                    placeholder="Address 2"
                  />

                </div>
                <div className="col-md-4">
                  <label htmlFor="PrimaryPhoneNo">
                    {errors.PrimaryPhoneNo && (
                      <span className="alternate">
                        The Phone number field is required
                      </span>
                    )}
                  </label>
                  <input
                    {...register("PrimaryPhoneNo", {
                      required: true,
                      pattern:
                      /(^[0]\d{10}$)|(^[\+]?[234]\d{12}$)/,
                    })}
                    className="form-control main"
                    type="number"
                    placeholder="Primary Phone Number"
                  />

                </div>
                <div className="col-md-4">
                  <label htmlFor="otherPhonenumber">
                    {/* {errors.otherPhonenumber && (
                      <span className="alternate">
                        The Phone number field is required
                      </span>
                    )} */}
                  </label>
                  <input
                    {...register("OtherPhoneNo", {
                      required: false,
                      pattern:
                      /(^[0]\d{10}$)|(^[\+]?[234]\d{12}$)/,
                    })}
                    className="form-control main"
                    type="number"
                    placeholder="Alternate Phone"
                  />

                </div>
                <div className="col-md-4">
                  <label htmlFor="email">
                    {errors.email && (
                      <span className="alternate">
                        The email field is required
                      </span>
                    )}
                  </label>
                  <input
                    {...register("EmailAddress", {
                      required: true,
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                    className="form-control main"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />

                </div>
              </>
            )}

            {page === 3 && (
              <>
                <div className="col-md-4">
                  <label htmlFor="employmentStatus">
                    {errors.employmentStatus && (
                      <span className="alternate">This field is required</span>
                    )}
                  </label>
                  <div className="form-group">
                    <select
                      className="form-control main"
                      {...register("EmploymentStatus", {
                        required: false
                      })}
                      onChange={(e) => selectEmploymentStatus(e)}
                    // onChange={(e) => selectProfession(e)}

                    >
                      <option value="">Employment Status</option>
                      <option value="Employed">Employed</option>
                      <option value="Unemployed">Unemployed</option>
                      <option value="Student">Student</option>
                    </select>
                  </div>

                </div>

                {employmentStatus ?
                  <>
                    <div className="col-md-4">
                      <label htmlFor="profession">
                        {errors.profession && (
                          <span className="alternate">This field is required</span>
                        )}
                      </label>
                      <input
                        {...register("profession", { required: true })}
                        className="form-control main"
                        placeholder="Profession"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="officeAddress">
                        {errors.officeAddress && (
                          <span className="alternate">This field is required</span>
                        )}
                      </label>
                      <input
                        {...register("officeAddress", { required: true })}
                        className="form-control main"
                        placeholder="Office Address"

                      />
                    </div>
                  </>
                  : null}

                {student ?
                  <>
                    <div className="col-md-4">
                      <label htmlFor="nameOfSchool">
                        {errors.nameOfSchool && (
                          <span className="alternate">This field is required</span>
                        )}
                      </label>
                      <input
                        {...register("nameOfSchool", { required: true })}
                        className="form-control main"
                        placeholder="Name of School"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="level">
                        {errors.level && (
                          <span className="alternate">This field is required</span>
                        )}
                      </label>
                      <input
                        {...register("level", { required: true })}
                        className="form-control main"
                        placeholder="Level"
                      />
                    </div>
                  </>
                  : null}
                <div className="col-md-4">
                  <label htmlFor="educationalQualification">
                    {errors.educationalQualification && (
                      <span className="alternate">This field is required</span>
                    )}
                  </label>
                  <input
                    {...register("EducationalQualification", { required: true })}
                    className="form-control main"
                    placeholder="Educational Qualification"
                  />
                </div>


              </>
            )}


            <div className="col-12 text-center">
              <button type="button" disabled={page === 0} onClick={() => { prevBtn() }} className="btn btn-main-md">
                PREV
              </button>&nbsp;
              {btnvisible ? <button
                type="button"
                // onClick={ nxtbtn(handleSubmit) }
                onClick={handleSubmit(nxtbtn)}
                className="btn btn-main-md">
                NEXT
              </button> :
                <button type="submit"
                  onClick={handleSubmit(onSubmit)}
                  className="btn btn-main-md">
                    {/* <a href="/personal"></a> */}
                  SUBMIT
                </button>}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
