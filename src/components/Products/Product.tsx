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
            <h2>{title}--{category}--{price}</h2>
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