import {FC, PropsWithChildren} from "react";
import {IUserModel} from "../../models";
import {useNavigate} from "react-router";
 interface IProps extends PropsWithChildren {
    user:IUserModel
}

const User:FC<IProps> = ({user}) => {
    const {id,name} = user;
    const navigate = useNavigate();
    return (
        <div>
           <div>  {id}--{name} </div>
            <button onClick={()=>{
                navigate(`/users/${id}`)
            }}>get info user</button>

        </div>
    );
};

export {User};