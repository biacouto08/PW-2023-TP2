import { prisma } from "@/libs/prisma"
import { jwt } from "@/utils/jwt"
import { Request, Response } from "express"

export const get = async (req: Request, res: Response) => {
	const data = await prisma.user.findUnique({
		where: {
			id: 1 
		}
	})
	return res.status(200).json(data)
}

export const patch = async (req: Request, res: Response) => {
	const data = await prisma.user.update({
		where: {
			id: 1 
		},
		data: {
			...req.body
		}
	})
	return res.status(200).json(data)
}

export const login = async (req: Request, res: Response) => {
	const { name, password } = req.body

	const user = await prisma.user.findFirst({
		where: {
			name: name,
			password: password
		}
	})

	if (user) {
		const token = jwt.sign({ data: { id: user.id } })
		res.cookie("auth", token)
		return res.status(200).json({ token })
	}

	return res.status(404)
}
