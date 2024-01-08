import { useLoaderData, Link, redirect } from "react-router-dom";
import axios from "axios"
import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.name}</p>
        <p className={classes.text}>{post.body}</p>
        <p className={classes.created}>{post.created}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export const loader = async({params}) => {
    try {
        const id = params.id
        const response = await axios.get(`http://localhost:5000/posts/${id}`)
        const resData = response.data.post
        console.log(resData)
        return resData
    } catch (error) {
        console.log(error)
    }
}
