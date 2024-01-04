import React from 'react';
import classNames from 'classnames/bind';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

const Card = ({ brand }) => {
  return (
    <div className={cx('container')}>
      <div className={cx('card')}>
        <img src={brand.image} alt="brand" />
      </div>
    </div>
  );
};

export default Card;
