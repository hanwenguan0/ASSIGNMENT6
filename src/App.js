import React, { useState, useEffect } from "react";
import "./App.css";


import RepoModal from "./components/RepoModel"
import fetchPosts from "./api/RedditClient"
import Modal from "./components/Modal"
import { addfollowers, deletefollowers } from "./components/Follow"


export default function App() {
  const [isConfirm, setisConfirm] = useState(false)
  const [isConfirm2, setisConfirm2] = useState(false)

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((posts) => {
      const filteredPosts = posts.filter((post) => {
        return post
      });
      setPosts(filteredPosts);
    });
  }, [1]);

  function showfunction() {
    setisConfirm(true)
  }
  function hidefunction() {
    setisConfirm(false)
  }

  function showfunction2() {
    setisConfirm2(true)
  }
  function hidefunction2() {
    setisConfirm2(false)
  }
  

  return (
    <div className="d-flex flex-wrap justify-content-between">
      {posts.map((post) => {
        return (
          <div>

            <div>
              {isConfirm && <Modal key={post.id} postsfromapp={post} close={hidefunction} />}
              <li>
                <button type="button" className="btn btn-primary" onClick={showfunction}>{post.login}</button>
                <img src={post.avatar_url} className="card-img-top" alt=""/>
              </li>
            </div>

            <div>
              <li>
                {isConfirm2 && <RepoModal key={post.id} repoposts={post} close={hidefunction2} />}
                <button type="button" className="btn btn-primary" onClick={showfunction2}>{post.login}'s Repo</button>
              </li>
            </div>

            <div>
              <li>
                <button type="button" className="btn btn-primary" onClick={addfollowers(post.name)} >Follow</button>
                <button type="button" className="btn btn-primary" onClick={deletefollowers(post.name)}>Unfollow</button>
              </li>
              <li></li>
            </div>

          </div>
        )
      })}
    </div>
  );
}
