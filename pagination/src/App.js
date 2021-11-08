import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "./components/Pagination";
import { Posts } from "./components/Posts";



function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])
  console.log(posts)

  // Get current Posts
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)

  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postPerPage} totalPosts = {posts.length} paginate ={paginate}/>
    </div>
  );
}

export default App;
