import { Request, Response } from "express";
import weekRepository from "../repositories/week-repository.js";
import setRepository from "../repositories/set-repository.js";
import { Week } from "../protocols/week.js";

async function listAllWithSets (req: Request, res: Response): Promise<Response<Week[],Record<string,number>>> {
  try{
    const result = await weekRepository.selectAllWithSets();
    return res.status(200).send(result); 
  }catch(error){
    console.log(error);
    return res.sendStatus(500);
  }
  
}

async function create(req: Request, res: Response): Promise<Response<string,Record<string,number>>>{
  try{
    const result  = await weekRepository.insert();
    return res.status(200).send(result); 
  }catch(error){
    console.log(error);
    return res.sendStatus(500);
  }
  
}

async function remove(req: Request, res: Response): Promise<Response<string,Record<string,number>>>{
  try{
    if(isNaN(parseInt(req.params.id as string))){
      return res.sendStatus(400);
    }
    const id:number = parseInt(req.params.id as string);
    await setRepository.removeByWeekid(id);
    await weekRepository.remove(id);
    return res.sendStatus(200);
  }catch(error){
    console.log(error);
    return res.sendStatus(500);
  }
 
}
  export {
  listAllWithSets,
  create,
  remove
}