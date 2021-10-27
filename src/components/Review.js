import React from 'react';


function Review({review}){
    
      return (
        <React.Fragment>
          <h1>React Accordion Demo</h1>
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-title">
                <div>review</div>
                <div>+</div>
              </div>
              <div className="accordion-content">{review}</div>
            </div>
          </div>
        </React.Fragment>
      );
    };

export default Review;