import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import wave from "../../assets/images/wave.png";
import { signIn } from "../../services/AuthService";
import { authenticate } from "../../store/reducers";
import { useDispatch } from "react-redux";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signIn({ email, password })
      .then((res) => {
        dispatch(authenticate({ token: res.data.token, user: res.data.user }));
        navigate("/");
      })
      .catch((err) => {
        setErrMsg(err.response.data.message);
        // console.log(err);
      });
  };

  return (
    <div className="container d-flex flex-column justify-content0center align-items-center mt-5">
      <div className="b-title mt-md-5">Welcome Back!</div>
      <div className="mt-3">
        <img src={wave} alt="Wave" width={35} height={35} />
      </div>
      <form className="mt-5 col-12 col-md-4" onSubmit={handleFormSubmit}>
        <div className="my-3 text-sm text-danger">{errMsg}</div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control border border-dark border-2"
            placeholder="Email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
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
            className="form-control border border-dark border-2"
          />
        </div>
        <div className="mt-4">
          <input
            type="submit"
            name="Sign In"
            className="form-control bg-warning border border-warning"
          />
        </div>
      </form>
      <div className="mt-3 txt-sm">
        Don't have an account?{" "}
        <Link to="/signup">
          <u className="text-warning">Sign Up</u>
        </Link>
      </div>
    </div>
  );
}
