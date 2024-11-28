import React, { useEffect, useState } from 'react'
import '../Styles/RightSection.css';
const RightSection = () => {
  const URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0dbb380e581a47aa88322ebc0387dd70";
  let [news,setNews] = useState([]);
  const getAPI = async()=>{
    const res = await fetch(URL);
    const finalRes = await res.json();
    setNews(finalRes.articles);
  }
  console.log(news);
  useEffect(()=>{
    getAPI();
  },[]);
  return (
    <div className=' w-[30%] h-screen bg-zinc-100 mt-5 p-2'>
      <h1 className='text-2xl text-black bg-zinc-300 py-2 text-center font-bold tracking-tight'>Trending News</h1>
      <hr />
      <div className='right news-container w-[100%] h-[90%] flex gap-4 flex-col px-2'>
        {news.map((el,i)=>{
          return(
            <div className='headlines'><li><a href={el.url}>{el.title}</a></li></div>
          )
        })}
      </div>
    </div>
  )
}

export default RightSection
