import styles from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";
import axios from "axios"

function NewPost() {

return (
  <Modal>
    <Form method="post" className={styles.form}>
      <p>
        <label htmlFor="body">Text:</label>
        <textarea id="body" maxLength="50" name="body" required rows={3} />
        <span className={styles.maxChar}>(Max characters 50)</span>
      </p>

      <p>
        <label htmlFor="name">Your name:</label>
        <input type="text" id="name" name="name" required />
      </p>

      <p className={styles.actions}>
        <Link to="/" type="button">
          Cancel
        </Link>
        <button type="submit">Submit</button>
      </p>
    </Form>
  </Modal>
);
}

export default NewPost;


export const action = async({request}) => {
          
try {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // ==> { body: "", name: "" }
  const response = await axios.post("http://localhost:5000/posts", postData);
  console.log(response.data)
   return redirect("/");
}catch(error){
      console.log(error)
     }
}