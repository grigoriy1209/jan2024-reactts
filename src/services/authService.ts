import {IRes} from "../types/responseType";
import {AuthDataModel} from "../models/AuthDataModel";
import {apiService} from "./apiService";
import {ITokenObtainPair} from "../models/TokenObtainPair";

const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        let response
        try {
            response =
                await apiService.post<ITokenObtainPair>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
        } catch (e){
            console.error(e);

        }
        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: async (refreshToken:string) => {
        const response = await apiService.post<ITokenObtainPair>('/auth/refresh',{refresh:refreshToken});
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
    },
}
export {authService}