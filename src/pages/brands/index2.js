import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

import brands1 from '../../assets/images/brands/kr_coca_cola_logo_500x180.webp';
import brands2 from '../../assets/images/brands/kr_sprite_logo_green-text-only_477x180.webp';
import brands3 from '../../assets/images/brands/logo_07_Fanta.webp';
import brands4 from '../../assets/images/brands/logo_06_Dr.pepper.webp';
import brands5 from '../../assets/images/brands/logo_21_Powerade.webp';
import brands6 from '../../assets/images/brands/logo_17_Toreta.webp';

const cx = classNames.bind(styles);

// 하지만 brands가 많아지면 어떻게 관리할 것인가?
const brands = [
  { name: 'CocaCola', image: brands1, brand: 'coca' },
  { name: 'Sprite', image: brands2, brand: 'sprite' },
  { name: 'Fanta', image: brands3, brand: 'fanta' },
  { name: 'DrPepper', image: brands4, brand: 'coca' },
  { name: 'Powerade', image: brands5, brand: 'sports' },
  // { name: 'Toreta', image: brands6, brand: 'hydration' },
];

// 카테고리 관리 배열
const categories = [
  { label: '모든 브랜드', value: 'all' },
  { label: 'Coca-Cola', value: 'coca' },
  { label: 'Sprite', value: 'sprite' },
  { label: 'Fanta', value: 'fanta' },
];

const Page = () => {
  const [selectCategory, setSelectCategory] = useState('all');

  const handleCategoryChange = (e) => {
    setSelectCategory(e.target.value);
  };

  // js filter를 사용해, 선택 된 브랜드만 보여줍니다.
  // {} 중괄호 사용법 알아보기
  const filteredBrands = selectCategory === 'all' ? brands : brands.filter(({ brand }) => brand === selectCategory);

  // 중괄호 사용법
  // (item) => item.brand...
  // ({item}) => brand...

  return (
    <div className={cx('container')}>
      <div className={cx('intro')}>
        <h1 className={cx('title')}>Brands</h1>
        <p className={cx('description')}>분류 기준을 선택하세요</p>
      </div>

      {/* 선택하는 카테고리 */}
      <div className={cx('categorySelector')}>
        <select onChange={handleCategoryChange} className={cx('categoryDropdown')}>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      {/* 여기서부터 이미지 */}
      <div className={cx('brandContainer')}>
        {filteredBrands.map((brand) => (
          <div key={brand.name} className={cx('brandItem')}>
            <img src={brand.image} alt={brand.name} className={cx('brandImage')} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
