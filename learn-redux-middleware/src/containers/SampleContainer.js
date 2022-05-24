import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';

const SampleContainer = ({ getPost, getUsers, post, users, loadingPost, loadingUsers }) => {
  // 클래스 형태의 컴포넌트 였다면 componentDidMount
  //useEffect에 파라미터로 넣는 함수는 async로 할 수 없기 때문에
  //그 내부에서 async 함수를 선언하고 호출해 줍니다.
  useEffect(() => {
    const fn = async () => {
      try {
        await getPost(1);
        await getUsers(1);
      } catch (error) {
        console.log('error', error);
        console.log('error.response', error.response); //에러조회
      }
    };
    fn();
  }, [getPost, getUsers]);
  return <Sample post={post} users={users} loadingPost={loadingPost} loadingUsers={loadingUsers} />;
};

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading['sample.loading.GET_POST'],
    loadingUsers: loading['sample.loading.GET_USERS'],
  }),
  { getPost, getUsers }
)(SampleContainer);
