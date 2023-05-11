const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const TownModel = require("./models/TownSuggestion");
const Service = require("./models/ServiceSuggestion");
const Business = require("./models/business");
const Dummy = require("./Controllers/dummyDataController");

app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://boudhraad:Password12345@lespagejaunes.wihi6be.mongodb.net/pageJaune?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

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

app.get("/towns", async (req, res) => {
  try {
    const towns = await TownModel.find();
    res.json(towns);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/services", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/search", async (req, res) => {
  const service = req.query.service;
  const town = req.query.town;
  const data = [];

  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${service}+in+${town}&key=AIzaSyAs2DHu6AvTQ-no_c4panFGZW0K5W-bdyg`
  );
  response.data.results.map((item) => {
    data.push({
      name: item.name,
      location: item.formatted_address,
      gmapLat: item.geometry.location.lat,
      gmapLen: item.geometry.location.lng,
      address: item.formatted_address,
      open: item.opening_hours ? item.opening_hours.open_now : null,
      service: service,
      town: town,
      rating: item.rating,
    });
  });

  if (!service || !town)
    return res.status(400).json({ msg: "Please enter all fields" });
  try {
    const businesses = await Business.find({
      $and: [
        { service: { $regex: service, $options: "i" } },
        { town: { $regex: town, $options: "i" } },
      ],
    }).limit(10);
    //console.log(data);
    data.forEach((item) => {
      businesses.push(item);
    });

    console.log(businesses);

    res.json(businesses);
  } catch (err) {
    //  console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/save-data", async (req, res) => {
  console.log(req.body);
  const { name, email, phone, town, service, location, gmapLat, gmapLen } =
    req.body;
  const row = new Business({
    name,
    email,
    phone,
    service,
    town,
    location,
    gmapLat,
    gmapLen,
  });

  try {
    const savedService = await row.save();
    res.status(201).json({ success: true, data: savedService });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false, message: err.message });
  }
});

app.use("/dummy", Dummy);

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
