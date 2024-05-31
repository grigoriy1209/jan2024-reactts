import {useEffect, useState} from "react";
import {carService} from "../../services/carService";
import {ICarWithAuth} from "../../models/ICarWithAuth";

const Cars = () => {
    const [cars, setCars] = useState<ICarWithAuth[]>([])
    useEffect(() => {
        carService.getCars().then(value => console.log(value));
    }, []);
    return (
        <div>
            Cars
        </div>
    );
};

export {Cars};