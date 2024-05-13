import { Request, Response } from "express";

export const signup = async (req: Request, res: Response) => {
    const {email, passowrd} = req.body;
    console.log(email, passowrd);
}
