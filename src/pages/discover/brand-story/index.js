import React from 'react';
import classNames from 'classnames/bind';

import styles from './index.module.scss';
import Double from '../../impact/sustainability/Double';
import brand1 from '../../../assets/images/brand1.webp';
import brand2 from '../../../assets/images/brand2.webp';

import Related from './Related';
import Sustainable from './Sustainable';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('banner')}>
        <img
          src="https://www.coca-cola.com/content/dam/onexp/kr/ko/offerings/brand-story/brand-story/231016_full-hero_brand-story_1440x810.jpg/width3840.jpg"
          alt="banner"
        />
      </div>
      <div className={cx('intro')}>
        코카-콜라, 환타, 스프라이트 등 다양한 코카-콜라사 브랜드 관련 마케팅, 모델 인터뷰, 비하인드 화보 등 재미있고
        흥미진진한 브랜드 이야기
      </div>
      <Double
        reverse={false}
        contentTitle="뉴진스 참여, 코-크 스튜디오 트랙 공개!"
        contentDescription="뉴진스, 존 바티스트, J.I.D, 까밀로, 캣 번스 등 글로벌 아티스트가 참여한 ‘Be Who You Are(Real Magic)’에 이어 ‘Zero’ 리믹스 버전이 공개되었다.​"
        image={brand1}
      />
      <Double
        reverse={true}
        contentTitle="한국 코카-콜라"
        contentDescription="한국 코카-콜라가 설립된 이후 50여 년간 걸어온 여정, 그리고 앞으로 나아갈 미래"
        image={brand2}
      />
      <Sustainable />
    </div>
  );
};

export default Page;
