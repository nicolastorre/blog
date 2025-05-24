import { Router } from "express";
import { createPostController } from "../controllers/createPostController";
import { listPostsController } from "../controllers/listPostsController";

const router = Router();

router.post("/", createPostController);
router.get("/", listPostsController);

export default router;
