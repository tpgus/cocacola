import React, { useState, useMemo } from 'react';
import classNames from 'classnames/bind';
import { useNavigate, useLocation } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/common/logo.svg';

const cx = classNames.bind(styles);

const NAV_MENUS = [
  {
    title: 'Brands',
    path: '/brands',
  },
  {
    title: 'Our Company',
    subMenus: [
      {
        title: 'Coca-Cola Company',
        path: '/about/company',
      },
      {
        title: 'Since 1886',
        path: '/about/history',
      },
    ],
  },
  {
    title: 'Discover',
    subMenus: [
      {
        title: 'Brand Story',
        path: '/discover/brand-story',
      },
      {
        title: 'Original',
        path: '/discover/original',
      },
    ],
  },
  {
    title: 'Impact',
    subMenus: [
      {
        title: 'Sustainability',
        path: '/sustainability',
      },
      {
        title: 'Social',
        path: '/social',
      },
    ],
  },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hoverMenuIndex, setHoverMenuIndex] = useState(-1);
  const [hoverSubMenuIndex, setHoverSubMenuIndex] = useState(-1);

  const moveToPage = (path) => {
    setHoverMenuIndex(-1);
    navigate(path);
  };

  const currentPageIndex = useMemo(() => {
    return NAV_MENUS.findIndex((menu) => {
      if (menu.subMenus) {
        return menu.subMenus.find((subMenu) => {
          return location.pathname.startsWith(subMenu.path);
        });
      }

      return location.pathname.startsWith(menu.path);
    });
  }, [location]);

  return (
    <div className={cx('container')}>
      <div onClick={() => navigate('/')} className={cx('logoWrapper')}>
        <Logo />
      </div>
      <nav className={cx('navigation')}>
        <ul className={cx('menuWrapper')}>
          {NAV_MENUS.map((menu, index) => (
            <li
              key={index}
              onClick={menu.path ? () => moveToPage(menu.path) : null}
              onMouseEnter={() => setHoverMenuIndex(index)}
              onMouseLeave={() => {
                setHoverMenuIndex(-1);
                setHoverSubMenuIndex(-1);
              }}
              className={cx('menu')}>
              <span className={cx({ highlight: index === currentPageIndex })}>{menu.title}</span>
              {menu.subMenus && (
                <MdOutlineKeyboardArrowRight size={16} className={cx(['icon', { rotate: index === hoverMenuIndex }])} />
              )}
              {menu.subMenus && (
                <div className={cx(['dropdown', { show: index === hoverMenuIndex }])}>
                  <ul className={cx('subMenuWrapper')}>
                    {menu.subMenus.map((subMenu, index) => (
                      <li
                        key={index}
                        onClick={() => moveToPage(subMenu.path)}
                        onMouseEnter={() => setHoverSubMenuIndex(index)}
                        onMouseLeave={() => setHoverSubMenuIndex(-1)}
                        className={cx(['subMenu', { highlight: index === hoverSubMenuIndex }])}>
                        <span>{subMenu.title}</span>
                        {index === hoverSubMenuIndex && (
                          <MdOutlineKeyboardArrowRight size={16} className={cx('icon')} />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
