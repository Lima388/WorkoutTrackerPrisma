import { create } from 'domain';
import prisma from '../database/database.js';
import { Set, NewSet } from '../protocols/set.js';


async function insert(set: Set) {
  return await prisma.sets.create({
    data: set
  })
}

async function remove(id: number) {
  return await prisma.sets.delete({
    where:{
      id: id
    }
  })
}
async function removeByWeekid(id: number) {
  return await prisma.sets.deleteMany({
    where:{
      weekid: id
    }
  })
}

async function upsert(set: NewSet) {
  return await prisma.sets.upsert({
    where:{
      id:set.id || 0,
    },
    create: set as Set,
    update: set

  })
}

async function selectAll(): Promise<Set[]> {
  return await prisma.$queryRaw`
    SELECT 
      sets.id,
      sets.weekid,
      sets.exerciseid,
      exercises.name as exercise_name,
      sets.weight,
      sets.reps
    FROM 
      sets 
      LEFT JOIN exercises ON sets.exerciseid = exercises.id;
  `; 
}

async function selectById(id: number){

}

const setRepository = {
  insert,
  remove,
  upsert,
  selectAll,
  selectById,
  removeByWeekid
};

export default setRepository;
