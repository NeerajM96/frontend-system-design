import React, { useState } from 'react'

const AccordionItem = ({title,body, showBody, setShowBody}) => {
    // const [showBody, setShowBody] = useState(false)
  return (
    <div className='border border-black cursor-pointer' onClick={()=>setShowBody()}>
        <div className='bg-slate-200 p-4 flex justify-between'>
            <span>{title}</span>
            <span>&#8693;</span>
        </div>
        {showBody && <div className='p-4'>{body}</div>}
    </div>
  )
}

export default AccordionItem