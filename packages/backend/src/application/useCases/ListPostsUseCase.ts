import { IPost } from "domain/interfaces/entities/IPost";
import { IPostRepository } from "domain/interfaces/repositories/IPostRepository";

export class ListPostsUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(): Promise<IPost[]> {
    return await this.postRepository.findAll();
  }
}
