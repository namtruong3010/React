import React from 'react';
import Menu from '../../layouts/Client/MenuClient';
export default function HeaderClient() {
    return (
  <header>
  {/* Header Start */}
  <div className="header-area">
    <div className="main-header ">
      <div className="header-top top-bg d-none d-lg-block">
        <div className="container-fluid">
          <div className="col-xl-12">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="header-info-left d-flex">
                {/* <div className="flag">
                  <img src="assets/img/icon/header_icon.png" alt />
                </div> */}
                {/* <div className="select-this">
                  <form action="#">
                    <div className="select-items">
                      <select name="select" id="select1">
                        <option value>USA</option>
                        <option value>SPN</option>
                        <option value>CDA</option>
                        <option value>USD</option>
                      </select>
                    </div>
                  </form>
                </div> */}
                {/* <ul className="contact-now">     
                  <li>+777 2345 7886</li>
                </ul> */}
              </div>
              <div className="header-info-right">
                <ul>                                          
                  <li><a href="login.html">My Account </a></li>
                  <li><a href="product_list.html">Wish List</a></li>
                  <li><a href="cart.html">Shopping</a></li>
                  <li><a href="cart.html">Cart</a></li>
                  <li><a href="checkout.html">Checkout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom  header-sticky">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-3">
              <div className="logo">
                <a href="index.html"><img src="/client/img/logo/logo.png" alt /></a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 col-md-7 col-sm-5">
              {/* Main-menu */}
              <Menu />
            </div> 
            <div className="col-xl-5 col-lg-3 col-md-3 col-sm-3 fix-card">
              <ul className="header-right f-right d-none d-lg-block d-flex justify-content-between">
                <li className="d-none d-lg-block"> <a href="#" className="btn  header-btn">Đăng nhập</a></li>
              </ul>
            </div>
            {/* Mobile Menu */}
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
</header>

    )
}
