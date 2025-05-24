import { IPost } from "domain/interfaces/entities/IPost";
import { IPostRepository } from "domain/interfaces/repositories/IPostRepository";
import { PostModel } from "../models/postModel";
import { Post } from "domain/entities/Post";

export class PostRepositoryImpl implements IPostRepository {
  async save(post: Omit<IPost, "id">): Promise<IPost> {
    const created = await PostModel.create({
      title: post.title,
      body: post.body,
    });
    return new Post({
      id: created.id,
      title: created.title,
      body: created.body,
    });
  }

  async findById(id: string): Promise<Post | null> {
    const found = await PostModel.findById(id);
    if (!found) return null;
    return new Post({ id: found.id, title: found.title, body: found.body });
  }

  async findAll(): Promise<Post[]> {
    const posts = await PostModel.find();
    return posts.map(
      (p) => new Post({ id: p.id, title: p.title, body: p.body })
    );
  }

  async deleteById(id: string): Promise<void> {
    await PostModel.findByIdAndDelete(id);
  }
}
