const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS
const connectDB = require('./db/connect');
const studentScoresRoutes = require('./routes/studentScores');

dotenv.config(); // Memuat variabel lingkungan dari file .env

const app = express();

// Middleware
app.use(express.json()); // Parsing JSON
app.use(cors()); // Aktifkan CORS

connectDB(); // Koneksi ke database

// Menggunakan routes untuk student scores
app.use('/api/student-scores', studentScoresRoutes);

// Menjalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
