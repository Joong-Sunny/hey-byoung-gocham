import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { axiosPrivate } from '@/common/libs/axios';
import { User } from '@/features/user/types';
import { userLocalStorage } from '@/features/user/utils/user-local-storage';
import { GetUserResponse } from './dto/get-user';

async function getUser() {
  const res = await axiosPrivate.get<GetUserResponse>('/user');
  return res.data;
}

export function useUser() {
  const { data, isLoading, isError } = useQuery({
    // @ts-ignore
    queryKey: ['user'],
    queryFn: getUser,
    refetchOnWindowFocus: false,
    initialData: userLocalStorage.getUser() || undefined,
    initialDataUpdatedAt: userLocalStorage.getUserUpdatedAt(),
    staleTime: 1000 * 60 * 5, // 5분
  });

  const user: User | null = useMemo(
    () =>
      data && !isError
        ? {
            id: data.id,
            joinStatus: data.joinStatus,
            email: data.email,
            type: data.role,
            vendor: data.vendor,
            nickname: data.nickname,
            birthDate: data.birthDate,
            gender: data.gender,
            residence: data.residence
              ? {
                  value: data.residence.id,
                  label: data.residence.label,
                }
              : null,
            job: data.job,
            worryCategories: data.userWorryCategories?.map((category) => ({
              value: category.worryCategory.id,
              label: category.worryCategory.label,
            })),
            image: data.profileImageUrl,
            lastUploadedAt:
              data.worries?.length > 0 ? data.worries[0].createdAt : null,
          }
        : null,
    [data, isError],
  );

  useEffect(() => {
    if (!data) {
      userLocalStorage.removeUser();
    } else {
      userLocalStorage.saveUser(data);
    }
  }, [data]);

  useEffect(() => {
    if (isError) {
      userLocalStorage.removeUser();
      localStorage.removeItem('token');
    }
  }, [isError]);

  return {
    user,
    isLoggedIn: !!user,
    isLoading,
  };
}
