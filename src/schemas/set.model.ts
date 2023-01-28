import joi from "joi";

export const setSchema = joi.object({
    id: joi.number(),
    weekid: joi.number().required(),
    exerciseid: joi.number().required(),
    reps: joi.number().required(),
    weight: joi.number().required()
});
