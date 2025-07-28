import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create the context
const DashContext = createContext();

// Provider
export const DashProvider = ({ children }) => {
  const [editBlog, setEditBlog] = useState(null);
  const [posts, setPosts] = useState([]);

  const API = "http://localhost:8000/posts";

  const getData = async () => {
    try {
      const res = await axios.get(API);
      setPosts(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const addPost = async (post) => {
    const res = await axios.post(API, post);
    setPosts((prev) => [...prev, res.data]);
  };

  const updateData = async (id, updateData) => {
    const res = await axios.put(`${API}/${id}`, updateData);
    setPosts((prev) => prev.map((post) => (post.id === id ? res.data : post)));
    setEditBlog(null);
  };

  const deletePost = async (id) => {
    await axios.delete(`${API}/${id}`);
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const deleteALLPosts = async () => {
    await Promise.all(posts.map((post) => deletePost(post.id)));
    setPosts([]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DashContext.Provider
      value={{
        posts,
        addPost,
        updateData,
        deletePost,
        deleteALLPosts,
        editBlog,
        setEditBlog,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};

// Hook to use it
export const useDashContext = () => useContext(DashContext);
