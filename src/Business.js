import React from 'react'

function Business({ business }) {
    return (
        <div className='blist'>
          <img className='Bimage' src={business.image} alt={business.name} />
          <h2 className='RestoName'>{business.name}</h2>
          <div className='info-container'>
            <ul className='left-info'>
              <li className='address'>{business.address}</li>
              <li className='city'>{business.city}</li>
              <li className='statezip'>{business.state} {business.zipcode}</li>
            </ul>
            <ul className='right-info'>
              <li className='category'>{business.category}</li>
              <li className='rating'>{business.rating} stars</li>
              <li className='review'>{business.reviewCount} reviews</li>
            </ul>
          </div>
        </div>
    );
};

export default Business;