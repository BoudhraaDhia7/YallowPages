import React from "react";

const services = (props) => {
  return (
    <section id="featured-services" className="featured-services">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
          >
            <div className="icon flex-shrink-0">
              <img
                src="assets/img/script.png"
                alt="script"
                style={{ height: "150px" }}
              />
            </div>
            <div>
              <h4 className="title">Recherche d'services</h4>
              <p className="description">
                Notre service de recherche permet aux utilisateurs de trouver
                facilement des services dans leur région.
              </p>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="icon flex-shrink-0">
              <img
                src="assets/img/location.png"
                alt="location"
                style={{ height: "150px" }}
              />
            </div>
            <div>
              <h4 className="title">Localisation et services</h4>
              <p className="description">
                Notre service de localisation de services permet aux
                utilisateurs de trouver rapidement des services dans leur
                région.
              </p>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="icon flex-shrink-0">
              <img
                src="assets/img/customer-review.png"
                alt="customer-review"
                style={{ height: "150px" }}
              />
            </div>
            <div>
              <h4 className="title">Avis sur les services</h4>
              <p className="description">
                Notre service d'avis permet aux utilisateurs de laisser des
                commentaires et des évaluations sur les services qu'ils ont .
              </p>
            </div>
          </div>
          {/* End Service Item */}
        </div>
      </div>
    </section>
  );
};

export default services;
