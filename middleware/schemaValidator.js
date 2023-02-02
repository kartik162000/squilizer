const Joi=require('joi');

const requestPostSchema = Joi.object({
    title: Joi.string().min(3).required(),
    isComplete: Joi.boolean().required(),
  });

  const requestGetSchema = Joi.object({
    id: Joi.number().integer().required(),
  });

  

  module.exports = {requestPostSchema,requestGetSchema}

