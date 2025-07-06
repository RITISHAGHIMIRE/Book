import React from 'react'
import bannerImg from '../../assets/news/booksss.png.png'
const Banner = () => {
  return (
<div  className='w-11/12 mx-auto flex flex-col md:flex-row-reverse justify-between items-center gap-12'>

  <div className='md:w-1/2 w-full flex items-center md:justify-end'>

  <img src={bannerImg } alt=''/>
  </div>
  <div className='md:w-1/2 w-full'>
    <h1 className='md:text-5xl text-2xl font-medium mb-7'> New Realease this week </h1>
     <p className='mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>
 
<button className='bg-primary px-12 py-2 rounded-md text-base font-secondary font-bold hover:bg-yellow-600 text-white transition-all duration-200 cursor-pointer'>Subscribe</button>
  
  </div>
</div>
  )
}

export default Banner