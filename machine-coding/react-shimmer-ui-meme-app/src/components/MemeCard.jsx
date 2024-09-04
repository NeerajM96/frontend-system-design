import React from 'react'

const MemeCard = ({meme}) => {
    const {url, title} = meme
  return (
    <div className='p-5 m-5 border border-black rounded-md'>
        <img className="h-64 w-64" src={url} alt="" />
        <p>{title}</p>
    </div>

  )
}

export default MemeCard