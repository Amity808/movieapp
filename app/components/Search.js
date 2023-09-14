'use client'
import Image from 'next/image'
import searBarIcon from "./images/search.svg"
import { fetchData, movieOptions  } from "../../libs/fetch"
import { getSearch } from "../../libs/getSearch"
import { Suspense } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import MovieCard from './MovieCard'

export default  function SearchBar() {
  const [search, setSearch] = useState('')
  const [searchResult, setsearchResult] = useState([])
  const [toggle, settoggle] = useState(true)
  
  useState
  const router = useRouter();
  
  // let data;
  const handleSearch = async (e) => {
    e.preventDefault();
    // router.push(`/${search}`)
    
    if(search) {
      const searchUrl = await fetchData(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, movieOptions)
      

      const data = await searchUrl.results.slice(0, 10)
      console.log(data)
      // setSearchData(data)
      setsearchResult(data)
      setSearch('')
      // const names = data.results.map(item => item.original_title)
      // console.log(names)
      return data;
    }
  }
  
  // const res = await getSearch(search)
  // const result = await res;
  console.log(searchResult);

  
  return (
    <div className=''>
      <form onSubmit={handleSearch} className='flex items-center border-2 border-solid rounded-sm'>
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='What do you want to watch?' className=' text-base font-normal text-white bg-transparent border-1 border-solid w-[525px] border-[var(--gray-300, #D1D5DB)] pl-3' />
        <Image src={searBarIcon} alt="Searchicon" className=" relative right-5"/>
      </form>
      {/* <p className=' text-red'> {}</p> */}
      
      {toggle && (
        <div className='flex justify-center relative  z-10 left-0 top-0 items-center bg-white/80 overflow-auto'>

        {searchResult.length > 0 && 
        <div>      
          <button onClick={() => settoggle(false)} className='relative text-red-700 ml-8 mt-5 rounded-sm p-2 border-2 border-solid'>cancel search</button>
          <div className='grid grid-cols-1 gap-y-10 mr-5 ml-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-5 xl:gap-y-4'>
            {searchResult.map((movie) => (
              <MovieCard id={movie.id} title={movie.original_title} releaseDate={movie.release_date} popularity={movie.popularity} 
              posterCard={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            ))}
          </div>
          </div>}
        </div>
      )}
    </div>
  )
}
