const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); // يسمح لأي موقع يجيب البيانات من السيرفر
/* endpoint get all quran surah 114  */
app.get("/api/surat", async (req, res) => {
    try {
        const response = await axios.get("https://equran.id/api/v2/surat");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "حدث خطأ في جلب البيانات", error });
    }
});

app.get("/api/surat/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`https://equran.id/api/v2/surat/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "حدث خطأ في جلب البيانات", error });
    }
});
// endpoint للاذكار
app.get("/api/azkar", async (req, res) => {
    try {
        const response = await axios.get("https://alquran.vip/APIs/azkar");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "حدث خطأ في جلب البيانات", error });
    }
});
// Endpoint للأدعية
app.get("/api/duas", async (req, res) => {
    try {
        const response = await axios.get("https://alquran.vip/APIs/duas"); // مثال
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "حدث خطأ في جلب البيانات", error });
    }
});

app.listen(PORT, "localhost", () => {
    console.log("Server running on http://localhost:" + PORT);
});