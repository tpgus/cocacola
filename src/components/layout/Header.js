import React from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  return <div className={cx('container')}>헤더 영역</div>;
};

export default Header;
