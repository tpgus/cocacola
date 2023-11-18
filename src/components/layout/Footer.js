import React from 'react';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  return <div className={cx('container')}>푸터 영역</div>;
};

export default Footer;
