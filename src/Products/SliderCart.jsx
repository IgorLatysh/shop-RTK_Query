import React from 'react';
import {Link} from "react-router-dom";
import Rating from "../Card/Rating";

const SliderCard = ({product}) => {
    return (
        <div className="row-cols-3 mb-5">
            <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
                <div className=" h-100 card-style">
                    <img className="card-img-top" src={product?.thumbnail} alt={product?.title}
                         style={{width: '80%', height: '156px'}}/>
                    <div>
                        <h5 className="fw-bolder card-title">{product?.title}</h5>
                        <div className="d-flex small text-warning mb-2">
                            <Rating product={product}/>
                            <span className="ps-sm-2 stock-style">{product?.rating}</span>
                        </div>
                        ${product?.price - (product?.price * product?.discountPercentage / 100).toFixed(0)}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SliderCard;