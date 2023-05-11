import React from "react";

const contact = (props) => {
  return (
    <div className="breadcrumbs">
      <div
        className="page-header d-flex align-items-center"
        style={{ backgroundImage: 'url("assets/img/page-header.jpg")' }}
      >
        <div className="container position-relative">
          <div className="row d-flex justify-content-center pb-5 mb-2">
            <div className="col-lg-6 text-center">
              <h2>Contactez-nous</h2>
              <p>
                Besoin d'aide ou de renseignements? Contactez-nous et nous
                serons ravis de vous aider. Remplissez simplement notre
                formulaire de contact en ligne ou envoyez-nous un e-mail et nous
                vous répondrons dès que possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
