import {Outlet, useParams} from "react-router";
import {useEffect, useState} from "react";
import {userService} from "../services";
import {IUserModel} from "../models";
import {UserDetails} from "../components/UsersContainer";


const UserDetailsPage = () => {
    const {id} = useParams();
    console.log(id);

    const [userDetails, setUserDetails] = useState<IUserModel>()

    useEffect(() => {
        if(id){
            userService.getById(id).then(({data})=>setUserDetails(data))
        }
    },      [id]);

    return (
        <div>
            {
                userDetails && <UserDetails userDetails={userDetails} />
            }
           <Outlet/>
        </div>
    );
};

export {UserDetailsPage};