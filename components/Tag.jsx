import React from 'react'

export const Tag = ({ tagCat }) => {
  return (
    <div>
        <p className="text-sm bg-gray-200 dark:bg-[#222] dark:text-[#ccc] w-fit py-1 px-4 rounded-full cursor-pointer">{tagCat}</p>
    </div>
  )
}
