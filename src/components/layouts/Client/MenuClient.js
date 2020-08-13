import React from 'react'
import {  Link } from "react-router-dom";
export default function MenuClient() {
    return (
      <div className="main-menu f-right d-none d-lg-block">
      <nav>                                                
        <ul id="navigation">                                                                                                                                     
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/san-pham">Sản phẩm</Link></li>
          <li><Link to="/danh-muc">Danh mục</Link></li>
          <li><Link to="/tin-tuc">Tin tức</Link></li>
          <li><Link to="/lien-he">Liên hệ</Link></li>
        </ul>
      </nav>
    </div>
    )
}
