import Image from 'next/image'
import searBarIcon from "./images/search.svg"
export default function SearchBar() {
  return (
    <div className='flex items-center border-2 border-solid rounded-sm'>
      <input type='text' placeholder='What do you want to watch?' className=' text-base font-normal text-white bg-transparent border-1 border-solid w-[525px] border-[var(--gray-300, #D1D5DB)] pl-3' />
      <Image src={searBarIcon} alt="Searchicon" className=" relative right-5"/>
    </div>
  )
}
