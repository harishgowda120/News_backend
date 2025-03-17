import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // Change require() to import

const app = express();
app.use(cors());

const API_KEY = "940d1438a9c7418cbce23e208dea12de"; // Replace with your actual API Key

app.get("/news", async (req, res) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=12&apiKey=${API_KEY}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch news" });
    }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
