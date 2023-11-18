import React from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

// 페이지 컴포넌트의 이름은 Page로 통일.
// components 폴더는 다른 페이지들에서도 사용될 수 있는, 공통적으로 사용하는 컴포넌트를 작성

const Page = () => {
  const navigate = useNavigate();

  return <div className={cx('container')}>메인 콘텐츠</div>;
};

export default Page;
