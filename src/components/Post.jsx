import React from "react";

const Post = ({ title, body, id, onRemove, onUpdate }) => {
  const dataInput = { title, body, id };
  return (
    <>
      <div className=" post mx-auto">
        <div className="content">
          <p className="title"> {title} </p>
          <p className="desc"> {body} </p>
          <div className="d-flex justify-content-end">
            <button className="update ms-2" onClick={() => onUpdate(id)}>
              Update
            </button>
            <button className="remove me-2" onClick={() => onRemove(id)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
