import arrowPNG from "./images/arrow.svg"
import Image from "next/image";
import MovieCard from "./MovieCard";
const MovieLists = () => {
  return (
    <div className=" py-[98px] px-[70px]">
      <div className="flex flex-row items-center justify-between">
        <p className=" text-[36px] font-bold text-black">Featured Movie</p>
        <button className=" flex text-center">See more 
            <Image src={arrowPNG} alt="arrow" className="w-[20px] h-[20px] pt-1" />
        </button>
      </div>
      <div>
        <MovieCard />
      </div>
    </div>
  )
}

export default MovieLists
