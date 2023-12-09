import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './index.module.scss';
import {
  sustainability,
  teaserContent,
  sustainable1,
  sustainable2,
  sustainable3,
} from '../../../../assets/images/sustainability';
import GlobalReport from './GlobalReport';

const cx = classNames.bind(styles);
const SUSTAINABILITY_FIELDS = [
  {
    imageUrl: sustainable1,
    title: '지속 가능한 패키징',
    description:
      '우리 제품 생산에 사용되는 플라스틱이 환경에 미치는 영향을 최소화하기 위해 다양한 목표를 설정하고 달성하기 위해 노력하고 있습니다.',
    url: 'https://www.coca-cola.com/kr/ko/sustainability/sustainable-packaging',
  },
  {
    imageUrl: sustainable2,
    title: 'ONETHEPL 캠페인',
    description:
      '사용한 페트병이 다시 소중한 자원으로 활 용될 수 있도록, 코카-콜라는 다양한 방법 으로 올바른 분리배출 방법을 알리고 있습니다.',
    url: 'https://www.coca-cola.com/kr/ko/sustainability/ONETHEPL',
  },
  {
    imageUrl: sustainable3,
    title: '물 환원 프로젝트',
    description:
      '물 한 방울도 소중하게 생각하며 책임감을 가지고 사용합니다. 여기서 더 나아가 코카 콜라가 사용한 물을 지역사회에 환원하기 위해 노력하고 있습니다.',
    url: 'https://www.coca-cola.com/kr/ko/sustainability/water-stewardship',
  },
];

const Page = () => {
  // todo 수정
  const [hoverFieldIndex, setHoverFieldIndex] = useState(-1);

  return (
    <div className={cx('container')}>
      {/* Banner */}
      <div className={cx('banner')}>
        <img src={sustainability} alt="banner" />
        <h1 className={cx('title')}>SUSTAINABILITY</h1>
      </div>
      {/* Effort */}
      <div className={cx('effort')}>
        <div className={cx('header')}>
          <h2 className={cx('title')}>지속 가능한 지구를 위한 노력</h2>
          <p className={cx('description')}>
            코카-콜라는 지속 가능하고 더 나은 미래를 추구합니다. 모두가 더불어 사는 세상을 만들기 위해 전 세계 수많은
            사람들의 삶, 지역사회,
            <br />더 나아가 우리가 살고 있는 지구 전체에 긍정적인 변화를 만들기 위해 노력하고 있습니다.
          </p>
        </div>
        <div className={cx('box')}>
          <div className={cx('content')}>
            <img src={teaserContent} alt="teaser" />
            <div className={cx('responsibility')}>
              <p className={cx('text')}>
                코카-콜라는 사회와 환경, 경제적 책임을
                <br /> 다하기 위하여 종합적인 방식으로
                <br /> 지속 가능성 전략을 고민합니다.
              </p>
              <a href="https://www.coca-colacompany.com/sustainability" target="_blank" rel="noreferrer">
                코카-콜라 글로벌 더 보기
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Fields */}
      <div className={cx('fields')}>
        <h2 className={cx('title')}>코카-콜라의 지속 가능성 분야</h2>
        <div className={cx('cards')}>
          {SUSTAINABILITY_FIELDS.map((item, index) => (
            <a
              key={index}
              onMouseEnter={() => setHoverFieldIndex(index)}
              onMouseLeave={() => setHoverFieldIndex(-1)}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className={cx(['card', { highlight: index === hoverFieldIndex }])}>
              <img src={item.imageUrl} alt="packaging" />
              <div className={cx('content')}>
                <h3 className={cx('title')}>{item.title}</h3>
                <p className={cx('description')}>{item.description}</p>
                <div className={cx(['action', { highlight: index === hoverFieldIndex }])}>자세히 보기 →</div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className={cx('globalReport')}>
        <GlobalReport />
      </div>
    </div>
  );
};

export default Page;
