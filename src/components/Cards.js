import React from 'react'
import { Link } from 'react-router-dom'

function Cards({ engine, horsepower, image, make, model, price, time, user, id, singleCarFetch, setPageId}) {

    return (
        <div className='flip-card'>
            <div className='inner'>
                <div className='front'>
                    <img src={image} alt="car" />
                    <h1>{make} {model}</h1>
                </div>
                {user ?
                    <div className='back'>
                       <button className='review' onClick={()=>{singleCarFetch(id)}}><Link to={`/${id}`}><a id='Sign up' className='review' href='/CarReviews'>Add Review</a></Link> </button>
                        <div className='back-container'>
                            <div className='back-info'>
                                <h1>{make} {model}</h1>
                                <p>{engine}</p>
                                <p>{price}</p>
                                <p>{horsepower}</p>
                                <p>{time}s 0-60 Time</p>
                            </div>
                            <div className='back-image'>
                                <img src={image} alt='car' />
                            </div>
                        </div>
                        <button className='btm-btn'>Wishlist</button>
                        <button className='fav-btn'>Favorite</button>
                    </div>
                    :
                    <div className='back'>
                        <button className='review'>Reviews</button>
                        <div className='back-container'>
                            <div className='back-info'>
                                <h1>{make} {model}</h1>
                                <p>{engine}</p>
                                <p>{price}</p>
                                <p>{horsepower}</p>
                                <p>{time}s 0-60 Time</p>
                            </div>
                            <div className='back-image'>
                                <img src={image} alt='car' />
                            </div>
                        </div>
                        <p className='please'>Please sign up or log in to add reviews, and to favorite cars, or add them to your wishlist.</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cards