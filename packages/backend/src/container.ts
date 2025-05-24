import { CreatePost } from "./application/useCases/CreatePost";
import { PostRepositoryImpl } from "./infrastructure/db/mongoose/repositories/PostRepositoriesImpl";

const postRepositoryImpl = new PostRepositoryImpl();
const createPostUseCase = new CreatePost(postRepositoryImpl);

export const container = {
  createPostUseCase,
};
