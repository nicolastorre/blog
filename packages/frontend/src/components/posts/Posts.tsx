import { usePosts } from "../../hooks/usePosts";
import { PostItem } from "../postItem/PostItem";

export const Posts: React.FC = () => {
  const { posts } = usePosts();

  return (
    <>
      <h2>Posts</h2>
      <div>
        {posts.map((post) => {
          return <PostItem post={post} key={post.id} />;
        })}
      </div>
    </>
  );
};
