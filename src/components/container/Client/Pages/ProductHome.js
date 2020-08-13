import React from 'react';
import { Link } from "react-router-dom";

export default function ProductHome({products}) {
    console.log(products);
    return (
        <div className="row">
            {
                products.map(({id,name,price,description,sale},key) => (
                    <div className="col-xl-4 col-lg-4 col-md-6">
                    <Link to={`/view/${id}`} className="single-product mb-60">
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
                        <h4><Link to={`/view/${id}`}>{name}</Link></h4>
                        <div className="price">
                          <ul>
                            <li>{price}</li>
                            <li className="discount">{((100-sale)/100)*price}</li>
                          </ul>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
            }
        </div>
    )
}
