import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, { loader as  postLoader} from './routes/Posts'
import PostDetails,{ loader as postDetailsLoader} from './routes/PostDetails'
import { action as newPostAction} from "./routes/NewPost"
import NewPost from './routes/NewPost'
import RootLayout from './routes/RootLayout'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />, // posts are rendered after postLoader has loaded all posts
        loader: postLoader,  // promise
        children: [{ path: "/create-post", element: <NewPost />, action: newPostAction},
        { path: "posts/:id", element: <PostDetails />, loader: postDetailsLoader}
    ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
