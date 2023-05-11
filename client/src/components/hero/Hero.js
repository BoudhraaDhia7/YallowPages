import React, { useEffect, useState } from "react";
import PureCounter from "@srexi/purecounterjs";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import Axios from "axios";

import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";

const Hero = (props) => {
  const serviceRef = useRef(null);
  const townRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    new PureCounter({
      selector: ".purecounter",
      start: 0,
      end: 10000,
      duration: 1,
      delay: 3,
      once: true,
      pulse: false,
      decimals: 0,
      legacy: true,
      filesizing: false,
      currency: false,
      formater: "us-US",
      separator: false,
    });
  }, []);

  const [townsList, setTownsList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/towns").then((response) => {
      const towns = [];
      response.data.forEach((data) => {
        towns.push(data.name);
      });
      setTownsList(towns);
    });
  }, []);

  const [servicesList, setServicesList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/services").then((response) => {
      const services = [];
      response.data.forEach((data) => {
        services.push(data.name);
      });
      setServicesList(services);
    });
  }, []);

  const [service, setService] = useState("");
  const [town, setTown] = useState("");

  function Search() {
    if (service !== "" && town !== "") {
      navigate("/search?service=" + service + "&town=" + town);
    } else {
      toast.error("Vérifiez  information à chercher !", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row gy-4 d-flex justify-content-between">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h2 data-aos="fade-up">
                Trouvez tout ce dont vous avez besoin près de chez vous
              </h2>
              <p data-aos="fade-up" data-aos-delay={100}>
                Notre application de pages jaunes est votre guichet unique pour
                trouver tous les services et entreprises dont vous avez besoin
                près de chez vous. Trouvez facilement les meilleurs commerces,
                services professionnels et prestataires de services avec des
                coordonnées, des évaluations de clients, des horaires
                d'ouverture et des itinéraires. Notre interface conviviale et
                facile à utiliser vous permet de trouver rapidement ce que vous
                cherchez. Essayez notre application dès maintenant pour avoir
                tout à portée de main.
              </p>
              <div
                className="d-flex align-items-center gap-3"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <AutoCompleteComponent
                  ref={serviceRef}
                  type="text"
                  placeholder="Que cherchez-vous près de chez vous ?"
                  style={{ borderBottom: "none" }}
                  noRecordsTemplate="Aucun résultat trouvé"
                  width="125%"
                  dataSource={servicesList}
                  onChange={(e) => setService(e.target.value)}
                ></AutoCompleteComponent>
                <AutoCompleteComponent
                  ref={townRef}
                  type="text"
                  placeholder="Ou cherchez-vous ?"
                  noRecordsTemplate="Aucun résultat trouvé"
                  dataSource={townsList}
                  onChange={(e) => setTown(e.target.value)}
                ></AutoCompleteComponent>

                <button
                  style={{ borderRadius: "5px", padding: "15px" }}
                  // onClick={() => props.onButtonClick(service, town)}
                  onClick={Search}
                  className="btn btn-primary ms-3"
                >
                  Rechercher
                </button>
              </div>

              <div className="row gy-4" data-aos="fade-up" data-aos-delay={400}>
                <div className="col-lg-3 col-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={232}
                      data-purecounter-duration={1}
                      className="purecounter"
                    />
                    <p>Clients</p>
                  </div>
                </div>
                {/* End Stats Item */}
                <div className="col-lg-3 col-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={521}
                      data-purecounter-duration={1}
                      className="purecounter"
                    />
                    <p>Annonces</p>
                  </div>
                </div>
                {/* End Stats Item */}
                <div className="col-lg-3 col-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={720}
                      data-purecounter-duration={1}
                      className="purecounter"
                    />
                    <p>Avis</p>
                  </div>
                </div>
                {/* End Stats Item */}
                <div className="col-lg-3 col-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={1453}
                      data-purecounter-duration={1}
                      className="purecounter"
                    />
                    <p>Assistance</p>
                  </div>
                </div>
                {/* End Stats Item */}
              </div>
            </div>
            <div
              className="col-lg-5 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
            >
              <img
                src="assets/img/hero-img.svg"
                className="img-fluid mb-3 mb-lg-0"
                alt="hero-img"
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Hero;
