import {FC} from "react";

import {ICarWithAuth} from "../../models/ICarWithAuth";

interface IProps {
    car:ICarWithAuth
}

const Car:FC   = ({car}) => {
    const (brend,year,price,id) = car;
    return (
        <div>
            {car.brend}-{car.id}{car.year}
        </div>
    );
};

export {Car};