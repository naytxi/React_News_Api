import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-hero">
        <h1>News Hub</h1>
        <p className="tagline">Tu fuente confiable de noticias al instante</p>
      </header>

      <section className="home-featured">
        <h2>Destacado</h2>
        <article className="featured-article">
          <h3>La actualidad política marca el ritmo de la semana</h3>
          <p>
            El análisis de expertos revela tensiones crecientes entre bloques partidarios, mientras los ciudadanos exigen mayor transparencia y soluciones concretas.
          </p>
        </article>
      </section>

      <section className="home-sections">
        <div className="section-block">
          <h4>Economía</h4>
          <p>Los mercados se mantienen estables pese a la incertidumbre internacional.</p>
        </div>
        <div className="section-block">
          <h4>Tecnología</h4>
          <p>Nuevas regulaciones europeas podrían cambiar el rumbo de la IA comercial.</p>
        </div>
        <div className="section-block">
          <h4>Cultura</h4>
          <p>Se inaugura la Feria Internacional del Libro con grandes autores invitados.</p>
        </div>
        <div className="section-block">
          <h4>Internacional</h4>
          <p>América Latina refuerza la cooperación regional en materia de salud pública.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
