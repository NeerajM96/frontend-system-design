import React from 'react'


const ChatMessage = ({name,avatar,message}) => {
  return (
    <div className='flex items-center'>
        <img className='w-12 h-12 rounded-full m-2' src={avatar} alt="avatar-img" />
        <p className='font-bold'>{name} - </p>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage