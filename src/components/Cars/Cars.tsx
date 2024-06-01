import {FC, useEffect, useState} from "react";
import {carService} from "../../services/carService";
import {ICarWithAuth} from "../../models/ICarWithAuth";
import {Car} from "./Car";

interface IProps {
    cars: ICarWithAuth[];
}

const Cars:FC<IProps> = ({cars}) => {
    // const [cars, setCars] = useState<ICarWithAuth[]>([])
    // useEffect(() => {
    //     carService.getCars().then(value => console.log(value!.items));
    // }, []);
    return (
        <div>
            {
                cars.map(item =><Car car={car}/>)
            }
        </div>
    );
};

export {Cars};