import { Router } from "express";
import { loginHandler, profileHandler } from "../controllers/auth.controllers";
import { requireAuth } from "../middlewares/requireAuth.ts";

const router = Router();

router.post("/login", loginHandler);
router.get("/profile", requireAuth, profileHandler);

export default router;
