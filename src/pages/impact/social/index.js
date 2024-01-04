import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import TeaserContent from './TeaserContent';
import Related from './Related';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('banner')}>
        {/* 소름돋는 점 1. 사진안에 글씨가 있었다. */}
        {/* <h1 className={cx('bannerTitle')}>SUSTAINABILITY</h1> */}
      </div>
      <div className={cx('effort')}>
        <h1 className={cx('effortTitle')}>더 나은 삶의 시작은 지역사회로부터</h1>
        <p className={cx('effortText')}>
          코카-콜라의 구성원뿐만 아니라 서로 영향을 주고 받는 지역사회에 이르기까지
          <br /> 함께 성장하기 위한 발판을 마련하고 많은 사람들의 삶을 개선하기 위해 행동합니다.
        </p>
      </div>
      <TeaserContent />
      <h2 className={cx('doubleTitle')}>코카-콜라의 지역사회 분야</h2>
      <div className={cx('related')}>
        <h2>Related Content</h2>
        <div className={cx('cards')}>
          <Related
            title="지역 사회 커뮤니티"
            content="코카-콜라는 도움이 필요한 사회를 적극적으로 지원하며 우리의 일상에 긍정적인 변화를 이루고자 합니다."
            img="https://www.coca-cola.com/content/dam/onexp/kr/ko/home-images/social/social-page/9-5-23/230901_Cards_Social_1_1102x827.png/width3840.png"
          />
          <Related
            title="스포츠&엔터테인먼트"
            content="코카-콜라만의 방법으로 스포츠, 음악, 게임 및 영화 산업과의 협업하며 소비자들과 소통합니다."
            img="https://www.coca-cola.com/content/dam/onexp/kr/ko/home-images/social/social-page/9-5-23/230901_Cards_Social_2_1102x827.png/width3840.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
