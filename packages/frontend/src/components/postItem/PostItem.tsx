import type { IPost } from "domain/interfaces/entities/IPost";

type PostItemProps = {
  post: IPost;
};

export const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};
