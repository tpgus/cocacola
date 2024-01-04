import React from 'react';
import classNames from 'classnames/bind';
import styles from './Double.module.scss';

const cx = classNames.bind(styles);

const Double = ({ reverse, contentTitle, contentDescription, image }) => {
  return (
    <div className={cx('container', { reverse: reverse })}>
      <div className={cx('campaign', { reverse: reverse })}>
        <div className={cx('contentContainer')}>
          <h3 className={cx('contentTitle')}>{contentTitle}</h3>
          <p className={cx('contentDescription')}>{contentDescription}</p>
          <a href="/" className={cx('contentLink')}>
            더 보기
          </a>
        </div>
        <div className={cx('imageContainer')}>
          <img src={image} alt="Campaign" className={cx('campaignImage')} />
        </div>
      </div>
    </div>
  );
};

export default Double;
