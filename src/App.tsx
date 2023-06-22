import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Layout from '@/_components/layout/Layout';

import Auth from './HOC/Auth';
import GNBHOC from './_components/common/GNBHOC';
import AuthCheckPage from './_pages/AuthCheckPage';
import CollectInformation from './_pages/collectInformation/CollectInformation';
import Feed from './_pages/home/Feed';
import Home from './_pages/home/Home';
import Login from './_pages/login/Login';
import LoginOauthKakao from './_pages/login/LoginOauthKakao';
import Onboarding from './_pages/login/Onboarding';
import RegisterTerm from './_pages/login/RegisterTerm';
import ModalController from './_pages/modal/ModalController';
import EditProfile from './_pages/user/EditProfile';
import Settings from './_pages/user/Settings';
import User from './_pages/user/User';
import Write from './_pages/write/Write';
import { userAtom } from './atom/userData';
import RouteChangeTracker from './utils/RouteChangeTracker';
import getUserInfo from './utils/getUserInfo';

export const RouteURL = {
  home: '/',
  feed: '/feed',
  feed_star: '/feed/:id', // 포스트 상세
  feed_route_star: '/feed/:id/:route', // 포스트 상세
  login: '/login',
  login_oauth_kakao: '/login/oauth/kakao',
  register_term: '/register/term',
  onboarding: '/onboarding',
  write: '/write',
  collect_information: '/collect-information',
  user: '/user',
  settings: '/settings',
  edit_profile: '/edit-profile',
  not_found: '/*',
  auth_check: '/auth-check',
};

function App() {
  const [userData, setUserData] = useAtom(userAtom);

  useEffect(() => {
    const checkLoginStatus = async () => {
      // 로그인 여부를 확인하는 함수 호출
      const userInfo = await getUserInfo();
      if (userInfo !== 'null') {
        setUserData(userInfo);
      } else {
        setUserData((value) => ({ ...value, userId: 0 }));
      }
    };
    checkLoginStatus();
  }, []);

  return (
    <Layout>
      <ModalController />
      <BrowserRouter>
        <RouteChangeTracker />
        <Routes>
          <Route path={RouteURL.home} element={<Home />} />
          <Route
            path={RouteURL.collect_information}
            element={<CollectInformation />}
          />
          <Route
            path={RouteURL.feed_star}
            element={<Auth SpecificComponent={Feed} requiredLogin={true} />}
          />
          <Route
            path={RouteURL.feed_route_star}
            element={<Auth SpecificComponent={Feed} requiredLogin={true} />}
          />
          <Route
            path={RouteURL.login}
            element={<Auth SpecificComponent={Login} requiredLogin={false} />}
          />
          <Route
            path={RouteURL.login_oauth_kakao}
            element={<LoginOauthKakao />}
          />
          <Route path={RouteURL.register_term} element={<RegisterTerm />} />
          <Route path={RouteURL.onboarding} element={<Onboarding />} />
          <Route
            path={RouteURL.write}
            element={<Auth SpecificComponent={Write} requiredLogin={true} />}
          />
          <Route
            path={RouteURL.user}
            element={<Auth SpecificComponent={User} requiredLogin={true} />}
          />
          <Route
            path={RouteURL.edit_profile}
            element={
              <Auth SpecificComponent={EditProfile} requiredLogin={true} />
            }
          />
          <Route path={RouteURL.settings} element={<Settings />} />
          <Route path={RouteURL.not_found} element={<Navigate to={'/'} />} />
          <Route
            path={RouteURL.auth_check}
            element={
              <Auth SpecificComponent={AuthCheckPage} requiredLogin={true} />
            }
          />
        </Routes>
        <GNBHOC />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
