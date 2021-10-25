import React from 'react'
import magnify from '../magnifier.png'

export default function Search({ handleClick, search, searchCar, setSearchCar }) {

    return (
        <div className='search-info'>
            {search ?
                <input placeholder='Search Cars...' className='search' value={searchCar} onChange={(e) => setSearchCar(e.target.value)} />
                :
                <img className='search-icon' onClick={handleClick} src={magnify} alt='magnifying glass' />
            }
        </div>
    )
}