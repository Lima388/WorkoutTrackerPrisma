import { Set } from "./set";

export type Week = {
    id?: number;
    sets?: Omit<Set, "weekid">[];
  }