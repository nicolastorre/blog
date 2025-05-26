import { Post } from "domain/entities/Post";
import type { IPost } from "domain/interfaces/entities/IPost";
import { useCallback, useEffect, useState } from "react";
import { BASE_URL } from "../config/apiConfig";

export function usePosts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = (): Promise<IPost[]> => {
    return fetch(`${BASE_URL}/posts`)
      .then((response) => response.json())
      .then((json) => json.map((data: IPost) => new Post(data)));
  };

  const loadPosts = useCallback(async () => {
    const posts = await getPosts();
    setPosts(posts);
  }, []);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return { posts, loadPosts };
}
