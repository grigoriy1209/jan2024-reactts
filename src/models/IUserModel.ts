export interface IUserModel {
    id:number,
    name:string,
    userName:string,
    email:string,
    phone:string,
    address:{
        street: string,
        city: string,
        suite: string,
    }

}

