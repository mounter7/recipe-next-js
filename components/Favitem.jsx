import { IoMdRemoveCircle } from "react-icons/io";
import Image from 'next/image';
import Img1 from '../assets/img1.jpg';

export const Favitem = () => {
  return (
    <div className="p-2 flex max-w-[600px] justify-between border rounded-lg mx-auto mt-2 dark:border-[#222]">
        <div className="flex gap-2">
        <div className="bg-gray-200 dark:bg-[#333] w-[80px] h-[50px]">
        <Image 
        src={Img1} 
        className="w-[100%] h-[100%] object-cover" 
        alt="img"
        loading="lazy"
        placeholder="blur"
        />
        </div>
        <h3 className="max-w-[300px] mr-2 dark:text-[#ccc]">Caramal puddin with papaya ewrew wetrwt</h3>
        </div>
        <IoMdRemoveCircle 
        className="cursor-pointer text-3xl dark:text-[#666]" 
        // onClick={() => onRemove(item.id)} 
        />
    </div>
  )
}
