'use client'
import Image from 'next/image'
import searBarIcon from "./images/search.svg"
import { fetchData, movieOptions  } from "../../libs/fetch"
import { getSearch } from "../../libs/getSearch"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import MovieCard from './MovieCard'

export default  function SearchBar( ) {
  const [search, setSearch] = useState('')
  const [searchResult, setsearchResult] = useState([])
  
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
    <div className='flex items-center border-2 border-solid rounded-sm'>
      <form onSubmit={handleSearch}>
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='What do you want to watch?' className=' text-base font-normal text-white bg-transparent border-1 border-solid w-[525px] border-[var(--gray-300, #D1D5DB)] pl-3' />
        <Image src={searBarIcon} alt="Searchicon" className=" relative right-5"/>
      </form>
      {/* <p className=' text-red'> {}</p> */}
      
      {searchResult.length > 0 &&  <div className=''>
        {searchResult.map((movie) => (
          <MovieCard title={movie.original_title} releaseDate={movie.release_date} popularity={movie.popularity} 
          posterCard={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
        ))}
      </div> }
    </div>
  )
}
