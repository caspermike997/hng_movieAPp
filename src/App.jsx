import { useState } from 'react'
import MovieBox from './components/movieheader/MovieBox'
import Footer from './components/Footer/Footer'
import FeaturedMovies from './components/FeaturedMovies/FeaturedMovies'



function App() {
 
  return (
    <>  
        <MovieBox />
        <FeaturedMovies />
        <Footer /> 
        
    </>
  )
}

export default App
