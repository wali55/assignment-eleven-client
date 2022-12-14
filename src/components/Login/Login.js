import { Label, TextInput, Toast } from "flowbite-react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../images/login.jpg";
import logo from "../../images/logo.png";
import google from "../../images/google.png";
import auth from "../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  let errorElement;

  if(loading || googleLoading || sending){
    return <Loading></Loading>
  }

  if(user || googleUser){
    navigate(from, {replace: true});
  }

  if(error || googleError){
    errorElement = <p className="text-red-500">Error: {error?.message} {googleError?.message}</p>;
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
  }

  const resetPassword = async (event) => {
    const email = event.target.email.value;
    if(email){
        await sendPasswordResetEmail(email);
        Toast()
    }
  }
  return (
    <div>
      <div className="grid md:grid-cols-2 justify-center items-center">
        <div>
          <img src={loginImg} alt="" />
        </div>
        <div className="w-9/12 mx-auto mb-12">
          <div className="flex justify-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Organic Life
            </span>
          </div>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label value="Your Email" />
              </div>
              <TextInput name="email" type="email" required={true} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Your password" />
              </div>
              <TextInput name="password" type="password" required={true} />
            </div>
            <button className="bg-lime-500 py-2 px-4 rounded text-white font-semibold hover:bg-orange-500">
              Login
            </button>
          </form>
          <p className="my-3">
            New to Organic Life?
            <Link to="/register" className="text-lime-500 font-semibold ml-2">
              Please Register
            </Link>
          </p>
          <p>
            Forget Password?
            <button className="text-lime-500 ml-2 font-semibold">
              Reset Password
            </button>
          </p>
          <div>
            <div className="flex my-6">
              <p>Or Login with</p>
              <button className="flex ml-3 w-full justify-center items-center rounded border-2 border-lime-500 hover:border-orange-500">
                <img style={{ width: "30px" }} src={google} alt="" />
                <span className="px-2 font-semibold">Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
