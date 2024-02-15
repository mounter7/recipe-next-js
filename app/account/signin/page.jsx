'use client';

import Link from "next/link";
import { PiCookingPotBold } from "react-icons/pi";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const metadata = {
  title: "Sign In",
  description: "Generated by create next app",
};

export default function pages() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",

  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);



  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signin", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push(`/account/user`);
    } catch (error) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="">
      <div className="flex justify-center mt-[100px] mb-[30px]">
        <Link href={'/'}><PiCookingPotBold className="bg-orange-600 p-2 text-5xl rounded-full text-white" /></Link>
      </div>
      <div className="flex mt-4 flex-col gap-2 max-w-[300px] mx-auto">
        <p className="text-sm dark:text-[#888]">Email Address</p>
        <input 
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        className="bg-gray-200 dark:bg-[#222] dark:text-[#ccc] p-2 rounded-lg" type="text" />
        <p className="text-sm dark:text-[#888]">Password</p>
        <input 
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        className="bg-gray-200 dark:bg-[#222] dark:text-[#ccc] p-2 rounded-lg" type="password" />
        <Link className="text-sm dark:text-[#888]" href={''}>Forgot password?</Link>
        <button 
        onClick={onLogin}
        className="bg-black dark:bg-[#333] text-white py-2 px-8 rounded-lg mt-2">Sign in</button>
        <Link className="mt-4 text-sm text-center dark:text-[#888]" href={'/account/signup'}>Don't have an account? Sign up.</Link>
      </div>
    </div>
  )
}