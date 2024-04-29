import {FC, useEffect, useState} from "react";

import {IProduct} from "../../interfaces/productInterface";
import {Product} from "./Product";
import css from "./Products.module.css";


const Products:FC = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products})=>{
                setProducts(products)
            });
    }, []);
    return (
        <div className={css.products}>
            {
                products.map(value => (<Product key = {value.id}
                                                id={value.id} title={value.title}
                                                description={value.description} price={value.price}
                                                discountPercentage={value.discountPercentage} rating={value.rating}
                                                stock={value.stock} brand={value.brand}
                                                category={value.category} images={value.images}/>
                ))
            }
        </div>
    );
};

export {Products};