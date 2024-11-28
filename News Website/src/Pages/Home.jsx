import React from 'react'
import Navbar from '../Components/Navbar'
import LeftSection from '../Components/LeftSection'
import RightSection from '../Components/RightSection'
const Home = () => {

  return (
    <div>
      <Navbar></Navbar>
      <div className='flex'>
        <LeftSection ></LeftSection>
        <RightSection></RightSection>
      </div>
    </div>
  )
}

export default Home
