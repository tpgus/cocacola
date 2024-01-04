// TODO: Double의 경우에는 Component로 분리해야한다.

import React from 'react';
import classNames from 'classnames/bind';

import styles from './index.module.scss';
import ImageSlider from './ImageSlider';

import Double from './Double';
import Card from './Card';

import Brand from '../brands/index';

const cx = classNames.bind(styles);

const Page = () => {
  const slides = [
    {
      url: 'https://www.coca-cola.com/content/dam/onexp/kr/ko/hero-banners/2023-coca-cola-christmas-onexp-1440X810.png/width3840.png',
      title: '크리스마스엔 산타가 되볼까?',
      description: '코카-콜라 크리스마스 파티에 폴라베어도 만나고 오너먼트도 뽑아보자!',
    },
    {
      url: 'https://www.coca-cola.com/content/dam/onexp/kr/ko/hero-banners/brand-story-2023-christmas-special-onexp-1440X810.jpg/width3840.jpg',
      title: '미리 크리스마스!',
      description: '코카-콜라 크리스마스 파티에 폴라베어도 만나고 오너먼트도 뽑아보자!',
    },
    {
      url: 'https://www.coca-cola.com/content/dam/onexp/kr/ko/hero-banners/230901-Hero-Carousel-Main-1440x810.png/width3840.png',
      title: '원더플하게?',
      description: '코카-콜라 크리스마스 파티에 폴라베어도 만나고 오너먼트도 뽑아보자!',
    },
    {
      url: 'https://www.coca-cola.com/content/dam/onexp/kr/ko/home-images/home-page/artwork/10-20-23/231020_Hero-Carousel_Main2_1440x810.jpg/width3840.jpg',
      title: '뉴진스가 선사하는 코카 콜라',
      description: '코카-콜라 크리스마스 파티에 폴라베어도 만나고 오너먼트도 뽑아보자!',
    },
  ];

  return (
    <div className={cx('container')}>
      <div className={cx('slideContainer')}>
        <ImageSlider slides={slides} />
      </div>
      <Double
        reverse={false}
        contentTitle="지속 가능한 지구를 위한 노력"
        contentDescription="코카-콜라는 지속 가능하고 더 나은 미래를 추구합니다. 모두가 더불어 사는 세상을 만들기 위해 전 세계 수많은 사람들의 삶, 지역사회, ​더 나아가 우리가 살고 있는 지구 전체에 긍정적인 변화를 만들기 위해 노력하고 있습니다."
        image="https://www.coca-cola.com/content/dam/onexp/kr/ko/home-images/home-page/artwork/10-19-23/231005_Campaign_Main1_1280x1024.jpg/width3840.jpg"
      />
      <Double
        reverse={true}
        contentTitle="코카-콜라의 짜릿한 여정"
        contentDescription="1886년에 탄생한 코카-콜라의 비하인드 히스토리, 마케팅 비법 등 130여 년 역사 속 흥미로운 이야기"
        image="https://www.coca-cola.com/content/dam/onexp/kr/ko/home-images/home-page/artwork/231025_Campaign_Home_2_1280_1024.png/width3840.png"
      />
      <Brand />
    </div>
  );
};

export default Page;
