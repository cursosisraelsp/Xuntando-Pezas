import { Request } from "express";
import Jwt from "jsonwebtoken";



export interface AuthenticatedRequest extends Request {
    userAuth?: string | Jwt.JwtPayload;
}
