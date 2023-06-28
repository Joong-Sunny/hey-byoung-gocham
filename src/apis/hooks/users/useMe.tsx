import { useQuery } from '@tanstack/react-query';

import { GetUserResponse } from '@/apis/dto/users/get-user';
import { GetUserTypeResponse } from '@/apis/dto/users/get-user-type';
import { axiosInstance } from '@/libs/axios';

export default function useMe() {
  const { data } = useQuery({
    queryKey: ['userType'],
    queryFn: async () => {
      const res = await axiosInstance.get<GetUserTypeResponse>(
        '/user/type',
        {}
      );
      return res.data;
    },
  });

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user', data?.userId],
    queryFn: async () => {
      const res = await axiosInstance.get<GetUserResponse>(
        `/user/${data?.userId}`
      );
      return res.data;
    },
    enabled: !!data?.userId,
  });

  return {
    user,
    isLoading,
    error,
  };
}
