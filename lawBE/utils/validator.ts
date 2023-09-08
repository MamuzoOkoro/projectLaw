import joi from "joi"


let regex =
  /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;

export const createAccountValidator = joi.object({
    name:joi.string().required(),
    email:joi.string().lowercase().trim().required(),
    password:joi.string().pattern(new RegExp(regex)).required(),
    confirm:joi.ref("password")
})

export const signInAccountValidator = joi.object({
    email:joi.string().lowercase().trim().required(),
    password:joi.string().pattern(new RegExp(regex)).required(),
})

export const resetAccountValidator = joi.object({
    email:joi.string().lowercase().trim().required(),
})

export const changeAccountValidator = joi.object({
    password:joi.string().pattern(new RegExp(regex)).required(),
})