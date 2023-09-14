import Image from "next/image"
import IMDB from "./images/imdb.png";
import Orange from "./images/orange.png";
import heart from "./images/heart.png";
import tickets from "./images/tickets.png";
import list from "./images/list.png";

import Link from "next/link";

const MovieDetail = ({  posterCard, releaseDate, title, runtime, popularity, vote_average, overview}) => {
  return (
    <div className=" flex flex-col justify-center items-center" data-testid="movie-card">
          <Image src={posterCard} alt="Movie Image" data-testid="movie-poster" width={700} height={400} className=""/>
        <div className="flex flex-row justify-around">
            <div className=" flex flex-row gap-9">
              <h3 className=" text-lg font-bold text-black pt-2" data-testid="movie-title">{title}</h3>
              <p className=" text-xs font-bold pt-3" data-testid="movie-release-date">{releaseDate}</p>
              <p className=" text-xs font-bold pt-3" data-testid="movie-runtime">{runtime}</p>
              <p>Action</p>
              <p>Drama</p>
            </div>
            <div>
              <p>Rate | 350k</p>
            </div>
        </div>
        <div >
          <div>
            <p data-testid="movie-overview">{overview}</p>
          </div>
          <div className="">
            <button className="flex flex-row bg-[#BE123C] border-1 rounded-[10px] py-2 px-8 justify-center">
              <Image src={tickets} width={25} height={25}  />
              See Showtimes
              </button>
            <button className=" flex flex-row bg-white/60 border-[#BE123C] border-1 rounded-[10px] py-2 px-8">
              <Image src={list} width={25} height={25}  />
              More watch options
              </button>
          </div>
        </div>
        
    </div>
  )
}

export default MovieDetail
