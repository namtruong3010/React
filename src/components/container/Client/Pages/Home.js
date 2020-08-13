import React from 'react'
import ProductHome from './ProductHome'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default function Home({products}) {
  const fadeImages  = [
    '/client/img/hero/hero_man.png',
    '/client/img/banner/dog.png'
  ];

    return (
    <main>
      <div class="slider-area ">
      <Fade>
        <div className="single-slider slider-height each-fade">
        <div class="container">
            <div class="row d-flex align-items-center justify-content-between">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-md-block">
                    <div class="hero__img">
                      <img src={fadeImages[0]} />
                    </div>
                  </div>
                  <div class="col-xl-5 col-lg-5 col-md-5 col-sm-8">
                      <div class="hero__caption">
                            <span >60% Discount</span>
                            <h1 >Winter <br /> Collection </h1>
                            <p>Best Cloth Collection By 2020!</p>
                            <div class="hero__btn" >
                               <a href="industries.html" class="btn hero-btn">Shop Now</a>
                            </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div className="single-slider slider-height each-fade">
        <div class="container">
            <div class="row d-flex align-items-center justify-content-between">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-md-block">
                    <div class="hero__img">
                      <img src={fadeImages[1]} />
                    </div>
                  </div>
                  <div class="col-xl-5 col-lg-5 col-md-5 col-sm-8">
                      <div class="hero__caption">
                            <span >60% Discount</span>
                            <h1 >Winter <br /> Collection </h1>
                            <p>Best Cloth Collection By 2020!</p>
                            <div class="hero__btn" >
                               <a href="industries.html" class="btn hero-btn">Shop Now</a>
                            </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </Fade>
      </div>
        {/* Category Area Start*/}
        <section className="category-area section-padding">
          <div className="container-fluid">
            {/* Section Tittle */}
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center mb-85">
                  <h2>Shop by Category</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="single-category mb-30">
                  <div className="category-img">
                    <img src="/client/img/categori/cat1.jpg"  />
                    <div className="category-caption">
                      <h2>Owmen`s</h2>
                      <span className="best"><a href="#">Best New Deals</a></span>
                      <span className="collection">New Collection</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="single-category mb-30">
                  <div className="category-img text-center">
                    <img src="/client/img/categori/cat2.jpg"  />
                    <div className="category-caption">
                      <span className="collection">Discount!</span>
                      <h2>Winter Cloth</h2>
                      <p>New Collection</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="single-category mb-30">
                  <div className="category-img">
                    <img src="/client/img/categori/cat3.jpg"  />
                    <div className="category-caption">
                      <h2>Man`s Cloth</h2>
                      <span className="best"><a href="#">Best New Deals</a></span>
                      <span className="collection">New Collection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Category Area End*/}
        {/* Latest Products Start */}
        <section className="latest-product-area padding-bottom">
          <div className="container">
            <div className="row product-btn d-flex justify-content-end align-items-end">
              {/* Section Tittle */}
              <div className="col-xl-4 col-lg-5 col-md-5">
                <div className="section-tittle mb-30">
                  <h2>Latest Products</h2>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 col-md-7">
                <div className="properties__button f-right">
                  {/*Nav Button  */}
                  {/* <nav>                                                                                                
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">All</a>
                      <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">New</a>
                      <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Featured</a>
                      <a className="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab" aria-controls="nav-contact" aria-selected="false">Offer</a>
                    </div>
                  </nav> */}
                  {/*End Nav Button  */}
                </div>
              </div>
            </div>
            {/* Nav Card */}
            <div className="tab-content" id="nav-tabContent">
              {/* card one */}
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                 <ProductHome products={products} />
              </div>
              {/* Card two */}
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product4.png"  />
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product5.png"  />
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product6.png"  />
                        <div className="new-product">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product2.png"  />
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product3.png"  />
                        <div className="new-product">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product1.png"  />
                        <div className="new-product">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card three */}
              <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product2.png"  />
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product3.png"  />
                        <div className="new-product">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product1.png"  />
                        <div className="new-product">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product4.png"  />
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product6.png"  />
                        <div className="new-product">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product5.png"  />
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card foure */}
              <div className="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product1.png"  />
                        <div className="new-product">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product2.png"  />
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product3.png"  />
                        <div className="new-product">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product4.png"  />
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product5.png"  />
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-product mb-60">
                      <div className="product-img">
                        <img src="/client/img/categori/product6.png"  />
                        <div className="new-product">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="product-caption">
                        <div className="product-ratting">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star low-star" />
                          <i className="far fa-star low-star" />
                        </div>
                        <h4><a href="#">Green Dress with details</a></h4>
                        <div className="price">
                          <ul>
                            <li>$40.00</li>
                            <li className="discount">$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Nav Card */}
          </div>
        </section>
        {/* Latest Products End */}
        {/* Best Product Start */}
        <div className="best-product-area lf-padding">
          <div className="product-wrapper bg-height" style={{backgroundImage: 'url("/client/img/categori/card.png")'}}>
            <div className="container position-relative">
              <div className="row justify-content-between align-items-end">
                <div className="product-man position-absolute  d-none d-lg-block">
                  <img src="/client/img/categori/card-man.png"  />
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 d-none d-lg-block">
                  <div className="vertical-text">
                    <span>Manz</span>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8">
                  <div className="best-product-caption">
                    <h2>Find The Best Product<br /> from Our Shop</h2>
                    <p>Designers who are interesten creating state ofthe.</p>
                    <a href="#" className="black-btn">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Shape */}
          <div className="shape bounce-animate d-none d-md-block">
            <img src="/client/img/categori/card-shape.png"  />
          </div>
        </div>
        {/* Best Product End*/}
      </main>
    )
}
