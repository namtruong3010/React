import React from 'react'
import {  Link } from "react-router-dom";
export default function MenuAdmin() {
    return (
      <ul className="menu-nav ">
      <li className="menu-item " aria-haspopup="true">
          <Link to="/admin/" className="menu-link ">
                  <span className="svg-icon menu-icon"><i className="icon-2x text-dark-50 flaticon-home-2"></i></span>
                  <span className="menu-text"> Trang chủ</span>
          </Link>
      </li>
      <li className="menu-section ">
          <h4 className="menu-text">Sản phẩm</h4>
          <i className="menu-icon ki ki-bold-more-hor icon-md" />
      </li>
      <li className="menu-item " aria-haspopup="true"  data-menu-toggle="hover">
          <a href="#" className="menu-link menu-toggle">
                  <span className="svg-icon menu-icon"><i className="icon-2x text-dark-50 flaticon-folder-1"></i></span>
                  <span className="menu-text"> Sản phẩm</span>
                  <i className="menu-arrow"></i>
          </a>
          <div className="menu-submenu "><i className="menu-arrow"></i>
          <ul className="menu-subnav">
              <li className="menu-item " aria-haspopup="true"><Link to="/admin/them-san-pham" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span></span></i><span className="menu-text">Thêm sản phẩm</span></Link></li>
              <li className="menu-item " aria-haspopup="true"><Link to="/admin/danh-sach-san-pham" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span></span></i><span className="menu-text">Danh sách sản phẩm</span></Link></li>
              </ul>
          </div>
      </li>

      <li className="menu-section ">
          <h4 className="menu-text">Danh mục</h4>
          <i className="menu-icon ki ki-bold-more-hor icon-md" />
      </li>
      <li className="menu-item " aria-haspopup="true"  data-menu-toggle="hover">
          <a href="#" className="menu-link menu-toggle">
                  <span className="svg-icon menu-icon"><i className="icon-2x text-dark-50 flaticon-interface-3"></i></span>
                  <span className="menu-text"> Danh mục</span>
                  <i className="menu-arrow"></i>
          </a>
          <div className="menu-submenu "><i className="menu-arrow"></i>
                <ul className="menu-subnav">
                    <li className="menu-item" aria-haspopup="true"><Link to="/admin/them-danh-muc" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span></span></i><span className="menu-text">Thêm danh mục</span></Link></li>
                    <li className="menu-item" aria-haspopup="true"><Link to="/admin/danh-sach-danh-muc" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span></span></i><span className="menu-text">Danh sách danh mục</span></Link></li>
               </ul>
          </div>
      </li>

      <li className="menu-section ">
          <h4 className="menu-text">Bài viết</h4>
          <i className="menu-icon ki ki-bold-more-hor icon-md" />
      </li>
      <li className="menu-item " aria-haspopup="true"  data-menu-toggle="hover">
          <a href="#" className="menu-link menu-toggle">
                  <span className="svg-icon menu-icon"><i className="icon-2x text-dark-50 flaticon-list"></i></span>
                  <span className="menu-text"> Bài viết</span>
                  <i className="menu-arrow"></i>
          </a>
          <div className="menu-submenu "><i className="menu-arrow"></i>
          <ul className="menu-subnav">
              <li className="menu-item " aria-haspopup="true"><Link to="/admin/them-bai-viet" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span></span></i><span className="menu-text">Thêm bài viết</span></Link></li>
              <li className="menu-item " aria-haspopup="true"><Link to="/admin/danh-sach-bai-viet" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span></span></i><span className="menu-text">Danh sách bài viết</span></Link></li>
              </ul>
          </div>
      </li>
      <li className="menu-section ">
          <h4 className="menu-text">Khác</h4>
          <i className="menu-icon ki ki-bold-more-hor icon-md" />
      </li>
      <li className="menu-item " aria-haspopup="true">
          <a href="index.html" className="menu-link ">
                  <span className="svg-icon menu-icon"><i className="icon-2x text-dark-50 flaticon-bag"></i></span>
                  <span className="menu-text"> Đơn hàng</span>
          </a>
      </li>

      </ul>
    )
}
