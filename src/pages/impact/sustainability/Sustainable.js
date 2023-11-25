import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sustainable.module.scss';
import Card2 from '../../../components/ui/Card2';
import Sustainable1 from '../../../assets/images/sustainable1.webp';
import Sustainable2 from '../../../assets/images/sustainable2.webp';
import Sustainable3 from '../../../assets/images/sustainable3.webp';

const cx = classNames.bind(styles);

const cardData = [
  {
    id: 1,
    imageUrl: Sustainable1,
    title: '지속 가능한 패키징',
    description:
      '우리 제품 생산에 사용되는 플라스틱이 환경에 미치는 영향을 최소화하기 위해 다양한 목표를 설정하고 달성하기 위해 노력하고 있습니다.',
  },
  {
    id: 2,
    imageUrl: Sustainable2,
    title: 'ONETHEPL 캠페인',
    description:
      '사용한 페트병이 다시 소중한 자원으로 활 용될 수 있도록, 코카-콜라는 다양한 방법 으로 올바른 분리배출 방법을 알리고 있습니다.',
  },
  {
    id: 3,
    imageUrl: Sustainable3,
    title: '물 환원 프로젝트',
    description:
      '물 한 방울도 소중하게 생각하며 책임감을 가지고 사용합니다. 여기서 더 나아가 코카 콜라가 사용한 물을 지역사회에 환원하기 위해 노력하고 있습니다.',
  },
];

function Sustainable() {
  return (
    <div className={cx('container')}>
      <h1 className={cx('title')}>코카-콜라의 지속 가능성 분야</h1>
      <div className={cx('cardContainer')}>
        {cardData.map((card) => (
          <Card2
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
