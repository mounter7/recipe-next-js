'use client'

import Link from "next/link";

import { FiSearch } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdPower } from "react-icons/io";
import { PiCookingPotBold } from "react-icons/pi";
import axios from "axios";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";

export const LoggedNavbar = () => {

  const router = useRouter()

  const logout = async () => {
    try {
        await axios.get('/api/users/logout')
        toast.success('Logout successful')
        router.push('/account/signin')
    } catch (error) {
        console.log(error.message);
        toast.error(error.message)
    }
}

  return (
    <div className={'bg-white flex justify-between py-2 px-4 items-center sticky top-0 pb-4 dark:bg-black'}>
      <div className="flex">
      <Link className="text-xl bg-orange-600 p-2 rounded-full text-white dark:text-[#eee]" href={'/account/user'}><PiCookingPotBold /></Link>
      </div>
      <div className={'flex gap-2 items-center'}>
      <Link className="text-xl  bg-gray-300 dark:bg-[#333] dark:text-[#ccc] p-2 rounded-full text-black" href={'/search'}><FiSearch /></Link>
      <Link className="text-xl bg-gray-300 dark:bg-[#333] dark:text-[#ccc] p-2 rounded-full text-black" href={'/fav'}><MdFavoriteBorder /></Link>
      <IoMdPower onClick={logout} className="cursor-pointer text-4xl  bg-gray-300 dark:bg-[#333] dark:text-[#ccc] p-2 rounded-full text-black" />
      </div>
    </div>

  )
}
