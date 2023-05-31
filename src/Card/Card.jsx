import React from 'react';
import {Link} from "react-router-dom";
import CardButton from "./CardButton";
import Rating from "./Rating";

const Card = ({product}) => {
    return (
        <div className="col mb-5">
            <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
                <div className="card h-100">
                    <img className="card-img-top" src={product?.thumbnail} alt={product?.title} style={{height: "156px"}}/>
                    <div className="card-body p-4 card-style">
                        <div className="text-center">
                            <h5 className="fw-bolder card-title">{product?.title}</h5>

                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <Rating product={product}/>
                            </div>
                            <span className="text-muted text-decoration-line-through">${product?.price}</span>
                            -${product?.price - (product?.price * product?.discountPercentage / 100).toFixed(0)}
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <CardButton text={'Show'}/>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;