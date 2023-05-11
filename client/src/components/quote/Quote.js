import React, { useEffect, useState } from "react";
import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";
import Map from "../map/RegisterMap";
import Axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Quote = (props) => {
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [town, setTown] = useState("");
  const [location, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const gmapLat = document.getElementById("lat").value;
    const gmapLen = document.getElementById("lng").value;

    const data = {
      name,
      email,
      phone,
      service,
      town,
      location,
      gmapLat,
      gmapLen,
    };

    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: <p>Chargement...</p>,
      timer: 500,
      timerProgressBar: true,
      didOpen: () => {
        MySwal.showLoading();
      },
    });
    setTimeout(async () => {
      try {
        const response = await fetch("http://localhost:3001/save-data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.status === 201) {
          const result = await response.json();
          console.log(result);
          Swal.fire({
            icon: "success",
            title: "Demande envoyée.",
            text: "Nous vous contacterons dans les plus brefs délais",
            footer: '<a href="">Plus d' + "'info ?</a>",
          });
        } else {
          throw new Error("Error saving data");
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Une erreur est survenue!",
          footer: '<a href="">Pourquoi ce problème ?</a>',
        });
      }
    }, 500);
  };

  return (
    <section id="quote" className="get-a-quote">
      <div className="container" data-aos="fade-up">
        <div className="row g-0">
          <div
            className="col-lg-5 quote-bg"
            style={{ backgroundImage: "url(assets/img/quote-bg.jpg)" }}
          />
          <div className="col-lg-7">
            <form action="#" className="php-email-form">
              <div className="row gy-4">
                <div className="col-lg-12">
                  <h4>VOS INFORMATIONS PERSONNELLES</h4>
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nom"
                    required=""
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    required=""
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Phone"
                    required=""
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="col-md-12 mt-2 mb-0">
                  <AutoCompleteComponent
                    type="text"
                    placeholder="Service"
                    noRecordsTemplate="Aucun résultat trouvé"
                    className="form-control e-input-groupp"
                    dataSource={servicesList}
                    onChange={(e) => setService(e.target.value)}
                    style={{
                      border: "1px solid #ced4da",
                      background: "white",
                      paddingLeft: "10px",
                      margin: "0",
                    }}
                  ></AutoCompleteComponent>
                </div>
                <div className="col-md-12 mt-0 mb-0">
                  <AutoCompleteComponent
                    type="text"
                    placeholder="Ville"
                    noRecordsTemplate="Aucun résultat trouvé"
                    className="form-control e-input-groupp"
                    dataSource={townsList}
                    onChange={(e) => setTown(e.target.value)}
                    style={{
                      border: "1px solid #ced4da",
                      background: "white",
                      paddingLeft: "10px",
                      margin: "0",
                    }}
                  ></AutoCompleteComponent>
                </div>
                <input type="hidden" name="latitude" id="lat" required />
                <input type="hidden" name="longitude" id="lng" required />
                <div className="col-md-12 mt-2">
                  <input
                    type="text"
                    className="form-control"
                    name="localisation"
                    placeholder="Adresse"
                    onChange={(e) => setAddress(e.target.value)}
                    required=""
                  />
                  <div>
                    <div className="col-lg-12">
                      <h4>Localitation</h4>
                    </div>
                    <Map height="50vh" data={[]} type="save" saveTown={town} />
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Chargement</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Votre demande de devis a été envoyée avec succès. Merci!
                  </div>

                  <button type="submit" onClick={handleSubmit}>
                    S'inscrire
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* End Quote Form */}
        </div>
      </div>
    </section>
  );
};

export default Quote;
