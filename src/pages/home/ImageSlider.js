import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ImageSlider.module.scss';

const cx = classNames.bind(styles);

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 임시로 만들어 둔 previous, next 버튼
  // 만약 index값이 0일 때 마지막 이미지로 간다.
  const goToPrevious = () => {
    // const isFirstSlide = currentIndex === 0;
    // const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    // setCurrentIndex(newIndex);
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  // 반대로 마지막 이미지라면, 첫 이미지로 가야한다. 따라서 0이다.
  const goToNext = () => {
    // const isLastSlide = currentIndex === slides.length - 1;
    // const newIndex = isLastSlide ? 0 : currentIndex + 1;
    // setCurrentIndex(newIndex);
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={cx('container')}>
      {/*Arrow*/}
      <div className={cx('leftArrow')} onClick={goToPrevious}>
        ◀
      </div>
      <div className={cx('rightArrow')} onClick={goToNext}>
        ▶
      </div>
      {/* 여기도 div 만들어서, title이랑 description 넣어서 수습하면 됨 */}
      <div className={cx('slide')} style={{ '--slide-image': `url(${slides[currentIndex].url})` }}></div>
      <div className={cx('dotContainer')}>
        {/*이거는 수습하면 됨*/}
        {slides.map((slide, index) => (
          <div key={index} className={cx('dot')} onClick={() => goToSlide(index)}>
            {currentIndex === index ? '⚫️' : '⚪️'}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
