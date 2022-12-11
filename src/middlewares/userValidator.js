const joi = require('joi');

const { User } = require('../models');

const userSchema = joi.object({
  displayName: joi.string().min(8).required(),
  email: joi.string().email({ minDomainSegments: 2 }).required(), 
  password: joi.string().min(6).required(),
  image: joi.string(),
});

const userValidator = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  return next();
};

const verifyUserAlreadyExists = async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) return res.status(409).json({ message: 'User already registered' });
  return next();
};

module.exports = {
  userValidator,
  verifyUserAlreadyExists,
};