import React, { useState, useMemo } from 'react';
import classNames from 'classnames/bind';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';

import styles from './index.module.scss';
import Card from './Card';
import { OPTIONS, BRANDS } from '../../constants/brands';

const cx = classNames.bind(styles);

const Page = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState(
    OPTIONS.find((option) => option.id === location.hash.split('#')[1]) ?? OPTIONS[0],
  );

  const handleSelectOption = (id) => {
    window.location.hash = id;
    setCurrentOption(OPTIONS.find((option) => option.id === id));
  };

  const filteredBrands = useMemo(() => {
    if (currentOption.brand === '모든 브랜드') return BRANDS;

    return BRANDS.filter(({ brands }) => brands.includes(currentOption.brand));
  }, [currentOption]);

  return (
    <div className={cx('container')}>
      <h1 className={cx('title')}>Brands</h1>
      <div className={cx('text')}>분류 기준을 선택하세요.</div>
      <div onClick={() => setIsOpen(!isOpen)} className={cx('selector')}>
        <span className={cx('text')}>{currentOption.brand}</span>
        <MdKeyboardArrowDown className={cx(['icon', { isOpen }])} />
      </div>
      {isOpen && (
        <div className={cx('options')}>
          {OPTIONS.map((option, index) => (
            <div key={index} onClick={() => handleSelectOption(option.id)} className={cx('option')}>
              {currentOption.id === option.id ? <IoIosRadioButtonOn color="black" /> : <IoIosRadioButtonOff />}
              <div className={cx('text')}>{option.brand}</div>
            </div>
          ))}
        </div>
      )}
      <div className={cx('brands')}>
        {filteredBrands.map((brand, index) => (
          <Card key={index} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default Page;
