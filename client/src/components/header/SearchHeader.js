import React, { useEffect, useState } from "react";
import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Axios from "axios";

function SearchHeader(props) {
  const [townsList, setTownsList] = useState([]);
  const navigate = useNavigate();

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
      <header className="search-header">
        <div className="logo">
          <h1 className="search-text">
            <a href="/">Globo</a>
          </h1>
        </div>
        <div className="search">
          <AutoCompleteComponent
            type="text"
            className="search-input"
            placeholder="Que cherchez-vous près de chez vous ?"
            style={{ borderBottom: "none" }}
            noRecordsTemplate="Aucun résultat trouvé"
            width="150%"
            dataSource={servicesList}
            onChange={(e) => setService(e.target.value)}
          ></AutoCompleteComponent>
          <AutoCompleteComponent
            type="text"
            placeholder="Ou cherchez-vous ?"
            noRecordsTemplate="Aucun résultat trouvé"
            className="location-input"
            dataSource={townsList}
            onChange={(e) => setTown(e.target.value)}
          ></AutoCompleteComponent>
          <button className="custom-btn" onClick={Search}>
            Search
          </button>
        </div>
      </header>
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
        theme="light"
      />
    </>
  );
}

export default SearchHeader;
