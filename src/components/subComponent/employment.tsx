import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

export default function Employment({formData, setFormData}: any) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const {
        register,
        formState: { errors },
      } = useForm();
    return (
        <>
      <div className="row">
      <div className="col-md-6">
          <div className="form-group">
            <select
              className="form-control main"
              {...register("employmentStatus", {
                required: "this feild is reqired",
              })}
              value={formData.employmentStatus}
            onChange={(event) =>
              setFormData({ ...formData, employmentStatus: event.target.value })
            }
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

        <div className="col-md-6">
          <input
            {...register("profession", { required: true })}
            className="form-control main"
            placeholder="Profession"
            value={formData.profession}
            onChange={(event) =>
              setFormData({ ...formData, profession: event.target.value })
            }
          />
          {errors.profession && (
            <span className="alternate">This field is required</span>
          )}
        </div>
      
        <div className="col-md-6">
          <input
            {...register("officeAddress", { required: true })}
            className="form-control main"
            placeholder="Office Address"
            value={formData.officeAddress}
            onChange={(event) =>
              setFormData({ ...formData, officeAddress: event.target.value })
            }
          />
          {errors.officeAddress && (
            <span className="alternate">This field is required</span>
          )}
        </div>

        <div className="col-md-6">
          <input
            {...register("educationalQualification", { required: true })}
            className="form-control main"
            placeholder="Educational Qualification"
            value={formData.educationalQualification}
            onChange={(event) =>
              setFormData({ ...formData, educationalQualification: event.target.value })
            }
          />
          {errors.educationalQualification && (
            <span className="alternate">This field is required</span>
          )}
        </div>
      
        <div className="col-md-6">
          <input
            {...register("nameOfSchool", { required: true })}
            className="form-control main"
            placeholder="Name of School"
            value={formData.nameOfSchool}
            onChange={(event) =>
              setFormData({ ...formData, nameOfSchool: event.target.value })
            }
          />
          {errors.nameOfSchool && (
            <span className="alternate">This field is required</span>
          )}
        </div>

        <div className="col-md-6">
          <input
            {...register("level", { required: true })}
            className="form-control main"
            placeholder="Level"
            value={formData.level}
            onChange={(event) =>
              setFormData({ ...formData, level: event.target.value })
            }
          />
          {errors.level && (
            <span className="alternate">This field is required</span>
          )}
        </div>
        
      </div>
        </>
    )
}
