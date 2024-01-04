import React from 'react';
import classNames from 'classnames/bind';

import styles from './RelatedContent.module.scss';

const cx = classNames.bind(styles);

const CONTENT = [
  {
    title: '★찐들의 전쟁★ 못 맞히라고 낸 코믈리에 테스트​',
    content: (
      <p>
        자신만만한 세 명의 코카-콜라 전문가들은 단계별로 올라가는 난이도의 벽을 넘을 수 있을지! 과연 코믈리에 테스트의
        우승자는?
      </p>
    ),
    thumbnail:
      'https://www.coca-cola.com/content/dam/onexp/kr/ko/offerings/original-stories/29-11-2023/original-1.jpg/width3840.jpg',
  },
  {
    title: '에이전트 콕 장도연, 코카-콜라 송 메인 보컬이 되다?​',
    content: (
      <p>
        에이전트 콕 장도연! 그녀와 함께 두 번째 미션인 New 코카-콜라송 만들기를 도와줄 싱어송라이터는 과연 누구일까?
      </p>
    ),
    thumbnail:
      'https://www.coca-cola.com/content/dam/onexp/kr/ko/offerings/original-stories/29-11-2023/original-2.jpg/width3840.jpg',
  },
  {
    title: '뼈그맨 장도연, 코카-콜라 비밀 요원이 되다?',
    content: <p>에이전트 콕으로 변신한 장도연! 첫 번째 미션은 코카-콜라 노래 기원 찾기인데, 과연 성공했을까?</p>,
    thumbnail:
      'https://www.coca-cola.com/content/dam/onexp/kr/ko/offerings/original-stories/29-11-2023/original-3.jpg/width3840.jpg',
  },
];

const RelatedContent = () => {
  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>연관 콘텐츠</h2>
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
