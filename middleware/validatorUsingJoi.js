const Joi=require('joi');
const {requestPostSchema,requestGetSchema}= require('../middleware/schemaValidator.js');

const validatePostSchema = (req, res, next) => {
    const { error} = requestPostSchema.validate(req.body, { abortEarly: false });
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      next();
    }
  };

    const validateGetSchema = (req, res, next) => {
        const { error} = requestGetSchema.validate(req.params, { abortEarly: false });
        if (error) {
          res.status(400).send(error.details[0].message);
        } else {
          next();
        }
      }
module.exports = {validatePostSchema,validateGetSchema}

