// Login.jsx
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { FaEnvelope } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { apiurl } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();


  
  const handleSubmit = async (formValues) => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(`${apiurl}/api/users/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        login(data.user); // Pass user data to login function
        navigate("/Home");
      } else {
        setError(data.message || "Login Failed");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email Address")
      .required("The Email is required"),
    password: Yup.string().required("The password is required"),
  });

  return (
    <div className="LogIn">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values, handleChange }) => (
          <Form className="form">
            <h1>Login</h1>
            <div className="inputGroup">
              <div className="inputFiled">
                <label htmlFor="email">
                  <FaEnvelope />
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  className="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="inputFiled">
                <label htmlFor="password">
                  <GiPadlock />
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter Your password"
                  className="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <div className="LoginDiv">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="Loginbtn"
                >
                  {loading ? "Please wait..." : "Login"}
                </button>
              </div>
            </div>
            {error && <p className="error">{error}</p>}
            <p className="loginPara">
              Lost password? <a href="/ResetPassword">Click Here</a>
            </p>
            <p className="loginPara">
              If no account click <a href="/Signup">Sign Up</a> to register
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
