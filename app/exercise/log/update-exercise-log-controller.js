import asyncHandler from 'express-async-handler'
import { prisma } from '../../prisma.js'

export const updateExerciseLogTime = asyncHandler(async (req, res) => {
	const { weight, repeat, isCompleted } = req.body

	try {
		const exerciseLogTimes = await prisma.exerciseLog.update({
			where: {
				id: +req.params.id
			},
			data: {
				weight,
				repeat,
				isCompleted
			}
		})
		res.json(exerciseLogTimes)
	} catch (e) {
		res.status(404)
		throw new Error('Exercise log time not found')
	}
})

export const completeExerciseLog = asyncHandler(async (req, res) => {
	const { isCompleted } = req.body

	try {
		const exerciseLog = await prisma.exerciseLog.update({
			where: {
				id: +req.params.id
			},
			data: {
				isCompleted
			},
			include: {
				exercise: true,
				workoutLog: true
			}
		})
		res.json(exerciseLog)
	} catch (e) {
		res.status(404)
		throw new Error('Exercise log not found')
	}
})
