import express from "express";
const router = express.Router();

/** import controllers */
import {
  getQuestions,
  insertQuestions,
  dropQuestions,
  getResults,
  storeResults,
  dropResults,
} from "../controllers/controller.js";

/** Questions Routes API */

router.get("/questions", getQuestions); /** GET Request */
router.post("/questions", insertQuestions); /** POST Request */
router.delete("/questions", dropQuestions); /** DELETE Request */

/** Results Routes API */
router.get("/result", getResults);
router.post("/result", storeResults);
router.delete("/result", dropResults);

export default router;
