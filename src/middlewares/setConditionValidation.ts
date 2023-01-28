import { NextFunction, Request, Response } from "express";
import { Set } from "../protocols/set.js";
import weekRepository from "../repositories/week-repository.js";
import exerciseRepository from "../repositories/exercise-repository.js";

export async function setConditionValidation(req: Request, res: Response, next: NextFunction): Promise< void | Response<number,Record<string,number>>>  {
    try{
      const set: Set = req.body;
      const week = await weekRepository.selectById(set.weekid);
      if( week==null){
        return res.sendStatus(400);
      }
      const  exercise   = await exerciseRepository.selectById(set.exerciseid);
      if( exercise == null ){
        return res.sendStatus(400);
      }
      next();
    }
     catch (err) {
      return res.sendStatus(500);
    }
}