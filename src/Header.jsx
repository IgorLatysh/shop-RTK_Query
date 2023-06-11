import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTotalQuantity, removeFromCart} from "./store/slices/cart";
import {Container, Nav, Navbar} from "react-bootstrap";


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

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        <NavLink to="/"
                                 className={isActive => "li-nav" + (!isActive ? "unselected" : "")}>
                            Home</NavLink>
                        <NavLink to="/smartphones"
                                 className={isActive => "li-nav" + (!isActive ? " unselected" : "")}>
                            Smartphones</NavLink>
                        <NavLink to="/laptops"
                                 className={isActive => "li-nav " + (!isActive ? " unselected" : "")}>
                            Laptops</NavLink>
                    </Nav>
                    <form className="d-flex">
                        <span className="btn btn-outline-dark" onClick={toggleCart}>
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill js-cart-quantity">
                                {cartTotalQuantity}
                            </span>
                        </span>
                    </form>
                </Container>
            </Navbar>
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