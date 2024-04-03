import asyncHandler from 'express-async-handler'
import { prisma } from '../../prisma.js'

export const createNewExerciseLog = asyncHandler(async (req, res) => {
	const { times } = req.body
	const exerciseId = +req.params.exerciseId

	let timesDefault = []

	for (let i = 0; i < times; i++) {
		timesDefault.push({
			weight: 0,
			repeat: 0
		})
	}

  const exerciseLog = await prisma.exerciseLog.create({
    data: {
      user: {
        connect: {
          id: req.user.id
        }
      },
      exercise: {
        connect: {
          id: exerciseId
        }
      },
      times: {
        createMany: {
          data: timesDefault
        }
      }
    }
  })

  res.json(exerciseLog)
})
