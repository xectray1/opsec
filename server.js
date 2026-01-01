const express = require('express');
const app = express();

const WHITELIST = ['1338555188570755182'];
const SECRET_KEY = process.env.SECRET_KEY;

app.get('/', (req, res) => {
    const { discord_id, key } = req.query;

    if (key !== SECRET_KEY) {
        return res.status(403).json({ valid: false, error: 'Invalid key' });
    }

    if (WHITELIST.includes(discord_id)) {
        res.json({ valid: true });
    } else {
        res.json({ valid: false });
    }
});

module.exports = app;
