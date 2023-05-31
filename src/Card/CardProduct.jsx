import React from 'react';
import {useDispatch} from "react-redux";
import {addToCart} from "../store/slices/cart";

const CardProduct = ({product}) => {
    const dispatch = useDispatch();

    const onClick = (product) => {
        dispatch(addToCart(product));
    };
    return (
        <>
            <div className="col-md-6">
                <img className="card-img-top mb-5 mb-md-0" src={product?.thumbnail} alt={product?.title}/>
            </div>
            <div className="col-md-6">
                <div className="small mb-1">SKU: BST-{product?.id}</div>
                <h1 className="display-5 fw-bolder">{product?.title}</h1>
                <div className="fs-5 mb-5">
                    <span className="text-decoration-line-through">${product?.price}</span>
                    <span>-${product?.price - (product?.price * product?.discountPercentage / 100).toFixed(0)}</span>
                </div>
                <p className="lead card-description">{product?.description}</p>
                <div className="d-flex">
                    <input className="form-control text-center me-3 input-size" id="inputQuantity" type="num"
                           value="1"/>
                    <button className="btn btn-outline-dark flex-shrink-0" type="submit"
                            onClick={() => onClick(product)}>
                        <i className="bi-cart-fill me-1 "></i>
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    );
};

export default CardProduct;