import MovieCard from "@/app/components/MovieCard";
import { fetchData, movieOptions} from "../../../libs/fetch"

export default async function ({pageTitle}) {
  
    // let data;
    let moviesData;
    moviesData = await fetchData(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, movieOptions)
    const data = await moviesData.results.slice(0, 10)
    
    console.log(data);
    
  
    
    return (
      <div className=" py-[98px] px-[90px]">
        <div className="flex flex-row items-center justify-between">
          <p className=" text-[36px] font-bold text-black">{pageTitle}</p>
          <button className=" flex text-center">See more 
              <Image src={arrowPNG} alt="arrow" className="w-[20px] h-[20px] pt-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            
            {data.map((item, index) => (
              <MovieCard key={index} posterCard={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
              title={item.original_title} releaseDate={item.release_date} popularity={item.popularity} />
            ))}
          
        </div>
      </div>
    )
  }
  