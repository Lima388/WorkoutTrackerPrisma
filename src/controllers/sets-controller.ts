import { Request, Response } from "express";
import setRepository from "../repositories/set-repository.js";
import exerciseRepository from "../repositories/exercise-repository.js";
import { Set } from "../protocols/set.js";
import { number } from "joi";
import weekRepository from "../repositories/week-repository.js";

async function listAll (req: Request, res: Response): Promise<Response<Set[],Record<string,number>>> {
  try{
    const result = await setRepository.selectAll();
    return res.status(200).send(result); 
  }catch(error){
    console.log(error);
    return res.sendStatus(500);
  }
}

async function create (req: Request, res: Response): Promise<Response<string,Record<string,number>>>{
  try{
    const set: Set = res.locals.set;
    const result = await setRepository.insert(set);
    return res.status(200).send(result);
  }catch(error){
    console.log(error);
    return res.sendStatus(500);
  }
}

async function update (req: Request, res: Response): Promise<Response<string,Record<string,number>>>{
  try{
    const set: Set = res.locals.set;
    const result = await setRepository.upsert(set);
    return res.status(200).send(result);
  }catch(error){
    console.log(error);
    return res.sendStatus(500);
  } 
}

export {
  listAll,
  create,
  update
}