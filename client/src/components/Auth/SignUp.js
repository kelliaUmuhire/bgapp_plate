import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../services/AuthService";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validFields = () => {
    let valid = true;
    let _error = {};
    if (username.length < 2 || username.length > 40) {
      _error.username = "Username lenght must be between 2 and 40";
      valid = false;
    }
    if (username.length < 8 || username.length > 40) {
      _error.password = "Password lenght must be between 2 and 40";
      valid = false;
    }
    if (!valid) setErrors(_error);
    return valid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validFields()) {
      createUser({ username, email, password })
        .then((res) => navigate("/signin"))
        .catch((err) => console.log(err.toString()));
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center flex-column justify-content-center mt-5">
      <div className="mt-md-5 b-title">Sign Up</div>
      <form className="col-md-4 col-12 mt-5" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <input
            type="text"
            required={true}
            name="username"
            id="usernameI"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="form-control border border-dark"
          />
          <div
            className={`text-danger txt-sm ${
              Object.keys(errors).findIndex((x) => x === "password") > -1
                ? ""
                : "d-none"
            }`}
          >
            {" "}
            {errors.username}
          </div>
        </div>
        <div className="mb-3">
          <input
            required={true}
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control border border-dark"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            required={true}
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control border border-dark"
          />
          {Object.keys(errors).findIndex((x) => x === "password") > -1 && (
            <div className={`text-danger txt-sm`}> {errors.password}</div>
          )}
        </div>
        <div className="mb-3">
          <input
            type="submit"
            name="Sign Up"
            className="form-control bg-warning border border-warning"
          />
        </div>
      </form>
      <div className="mt-3 txt-sm">
        Already have an account?{" "}
        <Link to="/signin">
          <u className="text-warning">Sign In</u>
        </Link>
      </div>
    </div>
  );
}
