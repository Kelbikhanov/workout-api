import express from 'express'
import {
	createNewExercise,
	deleteExercise,
	getExercise,
	updateExercise
} from './exercise-controller.js'
import { createNewExerciseLog } from './log/exercise-log-controller.js'
import { protect } from '../middleware/auth-middleware.js'

const router = express.Router()

router.route('/').post(protect, createNewExercise).get(protect, getExercise)

router
	.route('/:id')
	.put(protect, updateExercise)
	.delete(protect, deleteExercise)

router.route('/log/:exerciseId').post(protect, createNewExerciseLog)

export default router
