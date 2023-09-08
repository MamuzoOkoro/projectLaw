import express from "express"
import multer from "multer"
import { deleteUser, viewOneUser, viewUsers } from "../controller/authController"

const router = express.Router()

const Upload = multer().single("avatar")


router.route("/get-user").get(viewUsers)
router.route("/:userID/getOne-user").get(viewOneUser)
router.route("/:userID/delete-user").delete(deleteUser)



router.route("/createUser").post(deleteUser)

