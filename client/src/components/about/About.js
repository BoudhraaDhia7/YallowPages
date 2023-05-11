import React from "react";

const about = (props) => {
  return (
    <section className="about" id="about" style={{ marginTop: "-70px" }}>
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
            <img src="assets/img/about.jpg" className="img-fluid" alt="about" />
            <a
              href="https://www.youtube.com/watch?v=3RPGTDA0d04"
              className="glightbox play-btn"
            />
          </div>
          <div className="col-lg-6 content order-last order-lg-first">
            <h3>Qui sommes-nous ?</h3>
            <p>
              Notre application est dédiée à fournir aux utilisateurs une
              plateforme facile à utiliser pour trouver des entreprises et des
              services locaux. Nous sommes passionnés par la connectivité et la
              création d'une communauté forte dans chaque région. Notre objectif
              est de fournir des informations précises et à jour pour aider les
              utilisateurs à prendre des décisions éclairées lorsqu'ils
              choisissent des entreprises locales à utiliser. Nous nous
              engageons à fournir un service exceptionnel à nos utilisateurs et
              à être une ressource fiable pour la communauté locale. Nous
              croyons que l'information est la clé pour créer des relations
              d'affaires durables. Notre plateforme est conçue pour aider les
              utilisateurs à trouver les bonnes entreprises pour leurs besoins,
              ainsi que pour aider les entreprises à se connecter avec des
              clients potentiels. Nous sommes passionnés par l'impact positif
              que nous pouvons avoir sur la communauté locale en aidant les
              entreprises à prospérer et en aidant les utilisateurs à trouver
              les services dont ils ont besoin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
