import React from 'react';
import Header from '../layouts/Admin/HeaderAdmin';
import Menu from '../layouts/Admin/MenuAdmin';
import Footer from '../layouts/Admin/FooterAdmin';
import '../../asset_admin/plugins/global/plugins.bundle.css';
import '../../asset_admin/plugins/custom/prismjs/prismjs.bundle.css';
import '../../asset_admin/css/style.bundle.css';
import '../../asset_admin/css/themes/layout/header/base/light.css';
import '../../asset_admin/css/themes/layout/header/menu/light.css';
import '../../asset_admin/css/themes/layout/brand/dark.css';
import '../../asset_admin/css/themes/layout/aside/dark.css';
export default ({ children }) => {
    return (
        <div>
        <Header />
                <div className="d-flex flex-column flex-root">
            {/*begin::Page*/}
            <div className="d-flex flex-row flex-column-fluid page">
                {/*begin::Aside*/}
                <div className="aside aside-left  aside-fixed  d-flex flex-column flex-row-auto" id="kt_aside">
                {/*begin::Brand*/}
                <div className="brand flex-column-auto " id="kt_brand" kt-hidden-height={65} style={{}}>
                    {/*begin::Logo*/}
                    <a href="index.html" className="brand-logo">
                    <img alt="Logo" src="/admin/media/logos/logo-light.png" />
                    </a>
                    {/*end::Logo*/}
                    {/*begin::Toggle*/}
                    <button className="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
				<i className="ki ki-double-arrow-back"></i>			</button>
                    {/*end::Toolbar*/}
                </div>
                {/*end::Brand*/}
                {/*begin::Aside Menu*/}
                <div className="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
                    {/*begin::Menu Container*/}
                    <div id="kt_aside_menu" className="aside-menu my-4 scroll ps ps--active-y" data-menu-vertical={1} data-menu-scroll={1} data-menu-dropdown-timeout={500} style={{height: 192, overflow: 'hidden'}}>
                    <Menu />
                    <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__rail-y" style={{top: 0, height: 192, right: 4}}><div className="ps__thumb-y" tabIndex={0} style={{top: 0, height: 40}} /></div></div>
                    {/*end::Menu Container*/}
                </div>
                {/*end::Aside Menu*/}
                </div>
                {/*end::Aside*/}
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                {/*begin::Header*/}
                <div id="kt_header" className="header  header-fixed ">
                    {/*begin::Container*/}
                    <div className=" container-fluid  d-flex align-items-stretch justify-content-between">
                    {/*begin::Header Menu Wrapper*/}
                    <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
                        {/*begin::Header Menu*/}
                        <div id="kt_header_menu" className="header-menu header-menu-mobile  header-menu-layout-default ">
              
                        </div>
                        {/*end::Header Menu*/}
                    </div>
                    {/*end::Header Menu Wrapper*/}
                    {/*begin::Topbar*/}
                    <div className="topbar">
                        {/*begin::Search*/}
                        <div className="dropdown" id="kt_quick_search_toggle">
                        {/*begin::Toggle*/}
                        <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
                            <div className="btn btn-icon btn-clean btn-lg btn-dropdown mr-1">
     	        			</div>
                        </div>
                        {/*end::Toggle*/}
                        {/*begin::Dropdown*/}
                        <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
                            <div className="quick-search quick-search-dropdown" id="kt_quick_search_dropdown">
                            {/*begin:Form*/}
                            <form method="get" className="quick-search-form">
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                                </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Search..." />
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                    <i className="quick-search-close ki ki-close icon-sm text-muted" />
                                    </span>
                                </div>
                                </div>
                            </form>
                            {/*end::Form*/}
                            {/*begin::Scroll*/}
                            <div className="quick-search-wrapper scroll ps" data-scroll="true" data-height={325} data-mobile-height={200} style={{height: 325, overflow: 'hidden'}}>
                                <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__rail-y" style={{top: 0, right: 0}}><div className="ps__thumb-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>
                            {/*end::Scroll*/}
                            </div>
                        </div>
                        {/*end::Dropdown*/}
                        </div>
                        {/*end::Search*/}
                        {/*begin::Notifications*/}
                        <div className="dropdown">
                        {/*begin::Toggle*/}
                        <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
                            <div className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 pulse pulse-primary">
        		                        <span className="pulse-ring" />
                            </div>
                        </div>
                        {/*end::Toggle*/}
                        {/*begin::Dropdown*/}
                        <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
                            <form>
                            {/*begin::Header*/}
                            <div className="d-flex flex-column pt-12 bgi-size-cover bgi-no-repeat rounded-top" style={{backgroundImage: 'url(assets/media/misc/bg-1.jpg)'}}>
                                {/*begin::Title*/}
                                <h4 className="d-flex flex-center rounded-top">
                                <span className="text-white">User Notifications</span>
                                <span className="btn btn-text btn-success btn-sm font-weight-bold btn-font-md ml-2">23 new</span>
                                </h4>
                                {/*end::Title*/}
                                {/*begin::Tabs*/}
                                <ul className="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-line-transparent-white nav-tabs-line-active-border-success mt-3 px-8" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active show" data-toggle="tab" href="#topbar_notifications_notifications">Alerts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#topbar_notifications_events">Events</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#topbar_notifications_logs">Logs</a>
                                </li>
                                </ul>
                                {/*end::Tabs*/}
                            </div>
                            {/*end::Header*/}
                            {/*begin::Content*/}
                            <div className="tab-content">
                                {/*begin::Tabpane*/}
                                <div className="tab-pane active show p-8" id="topbar_notifications_notifications" role="tabpanel">
                                {/*begin::Scroll*/}
                                <div className="scroll pr-7 mr-n7 ps" data-scroll="true" data-height={300} data-mobile-height={200} style={{height: 300, overflow: 'hidden'}}>
                                    {/*begin::Item*/}
                                    <div className="d-flex align-items-center mb-6">
                                    {/*begin::Symbol*/}
                                    <div className="symbol symbol-40 symbol-light-primary mr-5">
                                        <span className="symbol-label">
                                                    </span>
                                    </div>
                                    {/*end::Symbol*/}
                                    {/*begin::Text*/}
                                    <div className="d-flex flex-column font-weight-bold">
                                        <a href="#" className="text-dark text-hover-primary mb-1 font-size-lg">Cool App</a>
                                        <span className="text-muted">Marketing campaign planning</span>
                                    </div>
                                    {/*end::Text*/}
                                    </div>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <div className="d-flex align-items-center mb-6">
                                    {/*begin::Symbol*/}
                                    <div className="symbol symbol-40 symbol-light-warning mr-5">
                                        <span className="symbol-label">
                                                  </span>
                                    </div>
                                    {/*end::Symbol*/}
                                    {/*begin::Text*/}
                                    <div className="d-flex flex-column font-weight-bold">
                                        <a href="#" className="text-dark-75 text-hover-primary mb-1 font-size-lg">Awesome SAAS</a>
                                        <span className="text-muted">Project status update meeting</span>
                                    </div>
                                    {/*end::Text*/}
                                    </div>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <div className="d-flex align-items-center mb-6">
                                    {/*begin::Symbol*/}
                                    <div className="symbol symbol-40 symbol-light-success mr-5">
                                        <span className="symbol-label">
                                                      </span>
                                    </div>
                                    {/*end::Symbol*/}
                                    {/*begin::Text*/}
                                    <div className="d-flex flex-column font-weight-bold">
                                        <a href="#" className="text-dark text-hover-primary mb-1 font-size-lg">Claudy Sys</a>
                                        <span className="text-muted">Project Deployment &amp; Launch</span>
                                    </div>
                                    {/*end::Text*/}
                                    </div>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <div className="d-flex align-items-center mb-6">
                                    {/*begin::Symbol*/}
                                    <div className="symbol symbol-40 symbol-light-danger mr-5">
                                        <span className="symbol-label">
                                                       </span>
                                    </div>
                                    {/*end::Symbol*/}
                                    {/*begin::Text*/}
                                    <div className="d-flex flex-column font-weight-bold">
                                        <a href="#" className="text-dark text-hover-primary mb-1 font-size-lg">Trilo Service</a>
                                        <span className="text-muted">Analytics &amp; Requirement Study</span>
                                    </div>
                                    {/*end::Text*/}
                                    </div>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <div className="d-flex align-items-center mb-6">
                                    {/*begin::Symbol*/}
                                    <div className="symbol symbol-40 symbol-light-info mr-5">
                                        <span className="symbol-label">
                                                     </span>
                                    </div>
                                    {/*end::Symbol*/}
                                    {/*begin::Text*/}
                                    <div className="d-flex flex-column font-weight-bold">
                                        <a href="#" className="text-dark text-hover-primary mb-1 font-size-lg">Bravia SAAS</a>
                                        <span className="text-muted">Reporting Application</span>
                                    </div>
                                    {/*end::Text*/}
                                    </div>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <div className="d-flex align-items-center mb-6">
                                    {/*begin::Symbol*/}
                                    <div className="symbol symbol-40 symbol-light-danger mr-5">
                                        <span className="symbol-label">
                                                      </span>
                                    </div>
                                    {/*end::Symbol*/}
                                    {/*begin::Text*/}
                                    <div className="d-flex flex-column font-weight-bold">
                                        <a href="#" className="text-dark text-hover-primary mb-1 font-size-lg">Express Wind</a>
                                        <span className="text-muted">Software Analytics &amp; Design</span>
                                    </div>
                                    {/*end::Text*/}
                                    </div>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <div className="d-flex align-items-center mb-6">
                                    {/*begin::Symbol*/}
                                    <div className="symbol symbol-40 symbol-light-success mr-5">
                                        <span className="symbol-label">
                                                     </span>
                                    </div>
                                    {/*end::Symbol*/}
                                    {/*begin::Text*/}
                                    <div className="d-flex flex-column font-weight-bold">
                                        <a href="#" className="text-dark text-hover-primary mb-1 font-size-lg">Bruk Fitness</a>
                                        <span className="text-muted">Web Design &amp; Development</span>
                                    </div>
                                    {/*end::Text*/}
                                    </div>
                                    {/*end::Item*/}
                                    <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__rail-y" style={{top: 0, right: 0}}><div className="ps__thumb-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>
                                {/*end::Scroll*/}
                                {/*begin::Action*/}
                                <div className="d-flex flex-center pt-7"><a href="#" className="btn btn-light-primary font-weight-bold text-center">See All</a></div>
                                {/*end::Action*/}
                                </div>
                                {/*end::Tabpane*/}
                                {/*begin::Tabpane*/}
                                <div className="tab-pane" id="topbar_notifications_events" role="tabpanel">
                                {/*begin::Nav*/}
                                <div className="navi navi-hover scroll my-4 ps" data-scroll="true" data-height={300} data-mobile-height={200} style={{height: 300, overflow: 'hidden'}}>
                                    {/*begin::Item*/}
                                    <a href="#" className="navi-item">
                                    <div className="navi-link">
                                        <div className="navi-icon mr-2">
                                        <i className="flaticon2-line-chart text-success" />
                                        </div>
                                        <div className="navi-text">
                                        <div className="font-weight-bold">
                                            New report has been received
                                        </div>
                                        <div className="text-muted">
                                            23 hrs ago
                                        </div>
                                        </div>
                                    </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" className="navi-item">
                                    <div className="navi-link">
                                        <div className="navi-icon mr-2">
                                        <i className="flaticon2-paper-plane text-danger" />
                                        </div>
                                        <div className="navi-text">
                                        <div className="font-weight-bold">
                                            Finance report has been generated
                                        </div>
                                        <div className="text-muted">
                                            25 hrs ago
                                        </div>
                                        </div>
                                    </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" className="navi-item">
                                    <div className="navi-link">
                                        <div className="navi-icon mr-2">
                                        <i className="flaticon2-user flaticon2-line- text-success" />
                                        </div>
                                        <div className="navi-text">
                                        <div className="font-weight-bold">
                                            New order has been received
                                        </div>
                                        <div className="text-muted">
                                            2 hrs ago
                                        </div>
                                        </div>
                                    </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" className="navi-item">
                                    <div className="navi-link">
                                        <div className="navi-icon mr-2">
                                        <i className="flaticon2-pin text-primary" />
                                        </div>
                                        <div className="navi-text">
                                        <div className="font-weight-bold">
                                            New customer is registered
                                        </div>
                                        <div className="text-muted">
                                            3 hrs ago
                                        </div>
                                        </div>
                                    </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" className="navi-item">
                                    <div className="navi-link">
                                        <div className="navi-icon mr-2">
                                        <i className="flaticon2-sms text-danger" />
                                        </div>
                                        <div className="navi-text">
                                        <div className="font-weight-bold">
                                            Application has been approved
                                        </div>
                                        <div className="text-muted">
                                            3 hrs ago
                                        </div>
                                        </div>
                                    </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" className="navi-item">
                                    <div className="navi-link">
                                        <div className="navi-icon mr-2">
                                        <i className="flaticon2-pie-chart-3 text-warning" />
                                        </div>
                                        <div className="navinavinavi-text">
                                        <div className="font-weight-bold">
                                            New file has been uploaded
                                        </div>
                                        <div className="text-muted">
                                            5 hrs ago
                                        </div>
                                        </div>
                                    </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" className="navi-item">
                                    <div className="navi-link">
                                        <div className="navi-icon mr-2">
                                        <i className="flaticon-pie-chart-1 text-info" />
                                        </div>
                                        <div className="navi-text">
                                        <div className="font-weight-bold">
                                            New user feedback received
                                        </div>
                                        <div className="text-muted">
                                            8 hrs ago
                                        </div>
                                        </div>
                                    </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" className="navi-item">
                                    <div className="navi-link">
                                        <div className="navi-icon mr-2">
                                        <i className="flaticon2-settings text-success" />
                                        </div>
                                        <div className="navi-text">
                                        <div className="font-weight-bold">
                                            System reboot has been successfully completed
                                        </div>
                                        <div className="text-muted">
                                            12 hrs ago
                                        </div>
                                        </div>
                                    </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" className="navi-item">
                                    <div className="navi-link">
                                        <div className="navi-icon mr-2">
                                        <i className="flaticon-safe-shield-protection text-primary" />
                                        </div>
                                        <div className="navi-text">
                                        <div className="font-weight-bold">
                                            New order has been placed
                                        </div>
                                        <div className="text-muted">
                                            15 hrs ago
                                        </div>
                                        </div>
                                    </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" className="navi-item">
                                    <div className="navi-link">
                                        <div className="navi-icon mr-2">
                                        <i className="flaticon2-notification text-primary" />
                                        </div>
                                        <div className="navi-text">
                                        <div className="font-weight-bold">
                                            Company meeting canceled
                                        </div>
                                        <div className="text-muted">
                                            19 hrs ago
                                        </div>
                                        </div>
                                    </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" className="navi-item">
                                    <div className="navi-link">
                                        <div className="navi-icon mr-2">
                                        <i className="flaticon2-fax text-success" />
                                        </div>
                                        <div className="navi-text">
                                        <div className="font-weight-bold">
                                            New report has been received
                                        </div>
                                        <div className="text-muted">
                                            23 hrs ago
                                        </div>
                                        </div>
                                    </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" className="navi-item">
                                    <div className="navi-link">
                                        <div className="navi-icon mr-2">
                                        <i className="flaticon-download-1 text-danger" />
                                        </div>
                                        <div className="navi-text">
                                        <div className="font-weight-bold">
                                            Finance report has been generated
                                        </div>
                                        <div className="text-muted">
                                            25 hrs ago
                                        </div>
                                        </div>
                                    </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" className="navi-item">
                                    <div className="navi-link">
                                        <div className="navi-icon mr-2">
                                        <i className="flaticon-security text-warning" />
                                        </div>
                                        <div className="navi-text">
                                        <div className="font-weight-bold">
                                            New customer comment recieved
                                        </div>
                                        <div className="text-muted">
                                            2 days ago
                                        </div>
                                        </div>
                                    </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" className="navi-item">
                                    <div className="navi-link">
                                        <div className="navi-icon mr-2">
                                        <i className="flaticon2-analytics-1 text-success" />
                                        </div>
                                        <div className="navi-text">
                                        <div className="font-weight-bold">
                                            New customer is registered
                                        </div>
                                        <div className="text-muted">
                                            3 days ago
                                        </div>
                                        </div>
                                    </div>
                                    </a>
                                    {/*end::Item*/}
                                    <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__rail-y" style={{top: 0, right: 0}}><div className="ps__thumb-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>
                                {/*end::Nav*/}
                                </div>
                                {/*end::Tabpane*/}
                                {/*begin::Tabpane*/}
                                <div className="tab-pane" id="topbar_notifications_logs" role="tabpanel">
                                {/*begin::Nav*/}
                                <div className="d-flex flex-center text-center text-muted min-h-200px">
                                    All caught up!
                                    <br />
                                    No new notifications.
                                </div>
                                {/*end::Nav*/}
                                </div>
                                {/*end::Tabpane*/}
                            </div>
                            {/*end::Content*/}
                            </form>
                        </div>
                        {/*end::Dropdown*/}
                        </div>
                        {/*end::Notifications*/}
                        {/*begin::Quick Actions*/}
                        <div className="dropdown">
                        {/*begin::Toggle*/}
                        <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
                            <div className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1">
                          		        			</div>
                        </div>
                        {/*end::Toggle*/}
                        {/*begin::Dropdown*/}
                        <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
                            {/*begin:Header*/}
                            <div className="d-flex flex-column flex-center py-10 bgi-size-cover bgi-no-repeat rounded-top" style={{backgroundImage: 'url(assets/media/misc/bg-1.jpg)'}}>
                            <h4 className="text-white font-weight-bold">
                                Quick Actions
                            </h4>
                            <span className="btn btn-success btn-sm font-weight-bold font-size-sm mt-2">23 tasks pending</span>
                            </div>
                            {/*end:Header*/}
                            {/*begin:Nav*/}
                            <div className="row row-paddingless">
                            {/*begin:Item*/}
                            <div className="col-6">
                                <a href="#" className="d-block py-10 px-5 text-center bg-hover-light border-right border-bottom">
                                        <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">Accounting</span>
                                <span className="d-block text-dark-50 font-size-lg">eCommerce</span>
                                </a>
                            </div>
                            {/*end:Item*/}
                            {/*begin:Item*/}
                            <div className="col-6">
                                <a href="#" className="d-block py-10 px-5 text-center bg-hover-light border-bottom">
                                  <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">Administration</span>
                                <span className="d-block text-dark-50 font-size-lg">Console</span>
                                </a>
                            </div>
                            {/*end:Item*/}
                            {/*begin:Item*/}
                            <div className="col-6">
                                <a href="#" className="d-block py-10 px-5 text-center bg-hover-light border-right">
                                       <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">Projects</span>
                                <span className="d-block text-dark-50 font-size-lg">Pending Tasks</span>
                                </a>
                            </div>
                            {/*end:Item*/}
                            {/*begin:Item*/}
                            <div className="col-6">
                                <a href="#" className="d-block py-10 px-5 text-center bg-hover-light">
                                        <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">Customers</span>
                                <span className="d-block text-dark-50 font-size-lg">Latest cases</span>
                                </a>
                            </div>
                            {/*end:Item*/}
                            </div>
                            {/*end:Nav*/}
                        </div>
                        {/*end::Dropdown*/}
                        </div>
                        {/*end::Quick Actions*/}
                        {/*begin::Cart*/}
                        <div className="topbar-item">
                        <div className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1" id="kt_quick_cart_toggle">
                         	        	  </div>
                        </div>
                        {/*end::Cart*/}
                        {/*begin::Quick panel*/}
                        <div className="topbar-item">
                        <div className="btn btn-icon btn-clean btn-lg mr-1" id="kt_quick_panel_toggle">
                          	          </div>
                        </div>
                        {/*end::Quick panel*/}
                        {/*begin::Chat*/}
                        <div className="topbar-item">
                        <div className="btn btn-icon btn-clean btn-lg mr-1" data-toggle="modal" data-target="#kt_chat_modal">
                        			 </div>
                        </div>
                        {/*end::Chat*/}
                        {/*begin::Languages*/}
                        <div className="dropdown">
                        {/*begin::Toggle*/}
                        <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
                            <div className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1">
                            <img className="h-20px w-20px rounded-sm" src="assets/media/svg/flags/226-united-states.svg" />
                            </div>
                        </div>
                        {/*end::Toggle*/}
                        {/*begin::Dropdown*/}
                        <div className="dropdown-menu p-0 m-0 dropdown-menu-anim-up dropdown-menu-sm dropdown-menu-right">
                            {/*begin::Nav*/}
                            <ul className="navi navi-hover py-4">
                            {/*begin::Item*/}
                            <li className="navi-item">
                                <a href="#" className="navi-link">
                                <span className="symbol symbol-20 mr-3">
                                    <img src="assets/media/svg/flags/226-united-states.svg" />
                                </span>
                                <span className="navi-text">English</span>
                                </a>
                            </li>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <li className="navi-item active">
                                <a href="#" className="navi-link">
                                <span className="symbol symbol-20 mr-3">
                                    <img src="assets/media/svg/flags/128-spain.svg" />
                                </span>
                                <span className="navi-text">Spanish</span>
                                </a>
                            </li>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <li className="navi-item">
                                <a href="#" className="navi-link">
                                <span className="symbol symbol-20 mr-3">
                                    <img src="assets/media/svg/flags/162-germany.svg" />
                                </span>
                                <span className="navi-text">German</span>
                                </a>
                            </li>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <li className="navi-item">
                                <a href="#" className="navi-link">
                                <span className="symbol symbol-20 mr-3">
                                    <img src="assets/media/svg/flags/063-japan.svg" />
                                </span>
                                <span className="navi-text">Japanese</span>
                                </a>
                            </li>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <li className="navi-item">
                                <a href="#" className="navi-link">
                                <span className="symbol symbol-20 mr-3">
                                    <img src="assets/media/svg/flags/195-france.svg" />
                                </span>
                                <span className="navi-text">French</span>
                                </a>
                            </li>
                            {/*end::Item*/}
                            </ul>
                            {/*end::Nav*/}
                        </div>
                        {/*end::Dropdown*/}
                        </div>
                        {/*end::Languages*/}
                        {/*begin::User*/}
                        <div className="topbar-item">
                        <div className="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
                            <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Hi,</span>
                            <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">Sean</span>
                            <span className="symbol symbol-lg-35 symbol-25 symbol-light-success">
                            <span className="symbol-label font-size-h5 font-weight-bold">S</span>
                            </span>
                        </div>
                        </div>
                        {/*end::User*/}
                    </div>
                    {/*end::Topbar*/}
                    </div>
                    {/*end::Container*/}
                </div>
                {/*end::Header*/}
                {/*begin::Content*/}
                { children }
                {/*end::Content*/}
                {/*begin::Footer*/}
               
                {/*end::Footer*/}
                </div>
                {/*end::Wrapper*/}
            </div>
            {/*end::Page*/}
            </div>
        </div>
    )
}
