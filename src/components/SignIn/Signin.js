import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import googleIcon from "../../Assets/icons/google-color-icon.svg";
import facebookIcon from "../../Assets/icons/facebook-icon.svg";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signin = (props, setCurrentUser) => {
  const [signInWithGoogle, user, loading, googleSignInError] =
    useSignInWithGoogle(auth);

  const [userGoogle] = useAuthState(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // console.log(props.setCurrentUser);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  if (user || userGoogle) {
    console.log("Authstate: ", user?.user);
    // checkExistence

    fetch("https://game-of-nature-backend.vercel.app/check-existence", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: userGoogle?.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("my data: \n\n", data, "\n");
        if (data.success) {
          localStorage.setItem("userID", data.user_id);
          // setUserInfo(data.info);
        } else {
        }
      });
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 3000);
  }

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginBtn = async (event) => {
    event.preventDefault();
    console.log(email, " >>> ", password);
    // for admin hard code
    // if (email == "Admin@gon.com" && password == "123456") {
    //   localStorage.setItem(
    //     "currentUserDetails",
    //     JSON.stringify({
    //       userType: "Admin",
    //       email: "Admin@gon.com",
    //       password: "123456",
    //     })
    //   );
    //   navigate("/admin-dashboard", { replace: true });
    // console.log(from);

    // For Actual Login
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    fetch("https://game-of-nature-backend.vercel.app/signin", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "Success") {
          console.log("Okay, ", data.user_id);

          console.log(data);
          localStorage.setItem(
            "currentUserDetails",
            JSON.stringify({
              currentUserInfo: data.currentUserInfo,
            })
          );

          navigate(from, { replace: true });
        } else {
          setError(data.msg);
          alert(`Message: ${data.msg}`);
        }
      });
  };

  const handleSignInWithGoogle = (event) => {
    event.preventDefault();
    if (user) {
      console.log("Authstate: ", user);
    } else {
      console.log("Google Sign in Error");
    }
  };

  return (
    <div className=" grid grid-cols-1 items-center my-20">
      <div className=" lg:mx-auto md:mx-40 sm:mx-20 sm:p-10 md:p-14 mx-5 p-5 border-2 rounded-3xl lg:max-w-fit grid grid-cols-1 shadow-2xl">
        <h1 className="text-2xl mb-8 font-semibold"> SIGN IN </h1>
        <form onSubmit={handleLoginBtn}>
          <div>
            <input
              required
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full mb-7"
            />
            <input
              required
              onBlur={handlePasswordBlur}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
            />
            {error ? <h1 className="text-error">{error}</h1> : <></>}
            <input
              type="submit"
              value="Login"
              className="mt-10 w-40 px-4 py-1.5 rounded-3xl text-white border-2 border-gray-700 bg-green-600 hover:bg-green-500"
            />
          </div>

          {/* <div className="lg:grid lg:grid-cols-2 mx-auto bg-red-300 gap-5 text-sm">
            <button
              onClick={() => signInWithGoogle()}
              className="flex justify-center items-center lg:mb-0 mb-5 lg:w-1/2 md:w-1/2 w-full bg-gray-200 shadow-2xl px-5 py-2 rounded-xl"
            >
              <img className="w-6 h-6 mr-4" src={googleIcon} /> Sign in with
              Google
            </button>
            <button className="flex justify-center items-center bg-gray-200 lg:w-1/2 md:w-1/2 w-full shadow-2xl px-5 py-2 rounded-xl">
              <img className="w-6 h-6 mr-4" src={facebookIcon} /> Sign in with
              Facebook
            </button>
          </div> */}
        </form>
        <div className="">
          <h1 className="mt-12">
            Dont 't have an account?
            <span className="text-green-500 hover:text-green-600 font-semibold ml-2">
              <a href="/signup"> Signup </a>
            </span>
          </h1>
          <div className="divider my-10 ">Or</div>

          <div className="lg:flex md:flex sm:grid sm:justify-center xs:grid xs:justify-center lg:justify-center md:justify-center lg:gap-2 md:gap-2">
            <button
              onClick={() => {
                console.log(signInWithGoogle());
              }}
              className="bg-gray-200 shadow-2xl border-2 hover:border-gray-300 py-2 w-64 flex justify-center lg:mb-0 md:mb-0 mb-5 rounded-2xl"
            >
              <img className="w-6 h-6 mr-4" src={googleIcon} /> Sign in with
              Google
            </button>
            <button className="bg-gray-200 shadow-2xl border-2 hover:border-gray-300 py-2 w-64 flex justify-center items-center rounded-2xl">
              <img className="w-6 h-6 mr-4" src={facebookIcon} /> Sign in with
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
