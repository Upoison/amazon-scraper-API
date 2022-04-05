const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = '58b13c404f4e637b70a70e5d58c9ce05';
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Amazon Scraper API.');
});

// GET Product Details
app.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;

    try{
        const response = await request(`${baseUrl}&url=https://www.amazom.com/dp/${productId}`)

        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);

    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));