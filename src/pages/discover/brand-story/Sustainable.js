import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sustainable.module.scss';
import Card from '../../../components/ui/Card';

import brandStory1 from '../../../assets/images/brandStory1.webp';
import brandStory2 from '../../../assets/images/brandStory2.webp';
import brandStory3 from '../../../assets/images/brandStory3.webp';

const cx = classNames.bind(styles);

const cardData = [
  {
    id: 1,
    imageUrl: brandStory1,
    title: '코카-콜라 X 뉴진스 컬래버레이션곡 `Zero` 공개!',
    description: '조지아 크래프트와 함께라면? 언제 어디서라도, 딱 원하는 내가 된다!',
  },
  {
    id: 2,
    imageUrl: brandStory2,
    title: '제로+제로! 여름날에 어울리는 코카-콜라 제로 시리즈',
    description: '짜릿한 시원함이 필요한 여름날, 코카-콜라 제로를 취향껏 콜라 마시자!',
  },
  {
    id: 3,
    imageUrl: brandStory3,
    title: '뉴진스와 연결되는 비밀의 문을 열다! `Zero` 포트북 리뷰',
    description: '코카-콜라 제로와 뉴진스의 짜릿한 만남을 담아낸 코카-콜라 포토북을 공개합니다',
  },
];

function Sustainable() {
  return (
    <div className={cx('container')}>
      <h1 className={cx('title')}>연관 콘텐츠</h1>
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
