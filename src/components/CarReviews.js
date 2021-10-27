import React, { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function CarReviews (){
    const [singleCar, setSingleCar] = useState([])
    const {id} = useParams()


    useEffect(()=> {
        fetch(`https://fathomless-island-77616.herokuapp.com/cars/${id}`)
            .then(res => res.json())
            .then(setSingleCar)
    },[id])

    console.log(singleCar.reviews)
    const {reviews} =singleCar

    
    const eachReview = reviews.map(review => {
        return review.comment
    }
    )
    console.log(eachReview)

    return (
        <React.Fragment>
          <h1>React Accordion Demo</h1>
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-title">
                <div>review</div>
                <div>+</div>
              </div>
              <div className="accordion-content"></div>
            </div>
          </div>
        </React.Fragment>
      );
    };


export default CarReviews;