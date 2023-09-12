import Image from "next/image"
import PosterCard from "./images/posterCard.png";
import IMDB from "./images/imdb.png";
import Orange from "./images/orange.png";
import heart from "./images/heart.png";

const MovieCard = () => {
  return (
    <div className=" pt-[44px]">
        <Image src={heart} alt="favorite" className=" w-[30px] h-[29px] bg-[#F3F4F680] relative top-9 " />
        <Image src={PosterCard} alt="Movie Image" className=" w-[250px] h-[370px]" />
        <div>
            <p className=" text-xs font-bold pt-3">USA, 2016 - Current</p>
            <h3 className=" text-lg font-bold text-black pt-2">Stranger Things</h3>
        </div>
        <div className=" inline-flex flex-row gap-[80px] mt-4 pt-2">
            <span className=" flex flex-row gap-[10px]">
            <Image src={IMDB} alt="IMDB" className=" w-[35px] h-[17px]" />
            <p className=" text-xs font-normal text-black">86.0/100</p>
            </span>
            <span className=" flex flex-row gap-[10px]">
            <Image src={Orange} alt="Orange" className=" w-[16px] h-[17px]" />
            <p className=" text-xs font-normal text-black">87%</p>
            </span>
        </div>
        <p className=" text-[#9CA3AF] text-xs font-bold pt-3">Action, Adventure, Horror</p>
    </div>
  )
}

export default MovieCard
