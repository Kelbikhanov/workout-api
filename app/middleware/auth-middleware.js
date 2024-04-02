import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import { prisma } from '../prisma.js'
import { userFields } from '../utils/user-utils.js'

export const protect = asyncHandler(async (req, res) => {
	let token

	if (req.header.authorization.startsWith('Bearer')) {
		token = req.header.authorization.split('')[1]

		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN)

		const userFound = await prisma.user.findUnique({
			where: {
				id: decoded.userId
			},
			select: userFields
		})

		if (userFound) {
			req.user = userFound
			next()
		} else {
			res.status(401)
			throw new Error('Not authorized, token failed!')
		}
	}

  if(!token) {
    res.status(401)
			throw new Error('Not authorized, i dj not have a token!')
  }
})
