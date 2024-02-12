import Link from "next/link";

import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { PiCookingPotBold } from "react-icons/pi";

export const Navbar = () => {
  return (
    <div className={'bg-white flex justify-between py-2 px-4 items-center sticky top-0 pb-4 dark:bg-black'}>
      <div className="flex">
      <Link className="text-xl bg-orange-600 p-2 rounded-full text-white dark:text-[#eee]" href={'/'}><PiCookingPotBold /></Link>
      </div>
      <div className={'flex gap-2 items-center'}>
      <Link className="text-xl  bg-gray-300 dark:bg-[#333] dark:text-[#ccc] p-2 rounded-full text-black" href={'/search'}><FiSearch /></Link>
      <Link className="text-xl  bg-gray-300 dark:bg-[#333] dark:text-[#ccc] p-2 rounded-full text-black" href={'/account'}><AiOutlineUser /></Link>
      </div>
    </div>

  )
}
