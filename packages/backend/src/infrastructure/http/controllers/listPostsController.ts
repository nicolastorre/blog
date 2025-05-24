import { Request, Response } from "express";
import { container } from "../../../container";

export const listPostsController = async (req: Request, res: Response) => {
  try {
    const posts = await container.listPostUseCase.execute();
    res.status(201).json(posts);
  } catch (err: any) {
    console.error("Error creating post:", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
};
