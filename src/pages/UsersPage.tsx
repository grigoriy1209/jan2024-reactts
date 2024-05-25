
import {Outlet} from "react-router";

import {Users} from "../components/UsersContainer";

const UsersPage = () => {
    return (
        <div>
           <Users/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};