import styles from "./PostList.module.css"
import Post from "./Post"
import { useLoaderData } from "react-router-dom";

const PostList = () => {

  const posts = useLoaderData()
    
  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <li key={post.id}>
              <Post author={post.name} body={post.body} id={post.id} created={post.created}/>
            </li>
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div className={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet?</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList
