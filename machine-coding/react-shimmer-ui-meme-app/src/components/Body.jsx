import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';

const Body = () => {
    const [memes, setMemes] = useState([]);
    const [showSimmer, setShowSimmer] = useState(false)

    useEffect(()=>{
        fetchMemes();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = ()=>{
        if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
            fetchMemes()
        }
    }
    
    const fetchMemes = async ()=>{
        setShowSimmer(true);
        const data = await fetch('https://meme-api.com/gimme/20')
        const json = await data.json()
        setShowSimmer(false);
        setMemes((memes) => [...memes, ...json.memes]);
    }
  return (
    <div className='grid grid-cols-5'>
        {memes.map((meme,i) =>  <MemeCard key={i} meme={meme} /> ) }
        {showSimmer && <Shimmer/> }
    </div>
  )
}

export default Body