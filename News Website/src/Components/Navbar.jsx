import React, { useContext, useRef } from 'react'
import SearchContext from '../context/SearchContext'
import '../Styles/Navbar.css';
const Navbar = () => {
  let ctx = useContext(SearchContext)
  let searchRef = useRef()
  return (
    <div className='navbar w-full h-20 px-5 py-2 flex justify-between items-center'>
      <div className="logo w-[30%] h-[100%]">
        <img src="src\Images\NewsLogo.png" className='h-[100%] w-[90%] object-center object-cover' alt="" />
      </div>
      <div className="navlinks px-6 w-[40%]">
        <ul className='flex gap-12'>
            <li className='text-lg font-semibold'>Home</li>
            <li className='text-lg font-semibold'>Sports</li>
            <li className='text-lg font-semibold'>Marketting</li>
            <li className='text-lg font-semibold'>Science</li>
            
        </ul>
      </div>
      <div className="search w-[30%] flex gap-6 px-4">
        <input ref={searchRef} type="text" placeholder='Search for news' className='px-2 py-1 bg-transparent outline-none border-[1px] bg-transparent border-zinc-500 rounded-lg placeholder:text-zinc-500' />
        <button onClick={()=>ctx.setsearch(searchRef.current.value)} className='border-[1px] border-black outline-none px-3 rounded-xl'>Search</button>
      </div>
    </div>
  )
}

export default Navbar
