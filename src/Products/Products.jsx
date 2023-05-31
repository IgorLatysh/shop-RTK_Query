import React from "react";
import {useSelector} from "react-redux";
import Card from "../Card/Card";
import Header from "../Header";
import Footer from "../Footer";

const Products = () => {
    const {products} = useSelector(state => state.products);
    const goods = products.filter(data => data.category === 'smartphones' || data.category === 'laptops');

    return (
        <div>
            <Header/>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center js-row">
                    {goods.map(product => {
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

export default Products;