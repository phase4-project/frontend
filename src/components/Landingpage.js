import React, { useState } from 'react'
import Cards from './Cards'
import Search from './Search'


function Landingpage({ cars, user, handleClick, search, singleCarFetch, setPageId}) {
    const [searchCar, setSearchCar] = useState('')

    const searchList = cars.filter((car) => {
        return car.make.toLowerCase().includes(searchCar.toLowerCase())
    })

    return (
        <>
            <Search handleClick={handleClick} search={search} searchCar={searchCar} setSearchCar={setSearchCar} />
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
                        user={user}
                        singleCarFetch={singleCarFetch}
                        setPageId={setPageId}
                    />
                ))}
            </div>
        </>
    )
}

export default Landingpage