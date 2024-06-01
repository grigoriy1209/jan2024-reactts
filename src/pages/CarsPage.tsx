import {Cars} from "../components/Cars/Cars";
import {useEffect, useState} from "react";
import {carService} from "../services/carService";
import {ICarWithAuth} from "../models/ICarWithAuth";

const CarsPage = () => {

    useEffect(() => {
        carService.getCars().then(value => console.log(value));
    }, []);
    return (
        <div>

        </div>
    );
};

export {CarsPage};