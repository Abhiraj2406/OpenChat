import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../utils/firebase.js";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

function Home() {
  const handleLogin = async (token) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER_URI}/auth/login`,
        { token },
      );
      console.log(data);
      //  console.log("Request URL:", url);
      // console.log("Sending token:", token);
    } catch (error) {
      console.log(error);
      //   console.log("AXIOS ERROR:", error);
      // console.log("STATUS:", error.response?.status);
      // console.log("RESPONSE:", error.response?.data);
    }
  };

  const googleLogin = async () => {
    const data = await signInWithPopup(auth, googleProvider);
    const token = await data.user.getIdToken();
    console.log(token);
    console.log(data);
    await handleLogin(token);
  };
  return (
        <div className="h-screen flex bg-[#0d0f14] text-white overflow-hidden">
      <div className="w-[340px] bg-[#13151c] border-white/[0.08] rounded-2xl p-7 flex flex-col gap-5">
         <div className="flex flex-col gap-1">
           <h2 className="text-[17px] font-semibold text-slate-100 tracking-tight">Welcome to CortexAI</h2>
           <p>
            Please login to continue using the app.
           </p>
           <button><FcGoogle /></button>
         </div>
      </div>
    </div>
  );
}

export default Home
