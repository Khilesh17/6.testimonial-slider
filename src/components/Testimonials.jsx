import React from 'react'
import Card from './Card'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

export default function Testimonials({ reviews }) {
  
  const [index, setindex] = useState(0);

  function leftBtnHandler() {
    if (index - 1 < 0) {
      setindex(reviews.length - 1);
    }
    else {
      setindex(reviews - 1);
    }
  }

  function rightBtnHandler() {
    setindex((index + 1) % reviews.length);
  }

  function surpriseMeHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);

    setindex(randomIndex);
  }

  return (
    <div className='testimonial'>
      <Card review={reviews[index]}></Card>

      <div className='new-div'>
        <button className='btn' onClick={leftBtnHandler}><FiChevronLeft /></button>
        <button className='btn' onClick={rightBtnHandler}><FiChevronRight /></button>
      </div>

      <div>
        <button className='btn-two' onClick={surpriseMeHandler}>Surprise Me</button>
      </div>
    </div>
  )
}
