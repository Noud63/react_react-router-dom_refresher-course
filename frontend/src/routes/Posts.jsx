import { useState } from "react";
import { Outlet } from "react-router-dom"
import PostList from "../components/PostList";
import axios from "axios"

function Posts() {

return (
    <>
    <Outlet />
     <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export const loader = async() => {
  const response = await axios.get("http://localhost:5000/posts");
        console.log(response.data.posts);
        return response.data.posts
} 
