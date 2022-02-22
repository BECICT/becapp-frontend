import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function PersonalInfo({ formData, setFormData }: any) {
  const {
    register,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);  
  const [newbirth, setnewbirth] = useState(false);
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <input
            {...register("tagNo", { required: "tag no is requird" })}
            className="form-control main"
            placeholder="Tag Number"
            value={formData.tagNo}
            onChange={(event) =>
              setFormData({ ...formData, tagNo: event.target.value })
            }
          />
        </div>
        <div className="col-md-6">
          <input
            {...register("title", { required: "please select a title" })}
            className="form-control main"
            //dropdown
            placeholder="Title"
            value={formData.title}
            onChange={(event) =>
              setFormData({ ...formData, title: event.target.value })
            }
          />
        </div>
        <div className="col-md-6">
          <input
            {...register("surname", { required: "surname is reqired" })}
            className="form-control main"
            placeholder="Surname"
            value={formData.surname}
            onChange={(event) =>
              setFormData({ ...formData, surname: event.target.value })
            }
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
            value={formData.firstname}
            onChange={(event) =>
              setFormData({ ...formData, firstname: event.target.value })
            }
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
            value={formData.othername}
            onChange={(event) =>
              setFormData({ ...formData, othername: event.target.value })
            }
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
            value={formData.birthdate}
            onChange={(event) =>
              setFormData({ ...formData, birthdate: event.target.value })
            }
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
              value={formData.gender}
              onChange={(event) =>
                setFormData({ ...formData, gender: event.target.value })
              }
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
            value={formData.maritalstatus}
            onChange={(event) =>
              setFormData({ ...formData, maritalstatus: event.target.value })
            }
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
            value={formData.nextofkin}
            onChange={(event) =>
              setFormData({ ...formData, nextofkin: event.target.value })
            }
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
            value={formData.phoneNoOfNextOfKin}
            onChange={(event) =>
              setFormData({
                ...formData,
                phoneNoOfNextOfKin: event.target.value,
              })
            }
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
              value={formData.membershipStatus}
              onChange={(event) =>
                setFormData({ ...formData, membershipStatus: event.target.value })
              }
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
      </div>
    </>
  );
}
