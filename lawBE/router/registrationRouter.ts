import express from "express"
import { changeAccountPassword, deleteUser, registerLawyer, registerUSer, resetAccountpassword, signInUser, updateUserAvatar, updateUserInfo, verifiedUSer, viewOneUser, viewUsers } from "../controller/registrationController";
import validatorHandler from "../utils/validatorHandler"
import { createAdminValidator, createUserValidator } from "../utils/validator";
import multer from "multer";
const myUpload= multer().single("avatar")

const regRouter= express.Router();

regRouter.route("/all-account").get(viewUsers)
regRouter.route("/:userID/single-account").get(viewOneUser)
regRouter.route("/:userID/delete").delete(deleteUser)

regRouter.route("/register").post( validatorHandler(createUserValidator),registerUSer)
regRouter.route("/sign-in").post(signInUser)
regRouter.route("/:token/verify-account").post(verifiedUSer)
regRouter.route("/register-admin").post(validatorHandler(createAdminValidator),registerLawyer)

regRouter.route("/:userID/update-account-info").patch(updateUserInfo)
regRouter.route("/reset-account-password").patch(resetAccountpassword)
regRouter.route("/:token/change-account-password").patch(changeAccountPassword)
regRouter.route("/:userID/update-account-avatar").patch(myUpload,updateUserAvatar)

export default regRouter;