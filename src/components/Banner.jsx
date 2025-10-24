import React from 'react'

const Banner = () => {
  return (
    <div name="banner" className=''>
      <div className='page_top_space'>
        {/* video */}
        <div>
          <video src='./videos/bannervid.mp4' className='w-full h-screen md:h-[70vh] object-cover' autoPlay muted loop/>
        </div>
      </div>
    </div>
  )
}

export default Banner
