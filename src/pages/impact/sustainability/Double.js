import React from 'react';
import classNames from 'classnames/bind';
import styles from './Double.module.scss';
import campaign1 from '../../../assets/images/campaign1.webp';

const cx = classNames.bind(styles);

const Double = () => {
  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>지속 가능성 글로벌 리포트</h2>
      <div className={cx('campaign')}>
        <div className={cx('contentContainer')}>
          <h3 className={cx('contentTitle')}>Business & Sustainability Report</h3>
          <p className={cx('contentDescription')}>
            코카-콜라는 지속 가능한 미래를 가꾸고 널리 사랑받는 브랜드와 제품을 만듭니다. 사람들의 갈증을 해소하고 더
            나아가 긍정적인 변화를 이루기 위한 노력을 확인해보세요.
          </p>
          <a href="/" className={cx('contentLink')}>
            글로벌 리포트 확인하기
          </a>
        </div>
        <div className={cx('imageContainer')}>
          <img src={campaign1} alt="Campaign1" className={cx('campaignImage')} />
        </div>
      </div>
    </div>
  );
};

export default Double;
