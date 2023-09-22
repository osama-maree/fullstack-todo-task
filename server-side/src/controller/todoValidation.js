import Joi from "joi";

export const AddTodoValidation = {
  body: Joi.object()
    .required()
    .keys({
      completed: Joi.boolean().required(),
      content: Joi.string().min(5).required(),
      id: Joi.number().required(),
    }),
};
