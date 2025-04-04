"use client";
import { useRouter } from "next/navigation";

export default function GetStarted(){

  const router = useRouter();
  const handdleClick = ()=>{
    router.push("/profile")
  }
  
  return (
  <>
    <button className="bg-black text-white p-3 rounded-sm hover:bg-slate-800 cursor-pointer"
      onClick={handdleClick} >
      Get Started For Free
      </button>
  </>
  )
}