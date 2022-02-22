import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function Contact({ formData, setFormData }: any) {
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
          <input
            type="text"
            className="form-control main"
            name="address1"
            id="address1"
            placeholder="Address"
            value={formData.address1}
            onChange={(event) =>
              setFormData({ ...formData, address1: event.target.value })
            }
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control main"
            name="address2"
            id="address2"
            placeholder="Alt.Address"
            value={formData.address2}
            onChange={(event) =>
              setFormData({ ...formData, address2: event.target.value })
            }
          />
        </div>
        <div className="col-md-6">
          <input
            {...register("PrimaryPhoneNo", {
              required: true,
              pattern:
                /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm,
            })}
            className="form-control main"
            placeholder="Phone"
            value={formData.PrimaryPhoneNo}
            onChange={(event) =>
              setFormData({ ...formData, PrimaryPhoneNo: event.target.value })
            }
          />
          {errors.PrimaryPhoneNo && (
            <span className="alternate">
              The Phone number field is required
            </span>
          )}
        </div>
        <div className="col-md-6">
          <input
            {...register("otherPhonenumber", {
              required: true,
              pattern:
                /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm,
            })}
            className="form-control main"
            placeholder="Alt.Phone"
            value={formData.otherPhonenumber}
            onChange={(event) =>
              setFormData({ ...formData, otherPhonenumber: event.target.value })
            }
          />
          {errors.otherPhonenumber && (
            <span className="alternate">
              The Phone number field is required
            </span>
          )}
        </div>
        <div className="col-md-6">
          <input
            {...register("email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
            className="form-control main"
            placeholder="Email"
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
          {errors.email && (
            <span className="alternate">The email field is required</span>
          )}
        </div>
      </div>
    </>
  );
}
export default Contact;
