import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import './ListNews.scss';

const ListNews = () => {
  const { news } = useContext(NewsContext);

  return (
    <section className="news-section">
      <h2>Last News</h2>
      
      {news.length === 0 && <p className="no-news">No hay noticias disponibles.</p>}

      <div className="news-list">
        {news.map((item, index) => (
          <article key={index} className="news-item">
            <h3>{item.title}</h3>
            <p>{item.description || item.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ListNews;
