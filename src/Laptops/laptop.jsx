import React from 'react';
import Card from "../Card/Card";
import {useSelector} from "react-redux";
import Header from "../Header";
import Footer from "../Footer";

const Laptop = () => {
    const {products} = useSelector(state => state.products);
    const laptops = products.filter(data => data.category === 'laptops');
    return (
        <div>
            <Header/>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center js-row">
                    {laptops?.map(product => {
                        return (
                            <Card product={product} key={product.id}/>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Laptop;