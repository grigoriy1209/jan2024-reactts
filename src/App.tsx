import React, {useState} from "react";

import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";

import {IPostModel} from "./models/IPostModel";
import {getAllPostsOfSingleUser} from "./services/usersService";

import './App.css'
const App = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);

    const transition = (id:number)=>{
        getAllPostsOfSingleUser(id).then(({data})=>setPosts(data))
    }
  return (
      <div className="App">
          <div className={'users'}>
              <Users transition={transition}/>
          </div>
          <div className={'posts'}>
              <Posts posts={posts} />
          </div>


      </div>
  );
};

export default App;