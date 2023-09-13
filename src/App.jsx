import { useState } from 'react'
import MovieBox from './components/movieheader/MovieBox'
import Footer from './components/Footer/Footer'
import FeaturedMovies from './components/FeaturedMovies/FeaturedMovies'
import MovieCard from './components/moviecards/MovieCard'



function App() {
 
  return (
    <>  
        {/* <MovieBox />
        <FeaturedMovies />
        <Footer />  */}
        
        <MovieCard />
    </>
  )
}

export default App
