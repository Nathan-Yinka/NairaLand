import React from 'react'
import Navbar from './components/Navbar'
import Carosel from "./components/Carosel";
import Post from './components/Post';

const Trending = () => {
  return (
    <div>
    <nav>
        <Navbar />
    </nav>
    <Carosel/>
    <Post/>
    </div>
  )
}

export default Trending