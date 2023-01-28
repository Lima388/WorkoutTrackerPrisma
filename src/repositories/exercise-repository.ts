import prisma from '../database/database.js';
import { Exercise, NewExercise } from '../protocols/exercise.js';

async function create(exercise: Exercise) {
    return await prisma.exercises.create({
      data: exercise
    })
  
}
async function selectAll() {
  return prisma.exercises.findMany();
}
async function selectById(id: number){
  return prisma.exercises.findUnique({
    where:{
      id: id,
    }
  })
}

const exerciseRepository = {
  create,
  selectAll,
  selectById
};

export default exerciseRepository;

/* {
  "id":1,
  "weekid": 1,
  "exerciseid": 1,
  "reps": 1,
  "weight": 5
} */