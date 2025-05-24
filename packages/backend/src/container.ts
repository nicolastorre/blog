import { CreatePostUseCase } from "./application/useCases/CreatePostUseCase";
import { ListPostsUseCase } from "./application/useCases/ListPostsUseCase";
import { PostRepositoryImpl } from "./infrastructure/db/mongoose/repositories/PostRepositoriesImpl";

const postRepositoryImpl = new PostRepositoryImpl();
const createPostUseCase = new CreatePostUseCase(postRepositoryImpl);
const listPostUseCase = new ListPostsUseCase(postRepositoryImpl);

export const container = {
  createPostUseCase,
  listPostUseCase,
};
