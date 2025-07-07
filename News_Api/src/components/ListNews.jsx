import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

const ListNews = () => {
  const { news } = useContext(NewsContext);

  return (
    <section className="news-list">
      <h2>Latest News</h2>
      {news.length === 0 && <p>No news yet.</p>}
      {news.map((item, index) => (
        <article key={index} className="news-item">
          <h3>{item.title}</h3>
          <p>{item.description || item.content}</p>
        </article>
      ))}
    </section>
  );
};

export default ListNews;
