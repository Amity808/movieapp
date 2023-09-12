import Image from 'next/image'
import Header from './components/Header'
import MovieLists from './components/MovieLists'
import Footer from './components/Footer'
export default function Home() {
  return (
    <main className=''>
      <Header />
      <MovieLists />
      <Footer />
      Movie App
    </main>
  )
}