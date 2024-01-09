import styles from "./Post.module.css"
import { Link } from "react-router-dom";

const Post = ({id, author, body, created}) => {

  return (
    <>
      <div className={styles.post}>
        <Link to={`/posts/${id}`}>
          <div className={styles.link}>
            <div className={styles.postHeader}>
              <p className={styles.author}>{author}</p>
              <div className={styles.avatar}>RP</div>
            </div>
            <p className={styles.text}>{body}</p>

            <div className={styles.created}>
              <span className={styles.createdAt}>
                <b>Created:</b> {created}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Post

