const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.post('/api/book', async (req, res) => {
try {
const r = await axios.post('http://210.4.73.10:52/appointments/trust_apt_pub/appointment', req.body, {
headers: { 'Content-Type': 'application/json' }
});
res.json(r.data);
} catch (e) {
res.status(500).json({ error: e.message });
}
});
module.exports = app; 
