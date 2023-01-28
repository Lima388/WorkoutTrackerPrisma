import { NextFunction, Request, Response } from "express";
import { setSchema } from "../schemas/set.model.js";
import { Set } from "../protocols/set.js";

export async function setSchemaValidation(req: Request, res: Response, next: NextFunction): Promise< void | Response<number,Record<string,number>>>  {
    try{
        const set: Set = req.body;
        const { error } = setSchema.validate(set, {abortEarly:false});
        if ( error ) {
            const errors = error.details.map((detail) => detail.message);
            return res.status(400).send(errors);
        }
        res.locals.set = set;
        return next();
    }
     catch (err) {
      return res.sendStatus(500);
    }
}