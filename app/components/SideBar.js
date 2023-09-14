import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import calender from "../components/images/calendar.png"
import movie from "../components/images/movie.png"
import tvD from "../components/images/tvD.png"
import tv from "../components/images/tv.png"
import home from "../components/images/home.svg"
import close from "../components/images/close.svg"
import open from "../components/images/open.svg"

const SideBar = () => {
    const [toggle, setToggle] = useState(false)

    const toggleMenu = () => {
        setToggle(!toggle);
      };

  return (
    <div>
        <div className=' h-full w-60 rounded-tr-[80px] max-md:w-0 max-sm:w-0 fixed z-10 top-0 left-0 pl-5 bg-white border-2 overflow-x-hidden pt-20 max-sm:hidden max-md:hidden'>
            <Link href="/">
              <div className=' flex justify-center gap-[24px] mb-[101px]'>
                <Image src={tv} width={50} height={50} alt='logo' />
                <h1 className=' text-2xl text-[#333333] font-normal max-sm:text-xl pt-2'>MovieBox</h1>
              </div>
            </Link>
            <div className='flex gap-[24px] ml-2 mb-[46px]'>
              <Image src={home} width={25} height={25} alt='logo' />
              <p className=' text-[#666] text-xl font-semibold'>Home</p>
            </div>
            <div className='flex gap-[24px] ml-2 mb-[46px]'>
              <Image src={movie} width={25} height={25} alt='logo' />
              <p className='text-[#666] text-xl font-semibold'>Movies</p>
            </div>
            <div className='flex gap-[24px] ml-2 mb-[46px]'>
              <Image src={tvD} width={25} height={25} alt='logo' />
              <p className='text-[#666] text-xl font-semibold'>TV series</p>
            </div>
            <div className=' flex gap-[24px] ml-2 mb-[46px]'>
              <Image src={calender} width={25} height={25} alt='logo' />
              <p className='text-[#666] text-xl font-semibold'>Upcoming</p>
            </div>
        </div>
    <div className="md:hidden  mt-3 ml-10">
      <Link href="/">
          <div className=' flex justify-center gap-[24px] mb-[20px]'>
              <Image src={tv} width={50} height={50} alt='logo' />
            <h1 className=' text-2xl text-[#333333] font-normal max-sm:text-xl pt-2'>MovieBox</h1>
          </div>
      </Link>
        <button className="text-dark" onClick={toggleMenu}>
                {toggle ? (
        // <FaTimes className="text-2xl" />
        <Image src={close} alt="open" />
        ) : (
          // <FaBars className="text-2xl" />
          <Image src={open} alt="close" width={24} />

            )}
       </button>
    </div>


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
            <Link href="/">
              <div className=' flex justify-center gap-[24px] mb-[101px]'>
                <Image src={tv} width={50} height={50} alt='logo' />
                <h1 className=' text-2xl text-[#333333] font-normal max-sm:text-xl pt-2'>MovieBox</h1>
              </div>
            </Link>
            <div className='flex gap-[24px] ml-2 mb-[46px]'>
              <Image src={home} width={25} height={25} alt='logo' />
              <p className=' text-[#666] text-xl font-semibold'>Home</p>
            </div>
            <div className='flex gap-[24px] ml-2 mb-[46px]'>
              <Image src={movie} width={25} height={25} alt='logo' />
              <p className='text-[#666] text-xl font-semibold'>Movies</p>
            </div>
            <div className='flex gap-[24px] ml-2 mb-[46px]'>
              <Image src={tvD} width={25} height={25} alt='logo' />
              <p className='text-[#666] text-xl font-semibold'>TV series</p>
            </div>
            <div className=' flex gap-[24px] ml-2 mb-[46px]'>
              <Image src={calender} width={25} height={25} alt='logo' />
              <p className='text-[#666] text-xl font-semibold'>Upcoming</p>
            </div>

        </div>
      )}
    </div>
  )
}

export default SideBar;