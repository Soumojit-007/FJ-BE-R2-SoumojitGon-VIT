import Joi from "joi";

export const transactionSchema = Joi.object({
  type: Joi.string().valid("income", "expense").required(),

  amount: Joi.number()
    .positive()
    .required(),

  currency: Joi.string().required(),

  description: Joi.string()
    .allow("", null),

  date: Joi.date().required(),

  categoryId: Joi.string()
    .guid({ version: "uuidv4" })
    .required(),

  exchangeRate: Joi.number()
    .positive()
    .required()
});