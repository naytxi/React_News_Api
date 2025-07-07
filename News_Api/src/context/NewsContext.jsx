import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);


  const API_KEY = "RRQezO30x9voJdGbg8JBCawUlXogK5PM"; 
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  useEffect(() => {
  const fetchNews = async () => {
    try {
      const response = await axios.get(URL);
      setNews(response.data.articles);
    } catch (error) {
      console.error("Error fetching news inside NewsProvider:", error);
    }
  };

  try {
    fetchNews();
  } catch (error) {
    console.error("Error caught in useEffect:", error);
  }
}, []);

  const addNews = (newItem) => {
    setNews((prevNews) => [...prevNews, newItem]);
  };
  return (
    <NewsContext.Provider value={{ news, addNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
