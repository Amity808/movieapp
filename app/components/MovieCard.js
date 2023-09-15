import Image from "next/image"
import IMDB from "./images/imdb.png";
import Orange from "./images/orange.png";
import heart from "./images/heart.png";
import Link from "next/link";

const MovieCard = ({ id, posterCard, releaseDate, title, popularity, vote_average}) => {
  return (
    <div className=" pt-[44px]" data-testid="movie-card">
        <Image src={heart} alt="favorite" className=" w-[30px] h-[29px] bg-[#F3F4F680] relative top-9  ml-[200px]" />
        <Link href={`/movies/${id}`}>
          <Image src={posterCard} alt="Movie Image" data-testid="movie-poster" width={250} height={370} />
        </Link>
        <div>
            <p className=" text-xs font-bold pt-3" data-testid="movie-release-date">{releaseDate}</p>
            <Link href={`/movies/${id}`}>
              <h3 className=" text-lg font-bold text-black pt-2" data-testid="movie-title">{title}</h3> 
            </Link>
        </div>
        <div className=" inline-flex flex-row gap-[80px] mt-4 pt-2">
            <span className=" flex flex-row gap-[10px]">
            <Image src={IMDB} alt="IMDB" className=" w-[35px] h-[17px]" />
            <p className=" text-xs font-normal text-black">{popularity}</p>
            </span>
            <span className=" flex flex-row gap-[10px]">
            <Image src={Orange} alt="Orange" className=" w-[16px] h-[17px]" />
            <p className=" text-xs font-normal text-black">{vote_average}%</p>
            </span>
        </div>
        <p className=" text-[#9CA3AF] text-xs font-bold pt-3">Action, Adventure, Horror</p>
    </div>
  )
}

export default MovieCard
