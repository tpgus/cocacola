import React from 'react';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card({ imageUrl, title, description, link }) {
  return (
    <div className={cx('container')}>
      <div className={cx('image')} style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className={cx('content')}>
        <h2 className={cx('title')}>{title}</h2>
        <p className={cx('description')}>{description}</p>
        <a href={link} className={cx('link')}>
          자세히 보기 →
        </a>
      </div>
    </div>
  );
}

export default Card;
