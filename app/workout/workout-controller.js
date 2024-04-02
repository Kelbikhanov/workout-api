import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'

export const getWorkout = asyncHandler(async (req, res) => {
	const workout = await prisma.workout.findUnique({
		where: {
			id: +req.params.id
		},
		include: {
			exercises: true
		}
	})

	const minutes = Math.ceil(workout.exercises.length * 3.7)

	res.json({ ...workout, minutes })
})

export const getWorkouts = asyncHandler(async (req, res) => {
	const workouts = await prisma.workout.findMany({
		orderBy: {
			createdAt: 'desc'
		},
		include: {
			exercises: true
		}
	})

  if (!workouts) {
    res.status(404)
    throw new Error('workouts not found')
  }

	res.json(workouts)
})

export const createNewWorkout = asyncHandler(async (req, res) => {
	const { name, exerciseIds } = req.body

	const workout = await prisma.workout.create({
		where: {
			name,
			exercises: {
				connect: exerciseIds.map(id => ({ id: +id }))
			}
		}
	})

	res.json(workout)
})

export const updateWorkout = asyncHandler(async (req, res) => {
	const { name, exerciseIds } = req.body

	try {
		const workout = await prisma.workout.update({
			where: {
				id: +req.params.id
			},
			data: {
				name,
				exercises: {
					set: exerciseIds.map(id => ({ id: +id }))
				}
			}
		})

		res.json(workout)
	} catch (e) {
		res.status(404)
		throw new Error('workout not found')
	}
})

export const deleteWorkout = asyncHandler(async (req, res) => {
	const { name, time, iconPath } = req.body

	try {
		const workout = await prisma.workout.delete({
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
