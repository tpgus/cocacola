import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header2.module.scss';
import { ReactComponent as Logo } from '../../assets/common/logo.svg';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header2() {
  const navigate = useNavigate();

  // dropdownStates: 드롭다운 메뉴 상태 저장하는 객체.
  // company, discover, impact 키를 가지고 있으며, 각각의 상태는 true 또는 false
  const [dropdownStates, setDropdownStates] = useState({
    company: false,
    discover: false,
    impact: false,
  });

  // dropdownItems: 드롭다운 메뉴에 표시될 항목들을 정의하는 객체.
  // 50번줄 맵을 통해서 title을 펼쳐줬습니다.
  // 주석 달면서 한,두 줄 더 길어질 수 있음
  const dropdownItems = {
    company: [
      { title: 'Coca-Cola Company', path: '/about/company' },
      { title: 'About', path: '/about' },
    ],
    discover: [
      { title: 'Brand Story', path: '/discover/brand-story' },
      { title: 'Original', path: '/discover/original' },
    ],
    impact: [
      { title: 'Sustainability', path: '/sustainability' },
      { title: 'Social', path: '/social' },
    ],
  };

  // 특정 드롭다운 메뉴를 열고 닫는 함수.
  // dropdown 키와 상태 (true/false)를 인자로 받아 상태를 업데이트합니다.
  // 49, 50줄 보면, onMouseEnter됐을 때, handleDropdown을 true, false로 상태 업데이트
  const handleDropdown = (dropdown, state) => () => {
    setDropdownStates({ ...dropdownStates, [dropdown]: state });
  };

  // 함수 createMenuItem:
  // 각 메뉴 항목의 제목, 경로, 그리고 드롭다운 키를 인자로 받아 리스트 항목(<li>)을 반환합니다.
  // 각 메뉴 항목은 onClick 이벤트로 navigate 함수를 사용하여 해당 경로로 이동합니다.
  // 드롭다운 상태에 따라 해당 드롭다운 메뉴의 항목을 렌더링합니다.
  const createMenuItem = (title, path, dropdownKey) => (
    <li
      onClick={() => navigate(path)}
      className={cx('menuItem', { 'is-open': dropdownStates[dropdownKey], 'current-page': path })}
      onMouseEnter={handleDropdown(dropdownKey, true)}
      onMouseLeave={handleDropdown(dropdownKey, false)}>
      {title} <span className={cx('arrow')}>{dropdownStates[dropdownKey] ? '↓' : '>'}</span>
      {dropdownStates[dropdownKey] && (
        <ul className={cx('dropdown')}>
          {dropdownItems[dropdownKey]?.map((item) => (
            <li key={item.title} className={cx('dropdownItem')} onClick={() => navigate(item.path)}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  // createMenuItem 함수를 사용하여 각 메뉴 항목(Brands, Our Company, Discover, Impact)을 생성하고 렌더링합니다.
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <div className={cx('logo')}>
          <Logo />
        </div>
        <div className={cx('navigation')}>
          <div className={cx('menu')}>
            <div className={cx('text')}>
              <ul className={cx('menuBar')}>
                {createMenuItem('Brands', '/brands', 'brands')}
                {createMenuItem('Our Company', '/about/company', 'company')}
                {createMenuItem('Discover', '/discover/brand-story', 'discover')}
                {createMenuItem('Impact', '/sustainability', 'impact')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header2;
