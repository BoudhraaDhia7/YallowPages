const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const TownModel = require("../models/TownSuggestion");
const Service = require("../models/ServiceSuggestion");
const app = express();

app.get("/towns/save", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.geonames.org/tn/administrative-division-tunisia.html"
    );
    const $ = cheerio.load(response.data);
    const townNames = $("table")
      .eq(1)
      .find("tr > td:nth-child(7)")
      .map((i, el) => $(el).text().trim())
      .get();

    const Model = await Promise.all(
      townNames.map((name) => new TownModel({ name }).save())
    );
    res.json({ message: `${townNames.length} towns saved to the database` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/services/save", async (req, res) => {
  try {
    const serviceNames = [
      "Médecin",
      "Médecin Généraliste",
      "Dentiste",
      "Électricien",
      "Plombier",
      "Menuisier",
      "Peintre",
      "Avocat",
      "Comptable",
      "Architecte",
      "Boulanger",
      "Coiffeur",
      "Cuisinier",
      "Employé",
      "Entraîneur",
      "Entrepreneur",
      "Designer",
      "Docteur",
      "Chauffeur",
      "Ingénieur",
      "Conseiller financier",
      "Instructeur de fitness",
      "Jardinier",
      "Coiffeur",
      "Homme à tout faire",
      "Femme de ménage",
      "Spécialiste en informatique",
      "Journaliste",
      "Paysagiste",
      "Massothérapeute",
      "Mécanicien",
      "Musicien",
      "Infirmier",
      "Optométriste",
      "Entraîneur personnel",
      "Photographe",
      "Physiothérapeute",
      "Pilote",
      "Plâtrier",
      "Agent immobilier",
      "Courtier immobilier",
      "Agent de sécurité",
      "Enseignant",
      "Tuteur",
      "Vétérinaire",
      "Écrivain",
      "Instructeur de yoga",
    ]; // Example data in French

    const services = await Service.insertMany(
      serviceNames.map((name) => ({ name }))
    );
    res.json({ message: `${services.length} services saved to the database` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/create-fake-service", async (req, res) => {
  try {
    const businesses = [
      {
        name: "Médecin 1",
        email: "business1@example.com",
        service: "Médecin",
        phone: "11111111",
        location: "Location 1",
        town: "Sousse",
        gmapLat: 35.8328389235004,
        gmapLen: 10.615991102643807,
      },
      {
        name: "Dentiste 2",
        email: "business2@example.com",
        service: "Dentiste",
        phone: "22222222",
        location: "Location 2",
        town: "Sousse",
        gmapLat: 35.83647995756054,
        gmapLen: 10.605370097681702,
      },
      {
        name: "Électricien 3",
        email: "business3@example.com",
        service: "Électricien",
        phone: "33333333",
        location: "Électricien 3",
        town: "Sousse",
        gmapLat: 35.83264210608849,
        gmapLen: 10.612653072512861,
      },
      {
        name: "Plombier 4",
        email: "business4@example.com",
        service: "Plombier",
        phone: "44444444",
        location: "Location 4",
        town: "Sousse",
        gmapLat: 35.828879,
        gmapLen: 10.630994,
      },
      {
        name: "Business 5",
        email: "business5@example.com",
        service: "Avocat",
        phone: "55555555",
        location: "Location 5",
        town: "Sousse",
        gmapLat: 35.84622136213595,
        gmapLen: 10.601910684636904,
      },
      {
        name: "Business 6",
        email: "business6@example.com",
        service: "Coiffeur",
        phone: "66666666",
        location: "Location 6",
        town: "Sousse",
        gmapLat: 35.82002 + Math.random() * 0.03,
        gmapLen: 10.63699 + Math.random() * 0.03,
      },
    ];

    await Business.insertMany(businesses);

    res.send("Dummy businesses created successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = app;
