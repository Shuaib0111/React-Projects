import React, { useContext, useEffect, useState } from 'react'
import '../Styles/LeftSection.css';
import { Link } from 'react-router-dom';
import SearchContext from '../context/SearchContext';
const LeftSection = () => {
    let ctx = useContext(SearchContext)
    let URL = `https://newsapi.org/v2/everything?q=${ctx.search?ctx.search:'cricket'}&apiKey=0dbb380e581a47aa88322ebc0387dd70`;
    let [data, setData] = useState([]);

    let callApi = async()=>{
        let result = await fetch(URL);
        let jsonResult = await result.json();
        setData(jsonResult.articles);
        
    }
    // console.log(data)
    useEffect(() => {
        callApi();
    },[ctx.search]);
  return (
    <div className='left w-[70%] h-screen mt-5 flex gap-1 flex-wrap m-2'>
        {
            data.map((el,id)=>{
                return(
                   el.urlToImage && <div className='border-[1px] w-[100%] max-h-62 flex'>
        <img src={el.urlToImage} className='w-[40%] h-[100%] object-center object-cover' alt="" />
        <div className='flex flex-col w-[60%] px-2 justify-between'>
            <div>
            <h2 className='font-semibold text-2xl'>{el.title}</h2>
            <p className='mt-2'>{el.description}</p>
            </div>
            <Link to={'/view'} state={el}><button className='mb-2 w-32 outline-none px-2 py-1 rounded-xl border-[1px] border-blue-900'>Explore</button></Link>
        </div>
        </div>
                )
            })
        }
        
    </div>
  )
}

export default LeftSection


