import React from 'react';
import classNames from 'classnames/bind';
import { MdOutlineLocationOn } from 'react-icons/md';
import { RiFacebookLine, RiTwitterXLine, RiInstagramLine, RiYoutubeFill } from 'react-icons/ri';

import styles from './Footer.module.scss';
import { MENUS } from '../../constants/footer';
import { ReactComponent as Logo } from '../../assets/images/logo-white-large.svg';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('top')}>
        <Logo />
        <a href="https://www.coca-cola.com/country-selector">
          <MdOutlineLocationOn size={24} />
          <span>한국</span>
        </a>
      </div>
      <div className={cx('middle')}>
        <div className={cx('left')}>
          {MENUS.map((menu) => (
            <div className={cx('navs')}>
              <div className={cx('title')}>{menu.title}</div>
              <ul className={cx('menus')}>
                {menu.subMenus.map((submenu) => (
                  <li className={cx('menu')}>{submenu.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={cx('right')}>
          <div className={cx('links')}>
            <RiYoutubeFill className={cx('icon')} />
            <RiTwitterXLine className={cx('icon')} />
            <RiInstagramLine className={cx('icon')} />
            <RiFacebookLine className={cx('icon')} />
          </div>
        </div>
      </div>
      <div className={cx('bottom')}>© 2023 The Coca‑Cola Company. 판권 소유</div>
    </div>
  );
};

export default Footer;
