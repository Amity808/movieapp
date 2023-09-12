'use client'
import Image from 'next/image'
import searBarIcon from "../components/images/search.svg"
import { fetchData, movieOptions  } from "../../libs/fetch"
import { useState } from 'react'
export default function SearchBar() {

  const [search, setSearch] = useState('');
  
  
  const handleSearch = async (e) => {
    e.preventDefault();
    if(search) {
      const searchUrl = fetchData(`https://api.themoviedb.org/3/search/movie?query=${search}`, movieOptions)
      

      const data = await searchUrl
      console.log(data.results)

      const names = data.results.map(item => item.original_title)
      console.log(names)
      return data;
    }
  }
  return (
    <div className='flex items-center border-2 border-solid rounded-sm bg-black'>
      <form onSubmit={handleSearch}>
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='What do you want to watch?' className=' text-base font-normal text-white bg-transparent border-1 border-solid w-[525px] border-[var(--gray-300, #D1D5DB)] pl-3' />
        <Image src={searBarIcon} alt="Searchicon" className=" relative right-5"/>
      </form>
    </div>
  )
}
