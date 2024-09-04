import React from 'react'

const Shimmer = () => {
  return (
    Array(20).fill(0).map((n,i) =>(
      <div className='p-5 m-5 border border-black rounded-md' key={i}>
        <div className="h-64 max-[64] bg-gray-200"></div>
        <p className='bg-gray-200 p-4 mt-2'></p>
    </div>
    ))
  )
}

export default Shimmer