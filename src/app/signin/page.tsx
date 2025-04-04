"use client";
import GoogleIcon from "@/components/icons/googleIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";

export default function signin() {

  const handleGoogleSignIn = async () => {
    await signIn("google" , {callbackUrl : "/profile"});
  };

  return (
    <>
        <section className="bg-gradient-to-br from-blue-500 to-[#F7F7F7] h-screen w-screen flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg rounded-2xl p-6 w-96">
            <h2 className="text-black text-2xl font-semibold text-center mb-6">Signin</h2>
        
            <div className="mb-4">
              <label className="text-black block mb-1">Email</label>
              <div className="relative">
                <Input type="email" className="w-full p-3 rounded-lg bg-white/10 text-black placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Enter your email" ></Input>          
              </div>
            </div>

            <div className="mb-4">
              <label className="text-black block mb-1">Password</label>
              <div className="relative">
                <Input type="password" className="w-full p-3 rounded-lg bg-white/10 text-black placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Enter your password" ></Input>             
              </div>
            </div>

            <div className="flex justify-between items-center text-black text-sm mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-white" />
                Remember me
              </label>
              <a href="#" className="hover:underline">Forgot Password?</a>
            </div>

            <Button className="w-full bg-white/20 hover:bg-white/30 text-black py-3 rounded-lg transition font-semibold">
              Signin
            </Button>

            <hr className="border-t border-black m-5"/>

            <Button className="w-full bg-white/20 hover:bg-white/30 text-black py-3 rounded-lg transition font-semibold"
              onClick={handleGoogleSignIn}
            >
              Sigin with Google <GoogleIcon></GoogleIcon>
            </Button>
            

            <p className="text-center text-black text-sm mt-4">
              Don't have an account? <a href="#" className="underline">Register</a>
            </p>
          </div>
        </section>
    </>
  ) 
}