import express from 'express'
import {
	createNewExercise,
	deleteExercise,
	getExercise,
	updateExercise
} from './exercise-controller.js'
import { protect } from '../middleware/auth-middleware.js'

const router = express.Router()

router.route('/').post(protect, createNewExercise).get(protect, getExercise)

router
	.route('/:id')
	.put(protect, updateExercise)
	.delete(protect, deleteExercise)

export default router
