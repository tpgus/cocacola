import React from 'react';
import classNames from 'classnames/bind';

import styles from './RelatedContent.module.scss';

const cx = classNames.bind(styles);

const CONTENT = [
  {
    title: '1985년 뉴코-크 출시는 왜 실패했나',
    content: (
      <p>
        코카-콜라 ‘뉴코-크’ 출시는 왜 세기의 마케팅 실수라고 불릴까? 수 천 건의 항의 전화가 쏟아졌던 1985년 뉴코-크
        사태의 전말을
        <br />
        되짚어본다
      </p>
    ),
    thumbnail:
      'https://www.coca-cola.com/content/dam/onexp/kr/ko/about-us/history/the-story-of-new-coke/the-story-of-new-coke-02.jpg/width2674.jpg',
  },
  {
    title: '이런 이벤트 어때요: 발렌타인데이, 코카-콜라의 로맨틱한 이벤트',
    content: <p>사랑하는 사람에게 마음을 표현하기 딱 좋은 날! 발렌타인 데이에 코카-콜라가 빠질 수 없다.</p>,
    thumbnail:
      'https://www.coca-cola.com/content/dam/onexp/kr/ko/about-us/history/coca-cola-valentineday-ads/coca-cola-valentineday-ads-05.png/width2674.png',
  },
  {
    title: '[코카-콜라를 만든 사람들 제3편] 코카-콜라를 60년간 이끈 CEO, 로버트 우드러프의 리더십',
    content: (
      <p>
        코카-콜라의 역사를 이야기할 때 로버트 우드러프를 빼놓고 이야기할 수 없다. 그는 60년간 회사를 이끌며, 코카-콜라를
        글로벌 기업으로 성장시켰다.
      </p>
    ),
    thumbnail:
      'https://www.coca-cola.com/content/dam/onexp/kr/ko/about-us/history/the-chronicle-of-coca-cola-robert-woodruff/the-chronicle-of-coca-cola-robert-woodruff_1198x898(M)_re.png/width2674.png',
  },
];

const RelatedContent = () => {
  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>Related Content</h2>
      <div className={cx('contents')}>
        {CONTENT.map((item, index) => (
          <div key={index} className={cx('contentWrapper')}>
            <div className={cx('content')}>
              <div className={cx('detail')}>
                <h3>{item.title}</h3>
                <div>{item.content}</div>
                <button type="button">더 보기</button>
              </div>
              <div className={cx('thumbnail')}>
                <img src={item.thumbnail} alt="thumbnail" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedContent;
