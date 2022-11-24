import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Signin = (props, setCurrentUser) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // console.log(props.setCurrentUser);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || `/home`;

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginBtn = async (event) => {
    event.preventDefault();
    console.log(email, " >>> ", password);
    if (email == "Admin@gon.com" && password == "123456") {
      localStorage.setItem(
        "currentUserDetails",
        JSON.stringify({
          userType: "Admin",
          email: "Admin@gon.com",
          password: "123456",
        })
      );
      navigate("/admin-dashboard", { replace: true });
      // console.log(from);
    }
    // For Actual Login
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //   }),
    // };

    // fetch("http://localhost:3302/signin", requestOptions)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.msg == "Success") {
    //       console.log("Okay");
    //       localStorage.setItem("user", email);
    //       localStorage.setItem("currentUserID", data.UID);
    //       navigate(from, { replace: true });
    //     } else {
    //       setError(data.msg);
    //       alert(`Message: ${data.msg}`);
    //     }
    //   });
  };

  return (
    <div className=" grid grid-cols-1 items-center md:my-40 my-20">
      <div>
        <h1 className="text-2xl mb-8 font-semibold"> SIGN IN </h1>
        <form
          onSubmit={handleLoginBtn}
          className="lg:mx-auto mx-14 p-14 border-2 rounded-3xl lg:w-1/3 grid grid-cols-1"
        >
          <div>
            <input
              required
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Email"
              class="input input-bordered w-full mb-7"
            />
            <input
              required
              onBlur={handlePasswordBlur}
              type="password"
              placeholder="Password"
              class="input input-bordered w-full"
            />
            {error ? <h1 className="text-error">{error}</h1> : <></>}
            <input
              type="submit"
              value="Login"
              className="mt-10 btn bg-green-600 hover:bg-green-500"
            />
            {/* <button
              onClick={handleLoginBtn}
              class=" mt-10 btn bg-red-600 hover:bg-red-500"
            >
              LOGIN
            </button> */}
          </div>
          <h1 className="mt-12">
            Dont 't have an account?
            <span className="text-green-500 font-semibold ml-2">
              <a href="/signup"> Signup </a>
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Signin;
