import React, { useState, useEffect } from "react";
import { fetchPostsByRepo } from "../api/RedditClient";

export default function RepoModel({repoposts}) {
  console.log(repoposts.url)
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPostsByRepo(repoposts.url).then((posts) => {
      const filteredPosts = posts.filter((post) => {
        return post
      });

      setPosts(filteredPosts);
    });
  }, [1]);

  return (

    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Repo Modal</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{posts.map(post => (
              <div>
                <a href={post.nameurl}>{post.name}</a>
                <p>{post.description}</p>
              </div>
            ))}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
