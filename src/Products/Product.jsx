import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import CardProduct from "../Card/CardProduct";
import SliderCard from "../Products/SliderCart";
import Header from "../Header";
import Footer from "../Footer";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

const Product = () => {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const {products} = useSelector(state => state.products);
    const goods = products.filter(data => data.category === 'smartphones' || data.category === 'laptops');
    useEffect(() => {
        if (params?.id) {
            const fetchProducts = async () => {
                try {
                    const response = await fetch(`https://dummyjson.com/products/${params.id}`);
                    const data = await response.json();
                    setProduct(data);
                } catch (error) {
                    throw new Error(error);
                }
                ;
            }
            fetchProducts();
        }
    }, [])
    return (
        <div>
            <Header/>
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center js-row">
                    <CardProduct product={product}/>
                </div>
                <hr/>
                <h3 className="pb-5">Products related to this item</h3>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                >
                    {goods.map(product => {
                        return (
                            <SwiperSlide key={product.id}>
                                <SliderCard product={product}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <Footer/>
        </div>
    );
};

export default Product;