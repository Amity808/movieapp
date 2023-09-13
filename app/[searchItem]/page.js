'use client'
import getSearch from '../../libs/getSearch'
import Image from 'next/image'
import searBarIcon from "../components/images/search.svg"
import { fetchData, movieOptions  } from "../../libs/fetch"
import Header from '../components/Header'
// import { useState } from 'react'

export default async function SearchPage() {
  // const [searchResult, setsearchResult] = useState([])
  // if(searchItem) {
      // const searchUrl = await fetchData(`https://api.themoviedb.org/3/search/keyword?query=${searchItem}`, movieOptions)
        
console.log(searchResult);
        // const data = await searchUrl
  // //       // data.results.map(item => item.name)
        // console.log(data)
  // }
  
  return (
    <main>
        <Header setsearchResult={setsearchResult} />
    </main>
  )
}
