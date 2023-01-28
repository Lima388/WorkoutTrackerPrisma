import prisma from "../database/database.js"; 
import { Week } from "../protocols/week.js";

async function insert(){
  return await prisma.weeks.create({data:{}});
}

async function remove(id:number){
  return await prisma.weeks.delete({
    where:{
      id: id
    }
  })
}

async function selectById(id:number): Promise<Week|null>{
  return await prisma.weeks.findUnique({
    where:{
      id:id,
    }
  })
}

async function selectAllWithSets(): Promise<Week[]> {
  return await prisma.$queryRaw`
    SELECT 
      weeks.id AS id,
      COALESCE(json_agg(json_build_object('id', sets.id,'exerciseid', exercises.id, 'exercisename', exercises.name, 'weight', sets.weight, 'reps', sets.reps)), '[]') as sets
    FROM 
      weeks
      LEFT JOIN sets ON weeks.id = sets.weekid
      LEFT JOIN exercises ON sets.exerciseid = exercises.id
    GROUP BY weeks.id;
  `;
}
const weekRepository = {
  insert,
  remove,
  selectAllWithSets,
  selectById
};

export default weekRepository;