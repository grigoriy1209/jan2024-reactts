import {FC, PropsWithChildren} from "react";
import {IUserModel} from "../../models";
import {useNavigate} from "react-router";

interface IProps extends PropsWithChildren {
    user: IUserModel
}

const User: FC<IProps> = ({user}) => {
    const {id, name, email, phone, address} = user;
    const { state, city, street } = address;
    const navigate = useNavigate();
    return (
        <div>
            <div> ID:{id}--{name} </div>
            <p>{email}--{phone}</p>
            <p>{state}-{city}--{street}</p>

            <button onClick={() => {
                navigate(`/users/${id}/posts`)
            }}>get info post
            </button>
        </div>
    );
};

export {User};