import React from "react";

const signup = (props) => {
  return (
    <div className="breadcrumbs">
      <div
        className="page-header d-flex align-items-center"
        style={{ backgroundImage: 'url("assets/img/page-header.jpg")' }}
      >
        <div className="container position-relative">
          <div className="row d-flex justify-content-center pb-5 mb-3">
            <div className="col-lg-6 text-center">
              <h2>S'inscrire</h2>
              <p>
                Inscrivez-vous pour partager vos services avec la communauté
                locale. Ajoutez vos informations, images et coordonnées pour
                être facilement trouvé par les utilisateurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
