const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('../db/connect');
const studentScoresRoutes = require('../routes/studentScores');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();
app.use('/api/student-scores', studentScoresRoutes);

module.exports = app;
