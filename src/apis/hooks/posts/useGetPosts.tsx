import { useSuspenseInfiniteQuery } from '@suspensive/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { GetPostsResponse } from '@/apis/dto/posts/get-posts';
import { axiosInstance } from '@/libs/axios';
import { Post } from '@/types/post';

export default function useGetPosts({
  authorId,
  participatingUserId,
  initialPostId,
}: {
  authorId?: number | null;
  participatingUserId?: number | null;
  initialPostId?: number;
} = {}) {
  const { data, fetchNextPage } = useSuspenseInfiniteQuery({
    queryKey: ['posts', initialPostId, authorId, participatingUserId],
    queryFn: async ({ pageParam }) => {
      if (authorId || participatingUserId) {
        const res = await axiosInstance.get<GetPostsResponse>('/worries', {
          params: {
            sort: 'DESC',
            take: 10,
            nextCursorId: pageParam || initialPostId,
            authorId,
            participatingUserId,
          },
        });
        return res.data;
      } else {
        const res = await axios.get<GetPostsResponse>('/worries', {
          baseURL: import.meta.env.VITE_SERVER_API,
          params: {
            sort: 'DESC',
            take: 10,
            nextCursorId: pageParam || initialPostId,
          },
        });
        return res.data;
      }
    },
    getNextPageParam: (lastPage) => lastPage.meta.nextId || undefined,
  });

  const { ref, inView } = useInView({
    rootMargin: '100px 0px 0px 0px',
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const posts: Post[] = data?.pages
    .map((page) => page.data)
    .flat()
    .map((post) => ({
      id: post.id,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      title: post.title,
      content: post.content,
      expirationTime: post.expirationTime,
      worryFiles: post.worryFiles.filter((file) => file.status === 'activated'),
      user: {
        ...post.user,
        birthday: post.user.birthDate,
      },
      replyCount: post.replyCount,
      userWorryChoiceCount: post.userWorryChoiceCount,
    }));

  return {
    posts,
    totalCount: data.pages[0].meta.total,
    ref,
  };
}
