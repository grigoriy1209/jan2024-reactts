import {FC, PropsWithChildren} from "react";
import {IUserModel} from "../../models";
import {useNavigate} from "react-router";

interface IProps extends PropsWithChildren {
    userDetails:IUserModel
}
const UserDetails :FC<IProps>= ({userDetails}) => {
const {id, name, email,phone, address:{street, city, state}} = userDetails;
const navigate = useNavigate();
    return (
        <div>
           <div>{id}--{name}</div>
            <p>{email}</p>
            <p>{phone}</p>
            <p>address:{street}<br/>{city}<br/>{state}</p>
            <button onClick={()=>navigate(`posts`)}>get post </button>
        </div>
    );
};

export {UserDetails};