import React from 'react';
import classNames from 'classnames/bind';

import styles from './Latest.module.scss';

const cx = classNames.bind(styles);

const Latest = ({ img, title, content }) => {
  return (
    <div className={cx('container')}>
      <img src={img} alt="thumbnail" />
      <div className={cx('content')}>
        <h2>{title}</h2>
        <p>{content}</p>
        <a href="https://www.coca-cola.com/kr/ko/about-us/history/why-sprite-has-sported-green-color">더 보기</a>
      </div>
    </div>
  );
};

export default Latest;
