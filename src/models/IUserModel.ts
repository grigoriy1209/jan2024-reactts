export interface IUserModel {
    id:string
    email:string
    name:string
    phone:string
    address:{
        street:string;
        city:string;
       state:string;
    };
}
