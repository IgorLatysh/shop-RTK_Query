import React from 'react';
import Card from "../Card/Card";
import {useSelector} from "react-redux";
import Footer from "../Footer";
import Header from "../Header";

const Phones = () => {
    const {products} = useSelector(state => state.products);
    const smartphones = products.filter(data => data.category === 'smartphones');
    return (
        <div>
            <Header/>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center js-row">
                    {smartphones?.map(product => {
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

export default Phones;