import {useEffect, useState} from "react";
import {IUserModel} from "../../models";
import { userService} from "../../services";

import {User} from "./User";

const Users = () => {
    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        userService.getAllUser().then(({data})=>setUsers(data))
    }, []);
    return (
        <div>
            {
                users.map(user=><User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};