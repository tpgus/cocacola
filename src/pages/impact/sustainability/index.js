import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import SustainabilityImage from '../../../assets/images/sustainability.webp';
import teaserConent from '../../../assets/images/teaserContent.webp';
import TeaserContent from './TeaserContent';
import Sustainable from './Sustainable';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('banner')} style={{ backgroundImage: `url(${SustainabilityImage})` }}>
        {/* <img src={SustainabilityImage} alt="Sustainability" className={cx('image')} /> */}
        <h1 className={cx('bannerTitle')}>SUSTAINABILITY</h1>
      </div>
      <div className={cx('effort')}>
        <h1 className={cx('effortTitle')}>지속 가능한 지구를 위한 노력</h1>
        <p className={cx('effortText')}>
          코카-콜라는 지속 가능하고 더 나은 미래를 추구합니다. 모두가 더불어 사는 세상을 만들기 위해 전 세계 수많은
          사람들의 삶, 지역사회,
          <br /> 더 나아가 우리가 살고 있는 지구 전체에 긍정적인 변화를 만들기 위해 노력하고 있습니다.
        </p>
      </div>
      <TeaserContent teaserConent={teaserConent} />
      <Sustainable />
    </div>
  );
};

export default Page;
