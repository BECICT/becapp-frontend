import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Profile({ formData, setFormData }: any) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [date, setDate] = useState(false);
  const [dateJoined, setdateJoined] = useState(false);
  const [Waterbaptisim, setWaterbaptisim] = useState(false);
  const [Holybaptisim, setHolybaptisim] = useState(false);
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <input
            {...register("dateOfNewBirth", { required: true })}
            type={`${date === true ? "date" : "text"}`}
            onFocus={() => setDate(true)}
            className="form-control main"
            placeholder="Date of NewBirth"
            value={formData.dateOfNewBirth}
            onChange={(event) =>
              setFormData({ ...formData, dateOfNewBirth: event.target.value })
            }
          />
          {errors.dateOfNewBirth && (
            <span className="alternate">The birthdate field is required</span>
          )}
        </div>

        <div className="col-md-6">
          <input
            {...register("placeOfNewBirth", { required: true })}
            className="form-control main"
            placeholder="Place of new Birth"
            value={formData.placeOfNewBirth}
            onChange={(event) =>
              setFormData({ ...formData, placeOfNewBirth: event.target.value })
            }
          />
          {errors.placeOfNewBirth && (
            <span className="alternate">This field is required</span>
          )}
        </div>

        <div className="col-md-6">
          <input
            {...register("dateJoinedChurch", { required: true })}
            type={`${dateJoined == true ? "date" : "text"}`}
            onFocus={() => setdateJoined(true)}
            className="form-control main"
            placeholder="Date of when you joined this church"
            value={formData.dateJoinedChurch}
            onChange={(event) =>
              setFormData({ ...formData, dateJoinedChurch: event.target.value })
            }
          />
          {errors.dateJoinedChurch && (
            <span className="alternate">This field is required</span>
          )}
        </div>
        <div className="col-md-6">
          <input
            {...register("wofbistatus", { required: true })}
            className="form-control main"
            placeholder="WOFBI Status"
            value={formData.wofbistatus}
            onChange={(event) =>
              setFormData({ ...formData, wofbistatus: event.target.value })
            }
          />
          {errors.wofbistatus && (
            <span className="alternate">This field is required</span>
          )}
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <select
              className="form-control main"
              {...register("waterBaptizim", {
                required: "this feild is reqired",
              })}
              value={formData.waterBaptizim}
              onChange={(event) =>
                setFormData({ ...formData, waterBaptizim: event.target.value })
              }
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

        <div className="col-md-6">
          <input
            {...register("dateOfWaterBaptizim", { required: true })}
            type={`${Waterbaptisim == true ? "date" : "text"}`}
            onFocus={() => setWaterbaptisim(true)}
            className="form-control main"
            placeholder="Date of Water Baptisim"
            value={formData.dateOfWaterBaptizim}
            onChange={(event) =>
              setFormData({
                ...formData,
                dateOfWaterBaptizim: event.target.value,
              })
            }
          />
          {errors.dateOfWaterBaptizim && (
            <span className="alternate">The birthdate field is required</span>
          )}
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <select
              className="form-control main"
              {...register("holyGhostBaptisim", {
                required: "this feild is reqired",
              })}
              value={formData.holyGhostBaptisim}
            onChange={(event) =>
              setFormData({
                ...formData,
                holyGhostBaptisim: event.target.value,
              })
            }
            >
              <option value="">Are you Baptized in the HolyGhost</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {errors.holyGhostBaptisim && (
            <span className="alternate">This field is required</span>
          )}
        </div>

        <div className="col-md-6">
          <input
            {...register("dateOfHolyGhostBaptizim", { required: true })}
            type={`${Holybaptisim === true ? "date" : "text"}`}
            onFocus={() => setHolybaptisim(true)}
            className="form-control main"
            placeholder="Date of  HolyGhost Baptisim"
            value={formData.dateOfHolyGhostBaptizim}
            onChange={(event) =>
              setFormData({
                ...formData,
                dateOfHolyGhostBaptizim: event.target.value,
              })
            }
          />
          {errors.dateOfHolyGhostBaptizim && (
            <span className="alternate">This field is required</span>
          )}
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <select
              className="form-control main"
              {...register("holyGhostBaptisim", {
                required: "this feild is reqired",
              })}
              value={formData.holyGhostBaptisim}
              onChange={(event) =>
                setFormData({ ...formData, holyGhostBaptisim: event.target.value })
              }
            >
              <option value="">WSF Status</option>
              <option value="Location Provider">Location Provider</option>
              <option value="Minister">Minister</option>
              <option value="Ass.Minister">Ass.Minister</option>
              <option value="Member">Member</option>
            </select>
          </div>
          {errors.holyGhostBaptisim && (
            <span className="alternate">This field is required</span>
          )}
        </div>

        <div className="col-md-6">
          <input
            {...register("area", { required: true })}
            className="form-control main"
            placeholder="Area"
            value={formData.area}
            onChange={(event) =>
              setFormData({ ...formData, area: event.target.value })
            }
          />
          {errors.area && (
            <span className="alternate">This field is required</span>
          )}
        </div>
        <div className="col-md-6">
          <input
            {...register("district", { required: true })}
            className="form-control main"
            placeholder="District"
            value={formData.district}
            onChange={(event) =>
              setFormData({ ...formData, district: event.target.value })
            }
          />
          {errors.district && (
            <span className="alternate">This field is required</span>
          )}
        </div>
        <div className="col-md-6">
          <input
            {...register("zone", { required: true })}
            className="form-control main"
            placeholder="Zone"
            value={formData.zone}
            onChange={(event) =>
              setFormData({ ...formData, zone: event.target.value })
            }
          />
          {errors.zone && (
            <span className="alternate">This field is required</span>
          )}
        </div>
        
      </div>
    </>
  );
}
