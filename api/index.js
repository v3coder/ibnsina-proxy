const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// মূল রাউট
app.post('/api/book', async (req, res) => {
    try {
        const r = await axios.post('http://210.4.73.10:52/appointments/trust_apt_pub/appointment', req.body, {
            headers: { 'Content-Type': 'application/json' }
        });
        res.status(200).json(r.data);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// লোকাল টেস্টের জন্য (অপশনাল)
const PORT = process.env.PORT || 3000;
if (require.main === module) {
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}

module.exports = app;
