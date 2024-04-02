import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'

export const createNewExercise = asyncHandler(async (req, res) => {
	const { name, time, iconPath } = req.body

	const exercise = await prisma.exercise.create({
		where: {
			name,
			time,
			iconPath
		}
	})

	res.json(exercise)
})

export const updateExercise = asyncHandler(async (req, res) => {
	const { name, time, iconPath } = req.body

	try {
		const exercise = await prisma.exercise.update({
			where: {
				id: +req.params.id
			},
			data: {
				name,
				time,
				iconPath
			}
		})

		res.json(exercise)
	} catch (e) {
		res.status(404)
		throw new Error('Exercise not found')
	}
})

export const deleteExercise = asyncHandler(async (req, res) => {
	const { name, time, iconPath } = req.body

	try {
		const exercise = await prisma.exercise.delete({
			where: {
				id: +req.params.id
			}
		})

		res.json({ message: 'Exercise deleted' })
	} catch (e) {
		res.status(404)
		throw new Error('Exercise not found')
	}
})

export const getExercise = asyncHandler(async (req, res) => {
	const exercises = await prisma.exercise.findMany({
		orderBy: {
			createdAt: 'desc'
		}
	})

	res.json(exercises)
})