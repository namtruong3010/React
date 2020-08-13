import React from 'react'
import {Link} from "react-router-dom";
export default function ProductAll({products}) {
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
              <h2>product list</h2>
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
                products.map(({id,name,image,price},key) => (
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
