import React, { useState } from "react";
import "./Modal.scss";
import ReactDOM from "react-dom";

export const Modal = ({ setIsOpen }) => {
  const portal = document.getElementById("portal");
  const [base64Image, setBase64Image] = useState("");
  const [base64Ava, setBase64Ava] = useState("");

  const sendPostData = async (data) => {
    try {
      const res = await fetch("http://localhost:3000/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });

      console.log(await res.json());
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      theme: e.target.category.value,
      date: new Date().toISOString(),
      heading: e.target.title.value,
      text: e.target.text.value,
      author: {
        name: e.target.author.value,
        profession: e.target.post.value,
        ava: base64Ava,
      },
      image: base64Image,
    };

    const jsonData = JSON.stringify(requestData);

    sendPostData(jsonData);
  };

  const handlefileChange = (base64) => {
    setBase64Image(base64);
  };

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      handlefileChange(base64);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlefileChangeAva = (base64) => {
    setBase64Ava(base64);
  };

  const handleInputChangeAva = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      handlefileChangeAva(base64);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-layout">
      <button
        className="close-btn"
        onClick={() => {
          setIsOpen(false);
          portal.remove();
        }}
      >
        ❌
      </button>
      <div className="modal">
        <h2 className="new-post">Create your post</h2>
        <form onSubmit={handleSubmit} className="new-post__form" action="">
          <input
            maxLength="1000"
            required
            className="new-post__input"
            type="text"
            placeholder="input name of your post"
            name="title"
          />
          <select className="theme-select" name="category">
            <option value="UI DESIGN">UI Design</option>
            <option value="Front-end">Front-end</option>
            <option value="Back-end">Back-end</option>
          </select>
          <textarea
            maxLength="1000"
            required
            className="new-post__input"
            name="text"
            id=""
            cols="30"
            rows="10"
            placeholder="input your text"
          ></textarea>
          <input
            maxLength="100"
            required
            className="new-post__input"
            type="text"
            placeholder="input your name"
            name="author"
          />
          <input
            maxLength="100"
            required
            className="new-post__input"
            type="text"
            placeholder="input your profession"
            name="post"
          />
          <label htmlFor="avatar">
            <input
              onChange={handleInputChangeAva}
              required
              className="ava-input"
              id="avatar"
              type="file"
            />
            <span className="ava-text">Add your photo</span>
            <div className="prewiew">
              {base64Ava && (
                <img
                  className="prewiew__img"
                  src={base64Ava}
                  alt="img prewiew"
                />
              )}
            </div>
          </label>
          <label htmlFor="image">
            <input
              onChange={handleInputChange}
              required
              className="image-input"
              id="image"
              type="file"
            />
            <span className="ava-text">Add image for your post</span>
            <div className="prewiew">
              {base64Image && (
                <img
                  className="prewiew__img"
                  src={base64Image}
                  alt="img prewiew"
                />
              )}
            </div>
          </label>

          <button className="save-btn">Save post</button>
        </form>
      </div>
    </div>,
    portal
  );
};
