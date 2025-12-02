const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); 
const connectDB = require('./db/connect');
const studentScoresRoutes = require('./routes/studentScores');

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors());

connectDB(); // Koneksi ke database

// Menggunakan routes untuk student scores
app.use('/api/student-scores', studentScoresRoutes);

app.use((req, res, next) => {
  res.status(500).json({
    message: "Internal Server Error"
  });
});

// Menjalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
