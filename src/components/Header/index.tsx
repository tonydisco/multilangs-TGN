import Link from 'next/link';
import React, {Fragment} from 'react';
import {PureImage} from '../Common/Images';

const Header = () => {
  return (
    <header>
      <div className="mx-auto px-4">
        <nav className="flex justify-between items-center p-4">
          <div style={{width: '280px'}}>
            <PureImage />
          </div>
          <div>
            <div className="mb-4">
              <div>
                <div className="flex items-center gap-4 justify-end">
                  <div className="w-[20px] h-[20px] cursor-pointer hover:opacity-50">
                    <PureImage url="/icon/SEARCH.svg" />
                  </div>
                  <div className="rounded-[8px] border border-browMain px-4 py-0.5 text-browMain cursor-pointer hover:bg-browMain  hover:text-white transition-all duration-300">
                    <span className="uppercase text-sm font-semibold">
                      Liên hệ
                    </span>
                  </div>
                  <div className="w-[20px] h-[20px] cursor-pointer hover:opacity-50">
                    <PureImage url="/icon/FB.svg" />
                  </div>
                  <div className="w-[20px] h-[20px] cursor-pointer hover:opacity-50">
                    <PureImage url="/icon/ZALO.svg" />
                  </div>
                  <div className="line-btw"></div>
                  <div className="w-[20px] h-[20px] cursor-pointer hover:opacity-50">
                    <PureImage url="/icon/FLAG-VI.svg" />
                  </div>
                </div>
              </div>
            </div>
            <ul className="flex gap-4 items-center relative">
              {rmockRoute.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <li className="relative">
                      <Link
                        href={item.path}
                        className="text-main text-sm uppercase font-semibold"
                      >
                        {item.name}
                      </Link>
                    </li>
                    {index !== rmockRoute.length - 1 && (
                      <div className="line-btw"></div>
                    )}
                  </Fragment>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
      <div className="fade-line-element"></div>
    </header>
  );
};

export default Header;

const rmockRoute = [
  {name: 'Giới thiệu', path: '/'},
  {name: 'Lĩnh vực hoạt động', path: '/page/linh-vuc-hoat-dong'},
  {name: 'Năng lực sản xuất', path: '/page/nang-luc-san-xuat'},
  {name: 'Sản phẩm', path: '/page/san-pham'},
  {name: 'Dự án', path: '/page/du-an'},
  {name: 'Tin tức', path: '/page/tin-tuc'},
  {name: 'Liên hệ - tuyển dụng', path: '/page/lienhe-tuyendung'}
];
