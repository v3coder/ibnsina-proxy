const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/book', async (req, res) => {
    try {
        const response = await axios.post('http://210.4.73.10:52/appointments/trust_apt_pub/appointment', req.body, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Origin': 'http://210.4.73.10:52',
                'Referer': 'http://210.4.73.10:52/appointments/apps/doctor/45'
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ 
            error: error.message,
            details: error.response ? error.response.data : "No response from server"
        });
    }
});

module.exports = app;
