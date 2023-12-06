import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import discover1 from '../../../assets/images/discover1.webp';
import discover2 from '../../../assets/images/discover2.webp';
import discover3 from '../../../assets/images/discover3.webp';

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
    <section className={cx('container')}>
      <h2 className={cx('title')}>연관 콘텐츠</h2>
      {teaserData.map((teaser, index) => (
        <div key={index} className={cx('teaser')}>
          <div className={cx('textContainer')}>
            <h3 className={cx('teaserTitle')}>{teaser.title}</h3>
            <div className={cx('teaserDescription')}>{teaser.description}</div>
            <div className={cx('buttonBox')}>
              <a href={teaser.link} className={cx('buttonClick')}>
                더 보기
              </a>
            </div>
          </div>
          <img src={teaser.image} alt={teaser.title} className={cx('teaserImage')} />
        </div>
      ))}
    </section>
  );
};

export default Page;
