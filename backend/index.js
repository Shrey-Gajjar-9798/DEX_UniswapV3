// index.js
const express = require("express");
const redis = require("redis");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 9798;

var client;

// Create a Redis client
// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

//complete api to fetch information of coin and token.
app.get("/data", async (req, res) => {
  const redisdata = await client.get("democheck");
  if (redisdata != null) {
    return res.json(JSON.parse(redisdata));
  } else {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    );

    (await client).setEx("democheck", 20000, JSON.stringify(data));
    res.json(data);
  }
});


// Start the server
app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  client = await redis
    .createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();
  if (client) {
    console.log("Redis connection successfull! ");
  } else {
    console.log("Not able to connect with redis !");
  }
});
