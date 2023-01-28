export type SetEntity = {
  id: number;
  weekid: number;
  exerciseid: number;
  exercisename?: string;
  reps: number;
  weight: number;
}

export type Set = Omit<SetEntity, "id">

export type NewSet = Partial<SetEntity>