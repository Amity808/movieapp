import FaceBook from './images/facebook.svg';
import insta from "./images/insta.svg"
import twitter from "./images/twitter.svg"
import youtube from "./images/youtube.svg"
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
        <div>
            <Image src={FaceBook} alt="Facebook" className="w-[24px] h-[27.5px]" />
            <Image src={insta} alt="instagram" className="w-[24px] h-[27.5px]" />
            <Image src={twitter} alt="twitter" className="w-[24px] h-[27.5px]" />
            <Image src={youtube} alt="youtube" className="w-[24px] h-[27.5px]" />
        </div>
        <div>
            <p className=' text-lg text-[--gray-900, #111827] font-bold'>Conditions of Use</p>
            <p className=' text-lg text-[--gray-900, #111827] font-bold'>Privacy & Policy</p>
            <p className=' text-lg text-[--gray-900, #111827] font-bold'>Press Room</p>
        </div>
    </div>
  )
}

export default Footer
