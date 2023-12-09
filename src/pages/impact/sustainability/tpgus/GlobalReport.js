import React from 'react';
import classNames from 'classnames/bind';

import styles from './GlobalReport.module.scss';

const cx = classNames.bind(styles);

const REPORTS = [
  {
    title: 'Business & Sustainability Report',
    detail:
      '코카-콜라는 지속 가능한 미래를 가꾸고 널리 사랑받는 브랜드와 제품을 만듭니다. 사람들의 갈증을 해소하고 더 나아가 긍정적인 변화를 이루기 위한 노력을 확인해보세요.​',
    imageUrl:
      'https://www.coca-cola.com/content/dam/onexp/kr/ko/sustainability/sustainability-governance-report.jpg/width2674.jpg',
  },
  {
    title: 'SUSTAINABILITY RESOURCE CENTER',
    detail:
      '코카-콜라는 지속 가능한 미래를 만들기 위해 노력합니다. 기업의 운영에서부터 사람들의 일상까지 더 나은 미래를 만들기 위한 코카-콜라의 노력을 확인해보세요.​',
    imageUrl:
      'https://www.coca-cola.com/content/dam/onexp/kr/ko/home-images/sustainability/sustainability---page/kr_Global%20Sustainability%20Vision%20Campaign%20Card_Resource_Centre%201280x1024.jpg/width2674.jpg',
  },
];

const GlobalReport = () => {
  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>지속 가능성 글로벌 리포트</h2>
      <div className={cx('section')}>
        <div className={cx('info')}>
          <div className={cx('detail')}>
            <h3>{REPORTS[0].title}</h3>
            <p>{REPORTS[0].detail}</p>
          </div>
          <button>글로벌 리포트 확인하기</button>
        </div>
        <div className={cx('imageWrapper')}>
          <img src={REPORTS[0].imageUrl} alt="report" />
        </div>
      </div>
      <div className={cx('section')}>
        <div className={cx('info')}>
          x
          <div className={cx('detail')}>
            <h3>{REPORTS[1].title}</h3>
            <p>{REPORTS[1].detail}</p>
          </div>
          <button>코카-콜라 글로벌 더 보기</button>
        </div>
        <div className={cx('imageWrapper')}>
          <img src={REPORTS[1].imageUrl} alt="report" />
        </div>
      </div>
    </div>
  );
};

export default GlobalReport;
