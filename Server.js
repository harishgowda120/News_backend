import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

const app = express();
const PORT = 5000;
const API_KEY = "940d1438a9c7418cbce23e208dea12de"; // Load API key from .env

app.use(cors());

app.get("/", async (req, res) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=12&apiKey=${API_KEY}`);
        
        if (!response.ok) {
            throw new Error(`News API Error: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching news:", error.message);
        res.status(500).json({ error: "Failed to fetch news" });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
