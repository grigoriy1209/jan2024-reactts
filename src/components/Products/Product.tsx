import React, {FC} from "react";

import {IProduct} from "../../interfaces/productInterface";



export type IProductType = IProduct & {children?:React.ReactNode};

const Product:FC<IProductType> = ({
                                      id,title,
                                      description,price,
                                      discountPercentage,
                                      rating,
                                      stock,
                                      brand,
                                      category,
                                      thumbnail,
                                      images
                                  }) => {

    return (
        <div >
            <h1>{brand}</h1>
            <h2>{title}--{category}--price:{price}</h2>
            <p>{description}--discountPercentage:{discountPercentage}</p>
            <p>rating:{rating}--stock:{stock}{thumbnail}</p>
            <div>
                {
                   images.map((image,index)=>(
                       <img key={index} src={image} alt="title"/>
                   ))
                }
            </div>
        </div>
    );
};

export {Product};