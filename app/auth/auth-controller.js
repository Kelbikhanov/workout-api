import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'
import { faker } from '@faker-js/faker'
import { hash, verify } from 'argon2'
import { generateToken } from './generate-token.js'
import { userFields } from '../utils/user-utils.js'

export const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const user = await prisma.user.findUnique({
		where: {
			email
		}
	})

	const isValidPassword = await verify(user?.password, password);

	console.log(user, 'user')

	if (user && isValidPassword) {
		const token = generateToken(user.id)
		res.json({ user, token })
	} else {
		res.status(401)
		throw new Error('Email and password arw not correct!')
	}
})

export const registerUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const isHaveUser = await prisma.user.findUnique({
		where: {
			email
		}
	})

	if (isHaveUser) {
		res.status(400)
		throw new Error('User already exists!')
	}

	const user = await prisma.user.create({
		data: {
			email,
			name: faker.person.fullName(),
			password: await hash(password)
		},
		select: userFields
	})

	const token = generateToken(user.id)

	res.json({ user, token })
})
