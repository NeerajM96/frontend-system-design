import React, { useEffect, useState } from 'react'

const ImageSlider = () => {
  const images = [
    'https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1144230/pexels-photo-1144230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3532559/pexels-photo-3532559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1144241/pexels-photo-1144241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

  ]

  const loadNextImage = ()=>{
    setActive(active => (active+1)%images.length)
  }

  const loadPrevImage = ()=>{
    setActive(active => active-1 <0 ? images.length-1 : active-1)
  }

  useEffect(()=>{
    const intervalID = setInterval(()=>{
      loadNextImage()
    },4000)

    return () => clearInterval(intervalID)
  },[])

  const [active, setActive] = useState(0);
  return (
    <div className='flex items-center justify-center m-10'>
      <div>
        <img className='w-20 cursor-pointer' onClick={loadPrevImage}
        src={'src/assets/icons/left_arrow_icon.png'} alt="left-arrow" />
      </div>
      <div>
        <img className='w-[800px]' src={images[active]} alt="" />
      </div>
      <div>
        <img className='w-20 cursor-pointer' onClick={loadNextImage}
        src={'src/assets/icons/right_arrow_icon.png'} alt="left-arrow" />
      </div>
    </div>
  )
}

export default ImageSlider