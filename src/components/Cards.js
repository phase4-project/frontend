import React from 'react'

function Cards() {
    return (
        <div className='card-container'>
            <div className='flip-card'>
                <div className='inner'>
                    <div className='front'>
                        <h1>Front</h1>
                    </div>
                    <div className='back'>
                        <h1>Back</h1>
                    </div>
                </div>
            </div>
            <div className='flip-card'>
                <div className='inner'>
                    <div className='front'>
                        <h1>Front</h1>
                    </div>
                    <div className='back'>
                        <h1>Back</h1>
                    </div>
                </div>
            </div>
            <div className='flip-card'>
                <div className='inner'>
                    <div className='front'>
                        <h1>Front</h1>
                    </div>
                    <div className='back'>
                        <h1>Back</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards