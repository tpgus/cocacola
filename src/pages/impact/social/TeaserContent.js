// TODO: Component로 빼는게 맞습니다.
// TODO: Review에서 따로 다루겠습니다. sustainability와 중복됩니다. 또한 다른 곳에서 사용될 가능성이 있습니다.

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
              코카-콜라 재단은 더 나은 미래를 만들기 위해
              <br />
              지역사회를 돕고 있습니다.
            </p>
            <button className={cx('global')}>코카-콜라 글로벌 더 보기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeaserContent;
