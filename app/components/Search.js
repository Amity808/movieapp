'use client'
import Image from 'next/image'
import searBarIcon from "./images/search.svg"
import { fetchData, movieOptions  } from "../../libs/fetch"
// import { g } from "../../libs/getSearch"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar( ) {
  const [search, setSearch] = useState('')
  
  const router = useRouter();

  let data;
  const handleSearch = async (e) => {
    e.preventDefault();
    setSearch('')
    router.push(`/${search}`)

    if(search) {
      const searchUrl = await fetchData(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, movieOptions)
      

      data = await searchUrl
      console.log(data.results)
      // setSearchData(data)
      setSearch(data)
      // const names = data.results.map(item => item.original_title)
      // console.log(names)
      return data;
    }
  }

  console.log(search)
  return (
    <div className='flex items-center border-2 border-solid rounded-sm'>
      <form onSubmit={handleSearch}>
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='What do you want to watch?' className=' text-base font-normal text-white bg-transparent border-1 border-solid w-[525px] border-[var(--gray-300, #D1D5DB)] pl-3' />
        <Image src={searBarIcon} alt="Searchicon" className=" relative right-5"/>
      </form>
      {/* <p className=' text-red'> {}</p> */}
    </div>
  )
}
