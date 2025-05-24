import { Request, Response } from "express";
import { container } from "../../../container";

export const createPostController = async (req: Request, res: Response) => {
  const { title, body } = req.body;

  try {
    const post = await container.createPostUseCase.execute({ title, body });
    res.status(201).json(post);
  } catch (err: any) {
    console.error("Error creating post:", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
};
