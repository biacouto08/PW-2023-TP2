import { NextFunction, Request, Response } from "express"


export const ensureAuthenticated = (req: Request, res: Response, next: NextFunction) => {
	const auth = req.headers.authorization
	if (!auth) return res.status(401).json({ error: "Unauthorized" })
	next()
}
