import Body from './components/Body'
import About from './components/About'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './components/Profile'
import Accordion from './components/Accordion'
import Comments from './components/comments/Comments'
import ImageSlider from './components/slider/ImageSlider'
import LiveStream from './components/live-chat/LiveStream'
import SearchUI from './components/search-ui/SearchUI'


function App() {

  return (
    <>
    {/* TODO: Use Link instead of <a> to follow SPA currently href is doing page reload */}
    <header className='flex justify-between bg-green-400 p-5'>
      <h1 className='font-bold'>Random Memes</h1>
      <nav className='text-white text-lg'>
        <a className='p-2' href="/">Home</a>
        <a className='p-2' href="/about">About</a>
        <a className='p-2' href="/accordion">Accordion</a>
        <a className='p-2' href="/image-slider">Image Slider</a>
        <a className='p-2' href="/live-chat">Live Chat</a>
        <a className='p-2' href="/comments">Nested Comments</a>
        <a className='p-2' href="/search-ui">Search UI</a>
        <a className='p-2' href="/profile">Profile</a>
      </nav>
    </header>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/accordion' element={<Accordion/>}></Route>
        <Route path='/comments' element={<Comments/>}></Route>
        <Route path='/image-slider' element={<ImageSlider/>} ></Route>
        <Route path='/search-ui' element={<SearchUI/>} ></Route>
        <Route path='/live-chat' element={<LiveStream/>}></Route>
        <Route element={<ProtectedRoute/>}>
          <Route path='/profile' element={<Profile/>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
