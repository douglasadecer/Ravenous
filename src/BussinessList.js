import React from 'react';
import Business from './Business';

function BusinessList({ businesses }) {
    return (
        <div className='business-list-container'>
            {businesses.map((business, index) => (
                <Business key={index} business={business} />
            ))}
        </div>
    );
}

export default BusinessList;