import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import discover1 from '../../../assets/images/discover1.webp';
import discover2 from '../../../assets/images/discover2.webp';
import discover3 from '../../../assets/images/discover3.webp';
import Sustainable from './Sustainable';
import Double from './Double';

import original1 from '../../../assets/images/original1.webp';
import original2 from '../../../assets/images/original2.webp';
import RelatedContent from './RelatedContent';

const cx = classNames.bind(styles);

const teaserData = [
  {
    title: '★찐들의 전쟁★ 못 맞히라고 낸 코믈리에',
    description:
      '자신만만한 세 명의 코카-콜라 전문가들은 단계별로 올라가는 난이도의 벽을 넘을 수 있을지! 과연 코믈리에 테스트의 우승자는?',
    link: '/',
    image: discover1,
  },
  {
    title: '에이전트 콕 장도연, 코카-콜라 송 메인 보컬이 되다?​',
    description:
      '에이전트 콕 장도연! 그녀와 함께 두 번째 미션인 New 코카-콜라송 만들기를 도와줄 싱어송라이터는 과연 누구일까? ​',
    link: '/',
    image: discover2,
  },
  {
    title: '뼈그맨 장도연, 코카-콜라 비밀 요원이 되다?​',
    description: '에이전트 콕으로 변신한 장도연! 첫 번째 미션은 코카-콜라 노래 기원 찾기인데, 과연 성공했을까?​',
    link: '/',
    image: discover3,
  },
];

const Page = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('banner')}>
        <img
          src="https://www.coca-cola.com/content/dam/onexp/kr/ko/offerings/original-stories/29-11-2023/231016-full-hero-original-1440x810.jpg/width3840.jpg"
          alt="banner"
        />
      </div>
      <div className={cx('effort')}>
        <h1 className={cx('effortTitle')}>장도연은 어떻게 에이전트 콕이 됐을까? 콕콕콕 비하인드 스토리</h1>

        <h2 style={{ marginTop: '20px' }}>장도연은 어떻게 에이전트 콕이 됐을까? 콕콕콕 비하인드 스토리</h2>
        <p className={cx('effortText')}>
          코카-콜라 관련 궁금증을 콕 집어 콕! 콕! 해결하는 ‘콕콕콕’, 그리고 꿈을 향한 짜릿한 여정 ‘코카 콜라 저니 카풀’
          등 재미있고 유익한 영상 콘텐츠!
        </p>
      </div>
      <Double
        reverse={false}
        contentTitle="콕콕콕 시리즈"
        contentDescription="코카-콜라 관련해서 궁금한 것이 있다면? 에이전트 콕이 나선다! 코카-콜라 관련 궁금증을 이해하기 쉽게 콕! 집어서 콕! 콕! 해결해주는 ‘콕콕콕’ 영상 시리즈"
        image={original1}
      />
      <Double
        reverse={true}
        contentTitle="박준형, 애틀랜타 코카-콜라 본사에 초대받다?!"
        contentDescription="코카-콜라 본사로부터 초청받은 박준형. 5가지 미션을 받는데, 과연 성공할까?"
        image={original2}
      />
      <Sustainable />
      <RelatedContent />
    </div>
  );
};

export default Page;
