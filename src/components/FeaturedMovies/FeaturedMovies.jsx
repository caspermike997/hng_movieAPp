import React from 'react'
import "./featured.css"
import { icons } from '../../assets/icons'



const FeaturedMovies = () => {
  return (
    <div className='featured-head'>
        <div className='mov'>
            
        <div>
        <h2 className='fm'>Featured Movie</h2>
        </div>

        <div className='sm'>
        <h4>see more</h4>
        {icons.arrow}
        </div>
        
        </div>


    </div>
  )
}

export default FeaturedMovies