import { Navbar } from '../../../components/Navbar'
import React from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import Image from 'next/image';
import Link from "next/link";

async function getData(id) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function page({ params }) {

  const { id } = params;

  // Fetch data
  const data = await getData(id);


  return (
    <div>
      <Navbar />
      <div className='max-w-[900px] mx-auto p-4'>

        <div className={'flex flex-col'}>
          <h1 className='dark:text-[#ccc] text-3xl mb-2'>{data?.meals[0]?.strMeal}</h1>
          <Link href={'/account'}><MdFavoriteBorder className={'dark:text-[#ccc] text-4xl mb-8 cursor-pointer'} /></Link>
        </div>
        <div className={'bg-gray-200 dark:bg-[#333] w-[100%] h-[150px]'}>
          <Image
            src={data?.meals[0]?.strMealThumb}
            className="w-[100%] h-[100%] object-cover"
            alt="img"
            loading="lazy"
            width={400}
            height={200}
          />
        </div>
        <div className="bg-white dark:bg-black max-w-[1400px]">
          {/* <div className="flex gap-2 py-2 mt-2 mb-2 flex-wrap">
            <p className="text-sm bg-gray-200 dark:bg-[#222] dark:text-[#ccc] w-fit py-1 px-4 rounded-full cursor-pointer">Cheese</p>
            <p className="text-sm bg-gray-200 dark:bg-[#222] dark:text-[#ccc] w-fit py-1 px-4 rounded-full cursor-pointer">Kottu</p>
            <p className="text-sm bg-gray-200 dark:bg-[#222] dark:text-[#ccc] w-fit py-1 px-4 rounded-full cursor-pointer">Oil</p>
          </div> */}
          <div className={'my-8'}>
            <h2 className={'dark:text-[#ccc] text-2xl mb-2'}>Ingredients</h2>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
              const ingredient = data?.meals[0][`strIngredient${index}`];
              const measurement = data?.meals[0][`strMeasure${index}`];

              if (ingredient && measurement) {
                return (
                  <li key={index} className="dark: text-[#999]">
                    <span className={'font-semibold'}>{ingredient}:</span> {measurement}
                  </li>
                );
              }

              return null;
            })}
          </div>
          <div className={'my-8'}>
            <h2 className={'dark:text-[#ccc] text-2xl mb-2'}>Preparation</h2>
            {data?.meals[0]?.strInstructions.split('\r\n').map((step, index) => (
                <li className={'dark: text-[#999] mb-2'} key={index}>{step}</li>
              ))}
          </div>
        </div>
      </div>

    </div>
  )
}
