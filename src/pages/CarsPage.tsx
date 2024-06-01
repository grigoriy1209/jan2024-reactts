import {Cars} from "../components/Cars/Cars";
import {useEffect, useState} from "react";
import {carService} from "../services/carService";
import {ICarWithAuth} from "../models/ICarWithAuth";

const CarsPage = () => {
    const [cars, setCars] = useState<ICarWithAuth[]>([])
    useEffect(() => {
        carService.getCars().then(value => setCars(value!.items));
    }, []);
    return (
        <div>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsPage};