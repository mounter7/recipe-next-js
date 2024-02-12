import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";
import Image from 'next/image';
import Img1 from '../assets/img1.jpg';

export const LoggedItem = ({meal}) => {
  return (
    <div className="max-w-[100%] mb-4">
      <div className="w-[100%] h-[180px] bg-gray-200 dark:bg-[rgb(51,51,51)]">
        <Link href={`/account/user/info/${meal?.idMeal}`}>
        <Image 
        src={meal?.strMealThumb} 
        className="w-[100%] h-[100%] object-cover" 
        alt="img"
        loading="lazy"
        width={240}
        height={150}
        />
        </Link>
      </div>
      <div className="w-[100%] flex justify-between pt-2">
        <div className="">
        <h3 className="text-xl dark:text-[#eee] mr-8">{meal?.strMeal}</h3>
        {/* <div className="flex gap-1">
        <p className="text-[12px] bg-gray-200 w-fit mt-2 py-1 px-4 rounded-full cursor-pointer">Cake</p>
        <p className="text-[12px] bg-gray-200 w-fit mt-2 py-1 px-4 rounded-full cursor-pointer">Cake</p>
        </div> */}
        </div>
        <div className="text-3xl cursor-pointer dark:text-[#ccc]">
          <MdFavoriteBorder />
        </div>
      </div>
    </div>
  )
}
