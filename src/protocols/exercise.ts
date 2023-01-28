import { exercises } from "@prisma/client";

export type ExerciseEntity = {
    id:number;
    name:string;
}

export type Exercise = Omit<ExerciseEntity, "id">

export type NewExercise = Partial<ExerciseEntity>