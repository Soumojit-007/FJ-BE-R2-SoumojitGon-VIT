import Joi from "joi";

export const transactionSchema = Joi.object({
  type: Joi.string().valid("income", "expense").required(),
  amount: Joi.number().precision(2).positive().required(),
  currency: Joi.string().required(),
  description: Joi.string().allow("", null),
  date: Joi.date().required(),
  categoryId: Joi.string().required(),
  exchangeRate: Joi.number().precision(4).positive().required(),
});