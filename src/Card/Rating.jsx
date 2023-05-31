import React from 'react';

const Rating = ({product}) => {
    if (product.rating > 4.5) {
        return (
            <div>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
            </div>

        )
    } else if (product.rating < 4.5 && product.rating > 4) {
        return (
            <div>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi bi-star"></i>
            </div>
        )
    }
};

export default Rating;