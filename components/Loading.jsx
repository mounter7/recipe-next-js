import { PiCookingPotBold } from "react-icons/pi";

export function Loading() {
  return (
    <div className={'flex justify-center items-center h-[60vh] w-[100vw]'}>
      <div className="text-5xl bg-orange-600 p-2 rounded-full text-white dark:text-[#eee]"><PiCookingPotBold className={"text-5xl"} /></div>
    </div>
  )
}
