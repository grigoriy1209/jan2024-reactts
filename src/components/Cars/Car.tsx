import {FC} from "react";

import {ICarWithAuth} from "../../models/ICarWithAuth";

interface IProps {
    car:ICarWithAuth
}

const Car:FC<IProps>   = ({car}) => {

    return (
        <div>
           price-- {car.price}
           id-- {car.id}
            year--{car.year}
            brand--{car.brand}
        </div>
    );
};

export {Car};