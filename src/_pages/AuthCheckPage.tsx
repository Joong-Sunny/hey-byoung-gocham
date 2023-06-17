import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouteURL } from '@/App';
import { userAtom } from '@/atom/userData';
import { userType } from '@/constants/userTypeEnum';

/**
 * 검증이 필요한 부분이 컴포넌트라서 AuthHoc를 이용할 수 없을때 이 페이지로 라우팅
 * @constructor
 */
const AuthCheckPage = () => {
  const userInfo = useAtomValue(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    // HOC로 안잡히는 부분 잡기위함
    if (userInfo.userType !== userType.activatedUser) navigate(RouteURL.home);
  }, [userInfo]);
  return <></>;
};

export default AuthCheckPage;
