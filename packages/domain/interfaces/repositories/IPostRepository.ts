import { IPost } from "../entities/IPost";

export interface IPostRepository {
  save(post: Omit<IPost, "id">): Promise<IPost>;
  findById(id: string): Promise<IPost | null>;
  findAll(): Promise<IPost[]>;
  deleteById(id: string): Promise<void>;
}
