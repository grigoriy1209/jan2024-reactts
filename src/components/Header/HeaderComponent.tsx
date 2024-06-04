import React from 'react';
import {Link} from "react-router-dom";


const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>HOME</Link></li>
                <li><Link to={'users'}>USERS </Link></li>
                <li><Link to={'posts'}>POSTS </Link></li>
                <li><Link to={'userPost'}>USERS with POST</Link></li>
                <li><Link to={'comments'}>COMMENT</Link></li>
                <li><Link to={'postComments'}>POST with COMMENT </Link></li>
            </ul>
        </div>
    );
};

export {HeaderComponent};