import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { fetchPostsByProfile } from "../api/RedditClient";

const modalContainer = document.getElementById("modal-container");

export default function Modal({ postsfromapp, close }) {
  const [profileposts, setprofilePosts] = useState([]);
  useEffect(() => {
    fetchPostsByProfile(postsfromapp.url).then((post) => {
      console.log(postsfromapp.url)
      setprofilePosts(post);
    });
  }, [1]);

  return createPortal(
    <>
      <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
      <div className="modal-backdrop show"></div>
      <div className="modal" tabIndex="-1" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{profileposts.url}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={close}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <div>
                  <p>{profileposts.name}</p>
                  <p>{profileposts.email}</p>
                  <p>{profileposts.location}</p>
                </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={close}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    modalContainer
  );
}
