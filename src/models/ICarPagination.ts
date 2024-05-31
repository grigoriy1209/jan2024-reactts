import {ICarWithAuth} from "./ICarWithAuth";

export interface ICarPagination {
    total_items: number;
    total_pages: number;
    prev:string;
    next:string;
    items: ICarWithAuth[]
}