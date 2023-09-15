'use client'
import tv from "../components/images/tv.png"
import SearchBar from "./Search";
import Image from "next/image";
import { useState } from "react";
import Tv from "./images/tv.png";
import SignIcon from "./images/signin.svg";
import Link from "next/link";
import Play from "./images/play.svg";
import IMDB from "./images/imdb.png";
import Orange from "./images/orange.png";
import Poster from "./images/poster.png";
import close from "../components/images/close.svg"
import open from "../components/images/open.svg"
export default function Header() {
  const [toggle, setToggle] = useState(false)

  const toggleMenu = () => {
      setToggle(!toggle);
    };
  const headerStyle = {
    backgroundImage: `url(${Poster.src})`,
    /* Additional styles can be added here */

    // Set background size to cover the container by default
    backgroundSize: "cover",

    // Center the background image by default
    backgroundPosition: "center",

    // Media query for mobile devices
    "@media (maxWidth: 768px)": {
      backgroundSize: "auto", // Adjust background size for smaller screens
      backgroundPosition: "center", // You can adjust this as needed
    },
  };
  return (
    <main>
      <div
        style={headerStyle}
        className="h-[600px] max-sm:h-[400px]  px-24 py-6 max-sm:hidden max-md:hidden"
      >
        <div className="flex justify-between">
          <div className=" flex justify-center">
            <Image
              src={Tv}
              alt="Movie-Icon"
              className=" w-[40px] h-[40px] mb-2"
            />
            <p className=" text-2xl font-normal text-white pl-4">MovieBox</p>
          </div>
          <div>
            <SearchBar />
          </div>
          <div className=" flex justify-center">
            <p className=" text-base text-white pr-5">Sign</p>
            <Image
              src={SignIcon}
              alt="Sign In"
              className=" bg-[#c1113b] w-6 h-6"
            />
          </div>
        </div>
        {/* side tag */}
        <div className=" flex justify-start mt-24 max-sm:mt-12">
          <div>
            <h1 className=" text-5xl font-normal text-white max-sm:text-2xl">
              John Wick 3 : <br />
              Parabellum
            </h1>
            <div className=" inline-flex  flex-row items-start gap-4 mt-4">
              <Image src={IMDB} alt="IMDB" className=" w-[35px] h-[17px]" />
              <p className=" text-xs font-normal text-white">86.0/100</p>
              <Image src={Orange} alt="Orange" className=" w-[16px] h-[17px]" />
              <p className=" text-xs font-normal text-white">86.0/100</p>
            </div>
            <div className=" w-[302px] mt-4">
              <p className=" text-white text-sm">John Wick is on the run after killing a member of the international assassins &apos guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            </div>
            <div className="mt-4">
              <button className="flex gap-2 px-4 py-[6px] bg-[#BE123C]">
              <Image src={Play} alt="play" className=" w-5 h-5" />
              <p className=" capitalize text-white">Watch trailer</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="md:hidden  mt-3 ml-10"> */}
      <div
        style={headerStyle}
        className="h-[600px] max-sm:h-[500px] md:hidden"
      >
      <div className=" flex flex-row justify-between py-10 px-5">
        <Link href="/">
            <div className=' flex gap-[24px] pl-15'>
                <Image src={tv} width={50} height={50} alt='logo' />
              <h1 className=' text-2xl text-white font-normal max-sm:text-xl pt-2'>MovieBox</h1>
            </div>
        </Link>
        <button className="text-dark" onClick={toggleMenu}>
                {toggle ? (
                  // <FaTimes className="text-2xl" />
        <Image src={close} alt="close" width={24} color="white" className=" bg-white" />
        ) : (
          // <FaBars className="text-2xl" />
          <Image src={open} alt="open" width={24} className=" bg-white" />
          
          )}
       </button>
      </div>
      <SearchBar />
      <div className=" flex justify-start mt-24 max-sm:mt-12 max-sm:px-5">
          <div>
            <h1 className=" text-5xl font-normal text-white max-sm:text-2xl">
              John Wick 3 : <br />
              Parabellum
            </h1>
            <div className=" inline-flex  flex-row items-start gap-4 mt-4">
              <Image src={IMDB} alt="IMDB" className=" w-[35px] h-[17px]" />
              <p className=" text-xs font-normal text-white">86.0/100</p>
              <Image src={Orange} alt="Orange" className=" w-[16px] h-[17px]" />
              <p className=" text-xs font-normal text-white">86.0/100</p>
            </div>
            <div className=" w-[302px] mt-4">
              <p className=" text-white text-sm">John Wick is on the run after killing a member of the international assassins &apos guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            </div>
            <div className="mt-4">
              <button className="flex gap-2 px-4 py-[6px] bg-[#BE123C]">
              <Image src={Play} alt="play" className=" w-5 h-5" />
              <p className=" capitalize text-white">Watch trailer</p>
              </button>
            </div>
          </div>
        </div>
    </div>
    {/* </div> */}

    {toggle && (
        <div className="fixed z-20 top-0 bg-[#484b74] 
         right-0 bottom-0 left-0 flex flex-col 
         items-center gap-6 justify-center">
            <button
            className="text-white absolute top-4 right-4"
            onClick={toggleMenu}
            >
            {/* <FaTimes className="text-2xl" /> */}
            <Image src={close} alt="close" width={25} height={25}  />
            </button>
            <div className=" flex justify-center">
            <p className=" text-base text-white pr-5">Sign</p>
            <Image
              src={SignIcon}
              alt="Sign In"
              className=" bg-[#c1113b] w-6 h-6"
            />
          </div>
        </div>
      )}

    </main>
  );
}
