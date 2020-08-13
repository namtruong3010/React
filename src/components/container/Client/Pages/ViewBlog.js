import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";

export default function ViewBlog({blog}) {
    const {id} = useParams();

    const [blogs, setBlogs] = useState(blog);
    useEffect(() => {
      async function getBlogs(){
          const response = await axios.get(`http://localhost/LaravelAPI/public/api/blog/${id}`);
          setBlogs(response.data);
      }
      getBlogs();
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
                        <h2>Chi tiết bài viết #{blogs.id}</h2>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <section className="blog_area single-post-area section-padding">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 posts-list">
                    <div className="single-post">
                        <div className="feature-img">
                        <img className="img-fluid" src={blogs.image} alt />
                        </div>
                        <div className="blog_details">
                        <h2>{blogs.name}
                        </h2>
                        <ul className="blog-info-link mt-3 mb-4">
                            <li><a href="#"><i className="fa fa-user" /> Travel, Lifestyle</a></li>
                            <li><a href="#"><i className="fa fa-comments" /> 03 Comments</a></li>
                        </ul>
                        {ReactHtmlParser(blogs.content)}
                        </div>
                    </div>
                   </div>
                    <div className="col-lg-4">
                    <div className="blog_right_sidebar">
                       
                                                <aside className="single_sidebar_widget popular_post_widget">
                                <h3 className="widget_title">Bài viết khác</h3>
                                {blog.map(({id,name,image,created_at},key) => (
                                    <div className="media post_item">
                                    <img src={image} alt="post" width="47px"/>
                                    <div className="media-body">
                                    <Link to={`blog/${id}`}>
                                        <h3>{name}</h3>
                                    </Link>
                                    <p>{created_at}</p>
                                    </div>
                                </div>
                                ))}

                                </aside>

                         </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
    )
}
