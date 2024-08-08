import { useState, useEffect } from "react";
import axios from 'axios'
import PostList from "./Components/PostList";
import PostDetails from "./Components/PostDetails";


function App() {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(res.data)
      } catch (e) {
        console.log(e, 'erro ao renderizar posts')
        
      }
    }
    fetchPosts()
  }, [])


  const handleSelectPost = (post) =>{
    setSelectedPost(post)
  }


  return (
    <div>
      <PostList posts={posts} onSelectPost={handleSelectPost}/>
      <PostDetails post={selectedPost}/>
    </div>
  );
}


export default App;

