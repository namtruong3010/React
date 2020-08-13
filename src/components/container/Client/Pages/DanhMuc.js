import React from 'react'
import { Link } from "react-router-dom";

export default function DanhMuc({category}) {
    return (
        <main>
                <div className="slider-area ">
                {/* Mobile Menu */}
                <div className="single-slider slider-height2 d-flex align-items-center" style={{backgroundImage: 'url(client/img/hero/category.jpg)'}}>
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                        <div className="hero-cap text-center">
                            <h2>Product Catagori</h2>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <section classname="latest-product-area latest-padding" >
                    <div classname="container">
                <div className="row product-btn d-flex justify-content-between">
                <div className="properties__button">
                    {/*Nav Button  */}
                    <nav>                                                                                                
                    
                    </nav>
                    {/*End Nav Button  */}
                </div>
                <div className="select-this d-flex">
                    <div className="featured">
                    <span>Short by: </span>
                    </div>
                    <form action="#">
                    <div className="select-itms">
                        <select name="select" id="select1" style={{display: 'none'}}>
                        <option value>Featured</option>
                        <option value>Featured A</option>
                        <option value>Featured B</option>
                        <option value>Featured C</option>
                        </select><div className="nice-select" tabIndex={0}><span className="current">Featured</span><ul className="list"><li data-value className="option selected focus">Featured</li><li data-value className="option">Featured A</li><li data-value className="option">Featured B</li><li data-value className="option">Featured C</li></ul></div>
                    </div>
                    </form>
                </div>
                </div>
                {/* Nav Card */}
                <div className="tab-content" id="nav-tabContent">
                {/* card one */}
                <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className="row">
                        {category.map(({id,name,image},key) => (
                             <div className="col-xl-4 col-lg-4 col-md-6">
                             <div className="single-product mb-60">
                             <div className="product-img">
                                 <img src={image} />
                             </div>
                             <div className="product-caption">
                                 <h4><Link to={`category/${id}`}>{name}</Link></h4>
                             </div>
                             </div>
                         </div>
                        ))}
                   </div>
                </div>
                </div>
                {/* End Nav Card */}
            </div>
            </section>
            </main>
    )
}
