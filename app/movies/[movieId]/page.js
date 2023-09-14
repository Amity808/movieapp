'use client'
import { useRouter } from 'next/navigation';
import { fetchData, movieOptions } from '@/libs/fetch';
import SideBar from '@/app/components/SideBar';
import MovieDetail from '@/app/components/MovieDetails';

async function MovieDetails({ params }) {
  const router = useRouter();
//   const { id } = router.query;

  let moviesData;
  moviesData = await fetchData(`https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US`, movieOptions)
  const data = await moviesData
    console.log(data);
  // Fetch movie details based on the `id` parameter and render them

  return (
    <div>
      {/* Render movie details here */}
      <SideBar />
      <div className=" ml-60 text-2xl py-10  max-sm:ml-0 max-md:ml-0">
        <div>
        
            <MovieDetail overview={data.overview} posterCard={`http://image.tmdb.org/t/p/w500/${data.poster_path}`}
            title={data.original_title} 
            releaseDate={data.release_date} 
            popularity={data.popularity} 
            runtime={data.runtime}/>
        
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
 