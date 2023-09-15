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
    if(search) {
      const searchUrl = await fetchData(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, movieOptions)
      

      const data = await searchUrl.results.slice(0, 10)
      console.log(data)
      // setSearchData(data)
      setsearchResult(data)
      setSearch('')
      return data;
    }
  }
  
  
  return (
    <div className=''>
      <form onSubmit={handleSearch} className='flex items-center border-2 border-solid rounded-sm justify-center max-sm:ml-16 max-sm:w-[250px]'>
        <input type='text' value={search} onClick={() => settoggle(true)} onChange={(e) => setSearch(e.target.value)} placeholder='What do you want to watch?' className=' text-base font-normal border-none text-white bg-transparent  w-[525px] max-sm:w-[200px] max-md:w-[250px] pl-3 max-sm:pl-0 ' />
        <Image src={searBarIcon} alt="Searchicon" className="relative right-5"/>
      </form>
      
      {toggle && (
        // <div className='flex justify-center relative  z-10 left-0 top-0 items-center bg-white/80 overflow-auto'>
        <>
        {searchResult.length > 0 &&
        <div className='relative z-10 bg-white/80 overflow-auto h-[300px] max-sm:h-[700px]'>      
        <Suspense fallback={<h2>Loading......</h2>}></Suspense>
        <button onClick={() => settoggle(false)} className='relative text-red-700 ml-8 mt-5 rounded-sm p-2 border-2 border-solid'>cancel search</button>
          <div className='grid grid-cols-1 gap-y-10 mr-5 ml-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-5 xl:gap-y-4 max-sm:ml-20'>
            {searchResult.map((movie, i) => ( <>
              <MovieCard key={i} id={movie.id} title={movie.original_title} releaseDate={movie.release_date} popularity={movie.popularity} 
              posterCard={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
              </>
              ))}
          </div>
          </div>}
        </>
        // </div>
      )}
    </div>
  )
}
