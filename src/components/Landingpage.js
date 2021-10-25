import React from 'react'
import Cards from './Cards'


function Landingpage({ cars, user }) {


    return (
        <div className='card-container'>
            {cars.map(car => (
                <Cards id={car.id}
                    engine={car.engine}
                    horsepower={car.horsepower}
                    image={car.image}
                    make={car.make}
                    model={car.model}
                    price={car.price}
                    time={car.time}
                    user={user}
                />
            ))}
        </div>
    )
}

export default Landingpage