import Link from "next/link";
import { PiCookingPotBold } from "react-icons/pi";

export default function Account() {
  return (
    <div className="">
        <Link href={'/'} className="flex justify-center mt-[100px] mb-[30px]">
        <PiCookingPotBold className="bg-orange-600 p-2 text-5xl rounded-full text-white" />
        </Link>
        <div className="flex mt-4 flex-col items-center gap-2">
        <Link href={'/account/signin'} className="w-[140px] text-center bg-black dark:bg-[#333] text-white dark:text-[#ccc] py-2 px-8 rounded-lg">Sign in</Link>
        <Link href={'/account/signup'} className="w-[140px] text-center bg-black dark:bg-[#333] text-white dark:text-[#ccc] py-2 px-8 rounded-lg">Sign up</Link>
        </div>
    </div>
  )
}
