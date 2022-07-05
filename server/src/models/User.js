import mongoose from "mongoose";
import Joi from "joi";
// import JoiObjectId from "joi-objectid";

// Joi.objectId = JoiObjectId(Joi); mongoose.Types.ObjectId

export const User = mongoose.model(
  "users",
  mongoose.Schema({
    username: String,
    email: String,
    password: String,
    created_at: {
      type: String,
      default: new Date().toISOString(),
    },
  })
);

export const validateUser = (user) => {
  const joiSchema = Joi.object({
    username: Joi.string().max(40).min(3).required(),
    email: Joi.string().required(),
    password: Joi.string().max(40).min(8).required(),
    created_at: Joi.string(),
  });

  return joiSchema.validate(user);
};
