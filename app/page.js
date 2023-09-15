// 'use client'
import Header from './components/Header'
import MovieLists from './components/MovieLists'
import Footer from './components/Footer'




export default  function Home() {
  // const [searchData, setSearchData] = useState([])
  return (
    <main className=''>
      <Header />
      <MovieLists pageTitle="Featured Movie" />
    </main>
  )
}
