import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar';
const ViewNews = () => {
    let location = useLocation();
    console.log(location.state);
  return (
    <div className='w-full h-screen bg-zinc-200 flex justify-center items-center'>
      <div className=" w-[90%] h-[80%] flex gap-4 rounded-xl items-center">
        <img src={location.state.urlToImage} className='bg-red-300 w-[40%] h-[90%] object-cover object-center rounded-xl' alt="" />
        <div className='w-[60%] h-[100%] overflow-auto px-4 py-6 flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>{location.state.title}</h1>
            <h2 className='text-lg font-semibold'>By {location.state.author? location.state.author : "Anonymous"}</h2>
            <h4 className='text-lg font-semibold'>From {location.state.source.name}</h4>
            <div>{location.state.description}</div>
            <p className='tracking-none text-lg'>
           {location.state.content}
            </p>
            <a className='text-blue-800 border-[1px] border-blue-900 text-center w-32 rounded-xl py-1 transition duration-200 ease-linear hover:bg-blue-800 hover:text-white'href={location.state.url}>Read full Article</a>
        </div>
      </div>
    </div>
  )
}

export default ViewNews;
