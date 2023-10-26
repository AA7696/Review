import React from 'react'
import reviewData from '../data.js'


const Review = ({index, setIndex}) => {
    const{name, job, image, text} = reviewData[index];

    const checkNumber = (number) => {
        if (number > reviewData.length - 1) {
          return 0;
        }
        if (number < 0) {
          return reviewData.length - 1;
        }
        return number;
      };
      const nextReview = () => {
        setIndex((index) => {
          let newIndex = index + 1;
          return checkNumber(newIndex);
        });
      };

  
  return (
    <div className='review'>
      <div className="img-container">
        <img src={image} alt=""/>
      </div>

      <h2>{name} </h2>
      <h4>{job}</h4>
      <p>{text}</p>

        <div className="btn">
            <button className="prev b">prev</button>
            <button className="next b" onClick={nextReview}>next</button>
        </div>

        <button className='surp'>surprise me</button>
    </div>
  )
}

export default Review
