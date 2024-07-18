import { useState } from "react";
import { Formik, useFormik } from "formik";
import { Link, useNavigate, useLocation } from "react-router-dom";

function PhonesAdmin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (formValues) => {};

  const formik = useFormik({
    initialValues: {
      phoneImage: "",
      phoneName: "",
      resolution: "",
      processor: "",
      ram: "",
      storage: "",
      connectivity: "",
      battery: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <div>
      <h1>Phone selling Shop</h1>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="inputContainer">
          <div className="inputContainerLeft">
            <input
              type="text"
              name="phoneImage"
              value={formik.values.phoneImage}
              onChange={formik.handleChange}
              placeholder="Enter the image of the Phone"
            />
            <input
              type="text"
              name="phoneName"
              value={formik.values.phoneName}
              onChange={formik.handleChange}
              placeholder="Enter the Phone Name"
            />
            <input
              type="text"
              name="resolution"
              value={formik.values.resolution}
              onChange={formik.handleChange}
              placeholder="Enter the resolution of the phone"
            />
            <input
              type="text"
              name="processor"
              value={formik.values.processor}
              onChange={formik.handleChange}
              placeholder="Enter the processor type of the phone"
            />
          </div>
          <div className="inputContainerRight">
            <input
              type="number"
              name="ram"
              value={formik.values.ram}
              onChange={formik.handleChange}
              placeholder="Enter the RAM of the Phone"
            />
            <input
              type="number"
              name="storage"
              value={formik.values.storage}
              onChange={formik.handleChange}
              placeholder="Enter the storage size of the Phone"
            />
            <input
              type="text"
              name="connectivity"
              value={formik.values.connectivity}
              onChange={formik.handleChange}
              placeholder="Enter the connectivity of the phone"
            />
            <input
              type="number"
              name="battery"
              value={formik.values.battery}
              onChange={formik.handleChange}
              placeholder="Enter the battery life of the phone"
            />
          </div>
          <div>
            <button type="submit" className="submitPhone" disabled={loading}>
              {loading ? "please wait..." : "Add Phone"}
            </button>
            <p className="error">{error && error}</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PhonesAdmin;
