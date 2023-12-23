import React from 'react'
import classNames from 'classnames/bind';
import styles from './ImageSlider.module.scss';

const cx = classNames.bind(styles);

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (index) => {
        setCurrentIndex(index);
    }

    return (
        <div className={cx('container')}>
            {/*Arrow*/}
            <div className={cx('leftArrow')} onClick={goToPrevious}>◀</div>
            <div className={cx('rightArrow')} onClick={goToNext}>▶</div>
            <div
                className={cx('slide')}
                style={{'--slide-image': `url(${slides[currentIndex].url})`}}
            ></div>
            <div className={cx('dotContainer')}>
                {slides.map((slide, index) => (
                    <div key={index} className={cx('dot')} onClick={() => goToSlide(index)}>
                        {currentIndex === index ? '⚫️' : '⚪️'}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default (ImageSlider)
