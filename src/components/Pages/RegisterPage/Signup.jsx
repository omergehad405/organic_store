import { React, useState } from "react";
import "./SignupPage.css";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isSubmitDisabled = Object.values(formState).some(
    (value) => value.trim() === ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isSubmitDisabled) {
      toast.success(`Welcome ${formState.fName.toUpperCase()}`);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else if (formState.password === formState.confirmPassword) {
      toast.error(`the password must be the same`);
    } else {
      alert("Please fill out all fields correctly.");
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="header">
        <div className="container">
          <a className="logo" href="/">
            <img src="./logo.webp" alt="Logo" />
          </a>

          <p>signup Page</p>
        </div>
      </div>

      <StyledWrapper>
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <div className="flex">
            <label>
              <input
                required
                placeholder
                onChange={handleChange}
                value={formState.fName}
                type="text"
                className="input"
                name="fName"
              />
              <span>Firstname</span>
            </label>
            <label>
              <input
                required
                placeholder
                onChange={handleChange}
                value={formState.lName}
                type="text"
                className="input"
                name="lName"
              />
              <span>Lastname</span>
            </label>
          </div>
          <label>
            <input
              required
              placeholder
              onChange={handleChange}
              value={formState.email}
              type="email"
              className="input"
              name="email"
            />
            <span>Email</span>
          </label>
          <label>
            <input
              required
              placeholder
              onChange={handleChange}
              value={formState.password}
              type="password"
              className="input"
              name="password"
            />
            <span>Password</span>
          </label>
          <label>
            <input
              required
              placeholder
              onChange={handleChange}
              value={formState.confirmPassword}
              type="password"
              className="input"
              name="confirmPassword"
            />
            <span>Confirm password</span>
          </label>
          <button className="submit" disabled={isSubmitDisabled}>
            Submit
          </button>
          <p className="signin">
            Already have an acount ? <Link to="/register">sign in!</Link>
          </p>
        </form>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    margin: 2rem auto;
  }

  .title {
    font-size: 28px;
    color: royalblue;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: royalblue;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message,
  .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }

  .signin {
    text-align: center;
  }

  .signin a {
    color: royalblue;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input:valid + span {
    color: green;
  }

  .submit {
    border: none;
    outline: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: 0.3s ease;
  }

  .submit:hover {
    background-color: rgb(56, 90, 194);
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

export default Signup;
