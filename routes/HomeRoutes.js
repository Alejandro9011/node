import express from "express";
import {
  DeleteHouse,
  UpdateHouse,
  CreateHouse,
  GetAllHouse,
  GetHouse,
} from "../controllers/HomeController.js";
const router = express.Router();

router.get("/", GetAllHouse);
router.get("/:id", GetHouse);
router.post("/", CreateHouse);
router.put("/:id", UpdateHouse);
router.delete("/:id", DeleteHouse);

export default router;
