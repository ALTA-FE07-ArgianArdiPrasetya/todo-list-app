import axios from "axios";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Post from "../components/Post";
import "./Home.css";

const Home = () => {
  const [post, setPost] = useState([]);
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    apiGet();
  }, []);

  const apiGet = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://api.todoist.com/rest/v1/tasks",
      headers: {
        Authorization: "Bearer 4589625df8f7f3d1d31ac3276a8edf55f75599a2",
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setPost(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleRemove = (id) => {
    var axios = require("axios");

    var config = {
      method: "delete",
      url: `https://api.todoist.com/rest/v1/tasks/${id}`,
      headers: {
        Authorization: "Bearer 4589625df8f7f3d1d31ac3276a8edf55f75599a2",
      },
    };

    axios(config)
      .then(function (response) {
        apiGet();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const apiPost = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      content: content,
      description: description,
    });

    var config = {
      method: "post",
      url: "https://api.todoist.com/rest/v1/tasks",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 4589625df8f7f3d1d31ac3276a8edf55f75599a2",
        Cookie: "csrf=f006526ef2984326b837c7362bfbdd02",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        apiGet();
        setContent(" ");
        setDescription(" ");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //   handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    apiPost();
  };

  return (
    <>
      <Container>
        <h1 className="text-center mt-4">TODOS</h1>

        <form
          className="form-add-post mx-auto"
          onSubmit={(e) => handleSubmit(e)}
        >
          <p className="section-title">Add a Task</p>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="What do you want todo"
            onChange={(e) => setContent(e.target.value)}
          />
          <label htmlFor="body-content">Description</label>
          <textarea
            id="body-content"
            cols="10"
            rows="5"
            placeholder="Add the description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className="btn-submit">Save</button>
        </form>
      </Container>

      <Container>
        {post.map((item) => {
          return (
            <Post
              title={item.content}
              body={item.description}
              id={item.id}
              key={item.id}
              onRemove={handleRemove}
              onUpdate={handleUpdate}
            />
          );
        })}
      </Container>
    </>
  );
};

export default Home;