"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-screen z-50 transition-all duration-300 ${
        scrolled ? "bg-white/8 backdrop-blur shadow-sm " : "bg-white"
      }`}
    >
      <div className="md:ml-20 ">
        <Image alt="logo" src="/logo.png" height={150} width={150}></Image>
      </div>
    </nav>
  );
}
