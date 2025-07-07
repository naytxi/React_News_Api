import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const Add = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });

    if (name === "title" && value.trim().length < 3) {
      setMessage("Title must be at least 3 characters.");
      setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedNews = JSON.parse(localStorage.getItem("news")) || [];
    const updatedNews = [...storedNews, formData];

    localStorage.setItem("news", JSON.stringify(updatedNews));

    navigate("/list");
  };

  return (
    <div className="page-container">
      <h1>Create a News Article</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleInputChange}
          name="title"
        />

        <label>Content:</label>
        <textarea
          placeholder="Enter content"
          value={formData.content}
          onChange={handleInputChange}
          name="content"
        />

        <button type="submit" disabled={btnDisabled}>Submit</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default Add;
