import { Router } from "express";
import {
  deleteInterpretedLaw,
  interpretedLaw,
  updateInterpretedLaw,
  viewInterpretedLaw,
  viewOneInterpretedLaw,
} from "../controller/lawyerController";
import multer from "multer"

const upload =multer().single("picture")

const router = Router();

router.route("/:userID/intepret-law").post(upload,interpretedLaw);
router.route("/intepret-law").get(viewInterpretedLaw);
router.route("/:lawID/intepret-law").get(viewOneInterpretedLaw);
router.route("/:lawID/intepret-law").patch(updateInterpretedLaw);
router.route("/:lawID/intepret-law").delete(deleteInterpretedLaw);

export default router;
