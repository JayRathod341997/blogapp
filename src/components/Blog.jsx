import { useEffect, useState } from "react";
import Content from "./Content";
import axios from "axios";
const Blog = () => {
  const [title, setTitle] = useState("Title 1");
  const [description, setDescription] = useState("Description");
  const [index, setIndex] = useState(0);
  const [posts, setPosts] = useState("");
  const [showPost, setShowPost] = useState(false);
  const getPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    setPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const getRandomPost = () => {
    setIndex(Math.floor(Math.random() * posts.length));
    setTitle(posts[index].title);
    setDescription(posts[index].body);
    setShowPost(true);
  };
  return (
    <>
      {!showPost && <p>Click on the button to see the comments</p>}
      {showPost && <Content title1={title} description1={description} />}
      <button onClick={getRandomPost}>Generate</button>
    </>
  );
};

export default Blog;
