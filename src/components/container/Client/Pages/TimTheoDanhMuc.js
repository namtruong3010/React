import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function TimTheoDanhMuc({products}) {
    const {id} = useParams();
    const newProduct = products.filter(product => product.id_cate == id);
    return (
        <div>
        {/* slider Area Start*/}
        <div className="slider-area ">
          {/* Mobile Menu */}
          <div className="single-slider slider-height2 d-flex align-items-center" style={{backgroundImage: 'url(client/img/hero/category.jpg)'}}>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>product in category</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider Area End*/}
        {/* product list part start*/}
        <section className="product_list section_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="product_sidebar">
                  <div className="single_sedebar">
                    <form action="#">
                      <input type="text" name="#" placeholder="Search keyword" />
                      <i className="ti-search" />
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="product_list">
                  <div className="row">
      
                    {
                      newProduct.map(({id,name,image,price},key) => (
                        <div className="col-lg-6 col-sm-6">
                          <div className="single_product_item">
                            <img src={image} alt className="img-fluid" />
                      <h3> <Link to={`/view/${id}`}>{name}</Link> </h3>
                      <p>{price}</p>
                          </div>
                        </div>
                      ))
                    }
                    
                  </div>
                  <div className="load_more_btn text-center">
                    <a href="#" className="btn_3">Load More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}
