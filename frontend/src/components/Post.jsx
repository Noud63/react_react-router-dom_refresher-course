import styles from "./Post.module.css"
import { Link } from "react-router-dom";

const Post = ({id, author, body}) => {

  return (
    
      <div className={styles.post}>
        <Link to={`/posts/${id}`}>
            <p className={styles.author}>{author}</p>
            <p className={styles.text}>{body}</p>
         </Link>
      </div>
   
  );
}

export default Post

