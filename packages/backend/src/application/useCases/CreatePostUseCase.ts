import { IPost } from "domain/interfaces/entities/IPost";
import { IPostRepository } from "domain/interfaces/repositories/IPostRepository";

export class CreatePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(postData: Omit<IPost, "id">): Promise<IPost> {
    const newPost: Omit<IPost, "id"> = {
      title: postData.title,
      body: postData.body,
    };

    const savedPost = await this.postRepository.save(newPost);
    return savedPost;
  }
}
