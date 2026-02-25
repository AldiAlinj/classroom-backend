import type { Request, Response, NextFunction } from "express"

const securityMiddleware = async (req: Request,res: Response,next: NextFunction) => {
if(!process.env.NODE_ENV)
}