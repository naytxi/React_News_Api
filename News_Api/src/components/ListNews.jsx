import { useEffect, useState } from 'react';

const ListNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem("news")) || [];
    setNews(storedNews);
  }, []);

  return (
    <section className="news-list">
      <h2>Latest News</h2>
      {news.length === 0 && <p>No news yet.</p>}
      {news.map((item, index) => (
        <article key={index} className="news-item">
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </article>
      ))}
    </section>
  );
};

export default ListNews;
