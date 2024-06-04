import {FC} from "react";

import {IUsersModule} from "../../modules";

interface IProps {
    user:IUsersModule
}
const User :FC<IProps>= ({user}) => {
    return (
        <div>
            id:{user.id}--name:{user.name}
        </div>
    );
};

export {User};