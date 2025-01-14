const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/image', (req, res) => {
    const { url } = req.body;
    res.json({ message: `URL received: ${url}` });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
