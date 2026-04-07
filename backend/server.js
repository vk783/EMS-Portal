const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Database = require('./config/db');
const router = require('./routes/Router');


const app = express();
dotenv.config();

// Connect to MongoDB
Database().then(() => {
    console.log("DB function executed");
}).catch((err) => {
    console.log("DB function error", err);
});

app.use(cors());
app.use(express.json());
app.use(router);

app.use("/auth/api", router);


PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



