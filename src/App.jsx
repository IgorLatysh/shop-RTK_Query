import React from 'react';
import {useGetAllProductsQuery} from "./store/api/products";
import {Route, Routes} from "react-router-dom";
import Products from "./Products/Products";
import Product from "./Products/Product";
import Phones from "./SmartPhones/Phones";
import Laptop from "./Laptops/laptop";
import NotFound from "./NotFound";
import Spinner from "./Spinner";

const App = () => {
    const {data, error, isLoading} = useGetAllProductsQuery();
    if (isLoading) return <Spinner/>
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route index element={<Products/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/product/:id" element={<Product/>}/>
                    <Route path="/smartphones" element={<Phones/>}/>
                    <Route path="/laptops" element={<Laptop/>}/>
                </Route>)
            </Routes>
        </>
    );
};

export default App;
