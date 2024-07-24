import { useState } from "react";
import { Formik, useFormik } from "formik";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { apiurl } from "../../utils/config";
import "./Admin.css";

function PhonesAdmin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (formValues) => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(`${apiurl}/api/phones/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      const data = await response.json();
      console.log(data);
      if (data.success === true) {
        alert("data sent to database");
        navigate("/viewPhones");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
      price: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <div>
      <h1>Phone selling Shop</h1>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="inputContainer">
          <div className="inputContainerLeft">
            <label htmlFor="">Enter phone image</label>
            <input
              type="text"
              name="phoneImage"
              value={formik.values.phoneImage}
              onChange={formik.handleChange}
              placeholder="Enter the image of the Phone"
            />
            <label htmlFor="">Enter phone Name</label>
            <input
              type="text"
              name="phoneName"
              value={formik.values.phoneName}
              onChange={formik.handleChange}
              placeholder="Enter the Phone Name"
            />
            <label htmlFor="">Enter phone resolution</label>
            <input
              type="text"
              name="resolution"
              value={formik.values.resolution}
              onChange={formik.handleChange}
              placeholder="Enter the resolution of the phone"
            />
            <label htmlFor="">Enter phone processor</label>
            <input
              type="text"
              name="processor"
              value={formik.values.processor}
              onChange={formik.handleChange}
              placeholder="Enter the processor type of the phone"
            />
          </div>
          <div className="inputContainerRight">
            <label htmlFor="">Enter phone RAM</label>
            <input
              type="number"
              name="ram"
              value={formik.values.ram}
              onChange={formik.handleChange}
              placeholder="Enter the RAM of the Phone"
            />
            <label htmlFor="">Enter phone storage</label>
            <input
              type="number"
              name="storage"
              value={formik.values.storage}
              onChange={formik.handleChange}
              placeholder="Enter the storage size of the Phone"
            />
            <label htmlFor="">Enter phone connectivity</label>
            <input
              type="text"
              name="connectivity"
              value={formik.values.connectivity}
              onChange={formik.handleChange}
              placeholder="Enter the connectivity of the phone"
            />
            <label htmlFor="">Enter phone battery</label>
            <input
              type="number"
              name="battery"
              value={formik.values.battery}
              onChange={formik.handleChange}
              placeholder="Enter the battery life of the phone"
            />
            <label htmlFor="">Enter phone price</label>
            <input
              type="number"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              placeholder="Enter the price of the phone"
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
