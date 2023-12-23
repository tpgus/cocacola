import React from 'react';
import classNames from 'classnames/bind';

import styles from './index.module.scss';
import ImageSlider from "./ImageSlider";

const cx = classNames.bind(styles);


const Page = () => {
  const slides = [
    {url: "https://www.coca-cola.com/content/dam/onexp/kr/ko/hero-banners/2023-coca-cola-christmas-onexp-1440X810.png/width3840.png", title: "크리스마스엔 산타가 되볼까?", description: "코카-콜라 크리스마스 파티에 폴라베어도 만나고 오너먼트도 뽑아보자!"},
    {url: "https://www.coca-cola.com/content/dam/onexp/kr/ko/hero-banners/brand-story-2023-christmas-special-onexp-1440X810.jpg/width3840.jpg", title: "미리 크리스마스!", description: "코카-콜라 크리스마스 파티에 폴라베어도 만나고 오너먼트도 뽑아보자!"},
    {url: "https://www.coca-cola.com/content/dam/onexp/kr/ko/hero-banners/230901-Hero-Carousel-Main-1440x810.png/width3840.png", title: "원더플하게?", description: "코카-콜라 크리스마스 파티에 폴라베어도 만나고 오너먼트도 뽑아보자!"},
    {url: "https://www.coca-cola.com/content/dam/onexp/kr/ko/home-images/home-page/artwork/10-20-23/231020_Hero-Carousel_Main2_1440x810.jpg/width3840.jpg", title: "뉴진스가 선사하는 코카 콜라", description: "코카-콜라 크리스마스 파티에 폴라베어도 만나고 오너먼트도 뽑아보자!"},
  ]

  return (
      <div className={cx('container')}>
        <div className={cx('slideContainer')}>
          <ImageSlider slides={slides}/>
        </div>
      </div>
  );
};

export default Page;
