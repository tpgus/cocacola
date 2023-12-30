import React from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';

import styles from './index.module.scss';
import RelatedContent from './RelatedContent';
import Double from '../../impact/sustainability/Double';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Latest from './Latest';

const cx = classNames.bind(styles);
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const Page = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('banner')}>
        <img
          src="https://www.coca-cola.com/content/dam/onexp/kr/ko/coca-cola-history-lp/landing-page/10-19-23/231016_Full-Hero_History_1440x810.jpg/width2674.jpg"
          alt="banner"
        />
      </div>
      <div className={cx('intro')}>
        130여 년 동안 사람들의 일상 속 짜릿함과 행복함을 나누어 온 코카-콜라. 처음 탄생한 1886년 당시의 비하인드
        스토리부터 코카-콜라의 대표적인 자산, 마케팅 비법까지! 오늘날 코카-콜라가 있기까지의 다양한 흥미롭고 무궁무진한
        역사 이야기 한 눈에 살펴보기
      </div>
      <Double
        reverse={false}
        contentTitle="코카-콜라 병의 100여 년 역사"
        contentDescription="누구도 따라 할 수 없는 독창적인 병의 탄생. 코카-콜라 병의 역사 이야기"
        image="https://www.coca-cola.com/content/dam/onexp/kr/ko/coca-cola-history-lp/landing-page/230912_Campaign_History_1_1280x1024.png/width2674.png"
      />
      <Double
        reverse={true}
        contentTitle="빨간색은 어떻게 코카-콜라를 상징하는 컬러가 됐을까?"
        contentDescription="코카-콜라는 언제부터 빨간색을 사용했을까? 하나의 약속이 된 코카-콜라 빨간색 이야기"
        image="https://www.coca-cola.com/content/dam/onexp/kr/ko/coca-cola-history-lp/landing-page/230912_Campaign_History_2_1280x1024.png/width2674.png"
      />
      <Double
        reverse={false}
        contentTitle="130 여 년의 역사를 한 눈에? World of Coca‑Cola"
        contentDescription="130 여 년의 역사를 한 눈에? World of Coca‑Cola, 애틀랜타 코카-콜라 박물관"
        image="https://www.coca-cola.com/content/dam/onexp/kr/ko/coca-cola-history-lp/landing-page/230912_Campaign_History_2_1280x1024.png/width2674.png"
      />
      <Double
        reverse={true}
        contentTitle="136년 기록이 모여있는 코카-콜라 기록보관소"
        contentDescription="88 서울올림픽 성화봉이 여기에? 허가 없이는 직원들도 들어갈 수 없는 코카-콜라의 공식 기록보관소!"
        image="https://www.coca-cola.com/content/dam/onexp/kr/ko/about-us/history/coca-cola-archive-center-08.jpg/width2674.jpg"
      />
      <Double
        reverse={false}
        contentTitle="코카-콜라를 처음 만든 존 펨버턴 박사"
        contentDescription="코카-콜라를 처음 만든 존 펨버턴 박사! 1886년, 존 펨버턴 박사에 의해 세상에 첫 선을 보인 코카-콜라"
        image="https://www.coca-cola.com/content/dam/onexp/kr/ko/coca-cola-history-lp/landing-page/230912_Content_History_2_1102x827.png/width2674.png"
      />
      <Double
        reverse={true}
        contentTitle="우리가 알고 있는 산타클로스! 코카-콜라가 만들었다고?"
        contentDescription="우리가 알고 있는 산타클로스! 코카-콜라가 만들었다고?"
        image="https://www.coca-cola.com/content/dam/onexp/kr/ko/coca-cola-history-lp/landing-page/230912_Content_History_3_1102x827.png/width2674.png"
      />
      <div className={cx('latest')}>
        <h2>Latest Content</h2>
        <Slider {...settings} className={cx('cards')}>
          <Latest
            title="스프라이트는 왜 초록색일까? 브랜드 컬러에 담긴 비밀"
            content="스프라이트는 왜 초록색일까? 브랜드 컬러에 담긴 비밀"
            img="https://www.coca-cola.com/content/dam/onexp/kr/ko/coca-cola-history-lp/landing-page/10-12-23/231005_Cards_History7_1102x827.jpg/width2674.jpg"></Latest>
          <Latest
            title="한 눈에 보는 코카-콜라! 코카-콜라 저니위키 - 역사 편"
            content="코카-콜라 역사 한 페이지 여정. 흥미진진하고 드라마틱한 그 이야기를 살펴보자!"
            img="https://www.coca-cola.com/content/dam/onexp/kr/ko/coca-cola-history-lp/landing-page/10-12-23/231005_Cards_History2_1102x827.jpg/width2674.jpg"
          />
          <Latest
            title="응답하라! 그때 그 시절, 코카-콜라 자판기!"
            content="1886년 코카-콜라가 탄생한 이래 현재까지 코카-콜라 자판기의 역사를 살펴본다."
            img="https://www.coca-cola.com/content/dam/onexp/kr/ko/coca-cola-history-lp/landing-page/10-12-23/231005_Cards_History3_1102x827.jpg/width2674.jpg"
          />
          <Latest
            title="응답하라! 그때 그 시절, 코카-콜라 자판기!"
            content="1886년 코카-콜라가 탄생한 이래 현재까지 코카-콜라 자판기의 역사를 살펴본다."
            img="https://www.coca-cola.com/content/dam/onexp/kr/ko/coca-cola-history-lp/landing-page/10-12-23/231005_Cards_History3_1102x827.jpg/width2674.jpg"
          />
        </Slider>
      </div>
      <RelatedContent />
    </div>
  );
};

export default Page;
