import React, { useState } from 'react'
import Search from './Search'
import Cards from './Cards'

export default function LandingPage({ cars, searchIcon, handleSearchIcon }) {
    const [search, setSearch] = useState('')

    const searchList = cars.filter((car) => {
        return car.make.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
            <Search handleSearchIcon={handleSearchIcon} searchIcon={searchIcon} search={search} setSearch={setSearch} />
            <div className='card-container'>
                {searchList.map(car => (
                    <Cards id={car.id}
                        engine={car.engine}
                        horsepower={car.horsepower}
                        image={car.image}
                        make={car.make}
                        model={car.model}
                        price={car.price}
                        time={car.time}
                    />
                ))}
            </div>
        </>
    )
}