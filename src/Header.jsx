import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTotalQuantity, removeFromCart} from "./store/slices/cart";


const Header = () => {
    const {cart, cartTotalAmount, cartTotalQuantity} = useSelector(state => state.cart)

    const [sidebar, setSidebar] = useState(false);
    const toggleCart = () => setSidebar(!sidebar);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotalQuantity());
    }, [cart])

    const remove = (carts) => {
        dispatch(removeFromCart(carts));
    };

    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5 collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mr-auto active me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item">
                        <NavLink to="/" class="nav-link"
                                 className={isActive => "li-nav nav-link" + (!isActive ? "unselected" : "")}>
                            Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/smartphones" class="nav-link"
                                 className={isActive => "li-nav nav-link" + (!isActive ? " unselected" : "")}>Smartphones</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/laptops" class="nav-link"
                                 className={isActive => "li-nav nav-link" + (!isActive ? " unselected" : "")}>Laptops</NavLink>
                    </li>
                </ul>
                <form className="d-flex">
                        <span className="btn btn-outline-dark" onClick={toggleCart}>
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill js-cart-quantity">
                                {cartTotalQuantity}
                            </span>
                        </span>
                </form>
            </div>
        </nav>
        <aside className={sidebar ? "sidebar active" : "sidebar"}>
            <nav className="nav-cart">
                <div className="text-center">
                    <div className="p-3 bg-body">
                        {cart?.map(carts => {
                            return (
                                <div className="content-2">
                                    <div className="content-img">
                                        <img className="card-img-top  mb-5 mb-md-0" src={carts?.thumbnail}
                                             alt={carts?.title}/>
                                    </div>
                                    <div className="navbar content">
                                        <div>
                                            <span className="h6" key={carts.id}>{carts.title}</span>
                                        </div>
                                        <input className="form-control text-center input-size"
                                               id="inputQuantity" type="num"
                                               value={carts?.cartQuantity}/>
                                        <button className="btn btn-outline-dark content" onClick={() => {
                                            remove(carts)
                                        }}>
                                            <i className="bi bi-trash"></i>
                                        </button>

                                    </div>
                                </div>)
                        })}
                        <h6>Subtotal</h6>
                        <span>${cartTotalAmount.toFixed(0)}</span>
                    </div>
                </div>
            </nav>
        </aside>
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                </div>
            </div>
        </header>
    </>);
};

export default Header;