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

export const UpdateTaskValidation = {
  body: Joi.object().required().keys({
    completed: Joi.boolean().required(),
  }),
  params: Joi.object().required().keys({
    id: Joi.number().required(),
  }),
};


export const DeleteTaskValidation = {
  params: Joi.object()
    .required()
    .keys({
      id: Joi.number().required(),
    }),
};