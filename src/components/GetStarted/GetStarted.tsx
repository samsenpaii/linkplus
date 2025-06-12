"use client";
import { useRouter } from "next/navigation";
import RightarrowIcon from "../icons/rightarrowIcon";

export default function GetStarted(){

  const router = useRouter();
  const handdleClick = ()=>{
    router.push("/my")
  }
  
  return (
  <>
    <button className="bg-black flex justify-center items-center text-white p-3 hover:bg-slate-800 cursor-pointer rounded-3xl"
      onClick={handdleClick} >
      Get Started <RightarrowIcon></RightarrowIcon>
      </button>
  </>
  )
}