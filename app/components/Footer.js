import FaceBook from './images/facebook.svg';
import insta from "./images/insta.svg"
import twitter from "./images/twitter.svg"
import youtube from "./images/youtube.svg"
import Image from 'next/image';

const Footer = () => {
  return (
    <div className=' flex flex-col justify-center items-center mt-[47px] mb-[73.6px] gap-[36px] text-[#111827]'>
        <div className='flex items-center gap-[48px]'>
            <Image src={FaceBook} alt="Facebook" className="w-[24px] h-[27.5px]" />
            <Image src={insta} alt="instagram" className="w-[24px] h-[27.5px]" />
            <Image src={twitter} alt="twitter" className="w-[24px] h-[27.5px]" />
            <Image src={youtube} alt="youtube" className="w-[24px] h-[27.5px]" />
        </div>
        <div className='flex items-center gap-[48px] max-sm:flex-col'>
            <p className=' text-lg text-[--gray-900, #111827] font-bold'>Conditions of Use</p>
            <p className=' text-lg text-[--gray-900, #111827] font-bold'>Privacy & Policy</p>
            <p className=' text-lg text-[--gray-900, #111827] font-bold'>Press Room</p>
        </div>
        <p>© 2021 MovieBox by Adriana Eka Prayudha FIgma And Amity HNG Assign</p>
    </div>
  )
}

export default Footer
