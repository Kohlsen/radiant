import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import ServiceFlyout from "./ServiceFlyout";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [activeLink, setActiveLink] = useState("home");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (router.pathname !== "/") {
      setActiveLink(router.pathname);
      console.log("hererere");
      setColor("#fff");
      setTextColor("#000");
    }
    if (router.pathname === "/") {
      console.log("22");
      setColor("transparent");
      setTextColor("#fff");
    }
    const handleScroll = () => {
      if (router.pathname === "/") {
        if (window.scrollY > 50) {
          setColor("#fff");
          setTextColor("#000");
        } else {
          setColor("transparent");
          setTextColor("#fff");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router]);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-20 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          {/* <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            RS&B
          </h1> */}
          <img
            src="https://radiantskinandbeauty.com/wp-content/uploads/2015/01/logo.png"
            alt="Radiant Skin & Beauty"
            className="w-16 z-20 object-cover rounded-full"
          />
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className={router.pathname === "/" ? "text-rose-300 p-4" : "p-4"}>
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              router.pathname === "/about" ? "text-rose-400 p-4" : "p-4"
            }
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={
              router.pathname === "/services" ? "text-rose-400 p-4" : "p-4"
            }
          >
            <Link href="/services">Services</Link>
          </li>
          <li
            className={
              router.pathname === "/contact" ? "text-rose-400 p-4" : "p-4"
            }
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="block sm:hidden z-20" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "#fff" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-rose-400"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-rose-400"
            >
              <Link href="/about">About Us</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-rose-400"
            >
              <Link href="/services">Services</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-rose-400"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
