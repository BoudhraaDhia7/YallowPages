import React from "react";

const footer = (props) => {
  return (
    <footer id="footer" className="footer">
      <div className="container ">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-12 footer-info mt-5">
            <a href="index.html" className="logo d-flex align-items-center">
              <span>GLOBO</span>
            </a>
            <div className="social-links d-flex mt-4">
              <a href="#" className="twitter">
                <i className="bi bi-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-6 footer-links">
            <h4>Lien utilies</h4>
            <ul>
              <li>
                <a href="#home">Accueil</a>
              </li>
              <li>
                <a href="#about">Qui somme nous</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="##quote">S'inscrire</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 footer-contact text-center text-md-start">
            <h4>Contacter</h4>
            <p>
              Polytechnique
              <br />
              Rue du Commandant Bejaoui
              <br />
              Sousse 4054
              <br />
              <br />
              <strong>Téléphone:</strong> +216 73 277 877
              <br />
              <strong>Email:</strong> contact@polytecsousse.tn
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>GOLOBO</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/ */}
          Designed by Boudhraa Dhiaeddine
        </div>
      </div>
    </footer>
  );
};

export default footer;
