import React from 'react'
import VideoPlayer from './VideoPlayer'
import ChatWindow from './ChatWindow'

const LiveStream = () => {
  return (
    <div className='flex m-2'>
      <VideoPlayer/>
      <ChatWindow/>
    </div>
  )
}

export default LiveStream