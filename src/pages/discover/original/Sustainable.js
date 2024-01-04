import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sustainable.module.scss';
import Card from '../../../components/ui/Card';
import Sustainable1 from '../../../assets/images/sustainable1.webp';
import Sustainable2 from '../../../assets/images/sustainable2.webp';
import Sustainable3 from '../../../assets/images/sustainable3.webp';

import stories1 from '../../../assets/images/stories1.webp';
import stories2 from '../../../assets/images/stories2.webp';
import stories3 from '../../../assets/images/stories3.webp';

const cx = classNames.bind(styles);

const cardData = [
  {
    id: 1,
    imageUrl: stories1,
    title: '장도연 X 이이경 코카-콜라 신제품 홍보 영상 제작기',
    description:
      '세계 최초 대한민국 출시한 신제품 `코카-콜라 컨투어 라벨프리` 공개! 에이전트 콕 장도연과 신인 감독(?) 이이경이 신제품 홍보 영상을 제작한다면',
  },
  {
    id: 2,
    imageUrl: stories2,
    title: '인턴 장도연, 코카-콜라 본사 털고 왔습니다',
    description:
      '한국 코카-콜라의 기업 문화와 업무를 파헤치는 1일 인턴 체험기! 과연 베일에 쌓여진 한국-콜라는 어떤 회사일까?',
  },
  {
    id: 3,
    imageUrl: stories3,
    title: '에이전트 콕, 토레타! 월드에서 코카-콜라 직원들을 찾아라!',
    description:
      '수분 가득한 토레타! 월드에 입장한 에이전트 콕, 장도연! 숨어있는 코카-콜라 직원들을 찾아 피크닉을 떠나보자!',
  },
];

function Sustainable() {
  return (
    <div className={cx('container')}>
      <h1 className={cx('title')}>최신 콘텐츠</h1>
      <div className={cx('cardContainer')}>
        {cardData.map((card) => (
          <Card
            key={card.id}
            imageUrl={card.imageUrl} // You will need to import the images or use a path resolver
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Sustainable;
