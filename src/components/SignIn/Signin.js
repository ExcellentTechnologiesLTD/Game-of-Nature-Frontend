import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import googleIcon from "../../Assets/icons/google-color-icon.svg";
import facebookIcon from "../../Assets/icons/facebook-icon.svg";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { CartContext } from "../../App";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Signin = () => {
  const [userDetails, setUserDetails] = useContext(CartContext);
  console.log("New>> \n", userDetails);
  const [signInWithGoogle, user, loading, googleSignInError] =
    useSignInWithGoogle(auth);

  const [userGoogle] = useAuthState(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  if (user || userGoogle || userDetails) {
    fetch("https://game-of-nature-backend.vercel.app/check-existence", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: userGoogle?.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.status == 200 && data.user_id) {
          setUserDetails(data?.info);
          localStorage.setItem("currentUserDetails", JSON.stringify(data.info));
          navigate(from, { replace: true });
        } else {
          // Ask user info
          navigate("/signup", { replace: true });
        }
      });
  }

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handleLoginBtn = async (event) => {
    event.preventDefault();
    console.log(email, " >>> ", password);
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
          setUserDetails(data.currentUserInfo);
          localStorage.setItem(
            "currentUserDetails",
            JSON.stringify(data.currentUserInfo)
          );

          navigate(from, { replace: true });
        } else {
          setError(data.msg);
          alert(`Message: ${data.msg}`);
        }
      });
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
                handleGoogleSignIn();
                // console.log();
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
