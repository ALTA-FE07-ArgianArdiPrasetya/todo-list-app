import React from "react";

const Post = ({ content, description, id, onRemove, onUpdate }) => {
  const dataInput = { content, description, id };
  return (
    <>
      <div className=" post mx-auto">
        <div className="content">
          <p className="title"> {content} </p>
          <p className="desc"> {description} </p>
          <div className="d-flex justify-content-end">
            <button className="update ms-2" onClick={() => onUpdate(dataInput)}>
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
