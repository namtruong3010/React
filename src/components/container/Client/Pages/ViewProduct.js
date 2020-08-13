import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

export default function ViewProduct({products}) {
    const {id} = useParams();

    const [data, setProducts] = useState(products);
    useEffect(() => {
      async function getProducts(){
          const response = await axios.get(`http://localhost/LaravelAPI/public/api/products/${id}`);
          setProducts(response.data);
      }
      getProducts();
    }, []);
    
    return (
        <div>
  <div className="slider-area ">
    {/* Mobile Menu */}
    <div className="single-slider slider-height2 d-flex align-items-center" data-background="assets/img/hero/category.jpg">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-cap text-center">
              <h2>Thông tin sản phẩm</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* slider Area End*/}
  {/*================Single Product Area =================*/}
  <div className="product_image_area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="product_img_slide owl-carousel">
            <div className="single_product_img">
              <img src={data.image} alt="#" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="single_product_text text-center">
            <h3>{data.name}</h3>
            <p>
            {ReactHtmlParser(data.content)}
            </p>
            <div className="card_area">
              <div className="product_count_area">
                <p>Quantity</p>
                <div className="product_count d-inline-block">
                  <span className="product_count_item inumber-decrement"> <i className="ti-minus" /></span>
                  <input className="product_count_item input-number" type="text" defaultValue={1} min={0} max={10} />
                  <span className="product_count_item number-increment"> <i className="ti-plus" /></span>
                </div>
                    {data.price}
              </div>
              <div className="add_to_cart">
                <a href="#" className="btn_3">Thêm giỏ hàng</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
