import React from 'react';
import classNames from 'classnames/bind';

import styles from './Related.module.scss';

const cx = classNames.bind(styles);

const Related = ({ img, title, content }) => {
  return (
    <div className={cx('container')}>
      <img src={img} alt="thumbnail" />
      <div className={cx('content')}>
        <h2>{title}</h2>
        <p>{content}</p>
        <a href="https://www.coca-cola.com/kr/ko/media-center/cokecokecoke-episode-4">더 보기</a>
      </div>
    </div>
  );
};

export default Related;
