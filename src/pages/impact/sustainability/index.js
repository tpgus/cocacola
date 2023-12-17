import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import TeaserContent from './TeaserContent';
import Sustainable from './Sustainable';
import Double from './Double';

// Double Image
import campaign1 from '../../../assets/images/campaign1.webp';
import campaign2 from '../../../assets/images/campaign2.webp';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('banner')}>
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
      <TeaserContent />
      <Sustainable />
      <h2 className={cx('doubleTitle')}>지속 가능성 글로벌 리포트</h2>
      <Double
        reverse={false}
        contentTitle="Business & Sustainability Report"
        contentDescription="코카-콜라는 지속 가능한 미래를 가꾸고 널리 사랑받는 브랜드와 제품을 만듭니다. 사람들의 갈증을 해소하고 더
            나아가 긍정적인 변화를 이루기 위한 노력을 확인해보세요."
        image={campaign1}
      />
      <Double
        reverse={true}
        contentTitle="SUSTAINABILITY RESOURCE CENTER"
        contentDescription="코카-콜라는 지속 가능한 미래를 만들기 위해 노력합니다. 기업의 운영에서부터 사람들의 일상까지 더 나은 미래를 만들기 위한 코카-콜라의 노력을 확인해보세요."
        image={campaign2}
      />
    </div>
  );
};

export default Page;
