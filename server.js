const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const WHITELIST = ['1338555188570755182']; // Add alts here
const SECRET_KEY = 'key1'; // Change this!

app.get('/validate', (req, res) => {
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

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
