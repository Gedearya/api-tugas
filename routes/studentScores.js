const express = require('express');
const router = express.Router();
const {
  getAllStudentScores,
  getStudentScoreById,
  createStudentScore,
  updateStudentScore,
  deleteStudentScore
} = require('../controllers/studentScores');

router.get('/', getAllStudentScores);
router.get('/:studentId', getStudentScoreById);
router.post('/', createStudentScore);
router.put('/:studentId', updateStudentScore); 
router.delete('/:studentId', deleteStudentScore); 

module.exports = router;
