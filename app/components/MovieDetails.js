import Image from "next/image"
import IMDB from "./images/imdb.png";
import Orange from "./images/orange.png";
import heart from "./images/heart.png";
import tickets from "./images/tickets.png";
import list from "./images/list.png";
// import Image  from "next/image";
import Link from "next/link";

const MovieDetail = ({  posterCard, releaseDate, title, runtime, popularity, vote_average, overview}) => {
  return (
    <div className=" flex flex-col justify-center items-center" data-testid="movie-card">
          <Image src={posterCard} alt="Movie Image" data-testid="movie-poster" width={200} height={200} className=""/>
        <div className="flex flex-row items-center gap-12 max-sm:flex-col max-sm:gap-4">
            <div className=" flex flex-row gap-9">
              <h3 className=" text-lg font-bold text-black pt-2" data-testid="movie-title">{title}</h3>
              <p className=" text-xs font-bold pt-3" data-testid="movie-release-date">{releaseDate}</p>
              <p className=" text-xs font-bold pt-3" data-testid="movie-runtime">{runtime}</p>
            </div>
            <div className=" flex max-sm:flex-col max-sm:gap-1 gap-4">
              <p className=" text-base">Action</p>
              <p className=" text-base">Drama</p>
            </div>
            <div>
              <p className="text-base">{popularity} | 350k</p>
            </div>
        </div>
        <div className=" flex flex-row max-sm:flex-col max-md:flex-col gap-4">
          <div className=" w-[400px]">
            <p data-testid="movie-overview" className=" text-xl">{overview}</p>
          </div>
          <div className=" flex flex-col">
            <div className="flex flex-row bg-[#BE123C] border-1 rounded-[10px] py-2 px-8 justify-center">
              <Image src={tickets} width={25} height={25} alt="ticket" />
              <p className="max-sm:text-sm max-md:text-sm text-base">See Showtimes</p>
              </div>
            <div className=" flex flex-row bg-[#f8e7eb] border-[#BE123C] border-1 rounded-[10px] py-2 px-8 justify-center">
              <Image src={list} width={25} height={25} alt="ticket" />
              <p className=" text-base max-sm:text-sm max-md:text-sm">More watch options</p>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default MovieDetail
