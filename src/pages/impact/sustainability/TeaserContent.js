import React from 'react';
import classNames from 'classnames/bind';
import styles from './TeaserContent.module.scss';

const cx = classNames.bind(styles);

function TeaserContent({ teaserConent }) {
  return (
    <div className={cx('container')}>
      <div className={cx('background')}>
        <div className={cx('content')}>
          <div className={cx('textBox')}>
            <p className={cx('responsibility')}>
              코카-콜라는 사회와 환경, 경제적 책임을 <br />
              다하기 위하여 종합적인 방식으로 <br /> 지속 가능성 전략을 고민합니다.
            </p>
            <button className={cx('global')}>코카-콜라 글로벌 더 보기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeaserContent;
