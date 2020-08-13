import React from 'react';
import Header from '../layouts/Client/HeaderClient';
import Footer from '../layouts/Client/FooterClient';

import '../../asset_client/css/bootstrap.min.scss';
import '../../asset_client/css/flaticon.css';
import '../../asset_client/css/slicknav.scss';
import '../../asset_client/css/animate.min.scss';
import '../../asset_client/css/magnific-popup.scss';
import '../../asset_client/css/fontawesome-all.min.css';
import '../../asset_client/css/themify-icons.css';
import '../../asset_client/css/slick.scss';
import '../../asset_client/css/nice-select.scss';
import '../../asset_client/css/style.scss';

export default ({ children }) => {

    return (
      <div className="main-clients">
        <Header />
            {children}
        <Footer />
  </div>
    )
}
