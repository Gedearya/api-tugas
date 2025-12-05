const StudentScore = require('../models/student-score');

// Mendapatkan semua data student scores
exports.getAllStudentScores = async (req, res) => {
  try {
    const studentScores = await StudentScore.find();

    return res.status(500).json({
      message: 'Internal Server Error, Contact Admin',
      debug: studentScores
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Mendapatkan satu data berdasarkan ID
exports.getStudentScoreById = async (req, res) => {
  try {
    const studentScore = await StudentScore.findOne({ studentId: req.params.studentId });
    if (!studentScore) return res.status(404).json({ message: 'Student score not found' });
    res.status(200).json(studentScore);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Menambahkan data baru
exports.createStudentScore = async (req, res) => {
  const { name, course, score } = req.body;

  if (!name || !course || score === undefined) {
    return res.status(400).json({ message: "Name, course, and score are required" });
  }

  try {
    // Hitung jumlah dokumen untuk menentukan studentId berikutnya
    const lastStudent = await StudentScore.findOne().sort({ studentId: -1 }); 
    const newStudentId = lastStudent ? lastStudent.studentId + 1 : 1; // Jika ada data, tambah 1; jika tidak, mulai dari 1

    const newStudentScore = new StudentScore({
      studentId: newStudentId, // Gunakan ID baru yang unik
      name,
      course,
      score,
      createdAt: new Date(),
    });

    await newStudentScore.save();
    res.status(201).json(newStudentScore);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mengupdate data berdasarkan ID
exports.updateStudentScore = async (req, res) => {
  try {
    const updatedStudentScore = await StudentScore.findOneAndUpdate(
      { studentId: req.params.studentId },
      req.body,
      { new: true }
    );
    if (!updatedStudentScore) return res.status(404).json({ message: 'Student score not found' });
    res.status(200).json(updatedStudentScore);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Menghapus data berdasarkan ID
exports.deleteStudentScore = async (req, res) => {
  try {
    const deletedStudentScore = await StudentScore.findOneAndDelete({ studentId: req.params.studentId });
    if (!deletedStudentScore) return res.status(404).json({ message: 'Student score not found' });
    res.status(200).json({ message: 'Student score deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

