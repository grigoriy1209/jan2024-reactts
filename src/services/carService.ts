import {apiService} from "./apiService";
import {ICarPagination} from "../models/ICarPagination";
import {AxiosError} from "axios";
import {retriveLocalStorageData} from "./helpers/helpers";
import {ITokenObtainPair} from "../models/TokenObtainPair";
import {authService} from "./authService";

const carService = {
    getCars:async ()=>{
        try {
            const response = await apiService.get<ICarPagination>('/cars', );
            return response.data;
        }catch(e){
            console.error(e);
          const axiosError = e as AxiosError;
          if (axiosError?.response?.status === 401) {
              const refreshToken = retriveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
              await authService.refresh(refreshToken);
              await carService.getCars();

          }
        }

    }

}
export {carService};