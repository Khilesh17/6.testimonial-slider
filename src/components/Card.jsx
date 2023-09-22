import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function Card({review}) {
  return (
      <div className='card'>
          <div className='img-div'>
            <img className='image' src={review.image} alt="image1" />
            <div className='circle'></div>
          </div>

          <div className='name-div'>
              <p className='name'>{review.name}</p>
          </div>

          <div className='job-div'>
              <p className='job'>{review.job}</p>   
          </div> 
          
          <div className='upper-quote'>
              <FaQuoteLeft/>
          </div>

          <div className='review'>
              <p>{review.text}</p>
          </div>

          <div className='lower-quote'>
                <FaQuoteRight/>
          </div>
        </div>
    )
}
