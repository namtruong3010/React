import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import MutiRoute from './components/router/MutiRoute';

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [blog, setBlog] = useState([]);

  // Thêm danh mục
  const addCategory = (item) => {
    setCategory([item,...category]);
  };

  // Thêm sản phẩm
  const addProduct = (item) => {
    setProducts([item,...products]);
  };
  // Thêm bài viết

  const addBlog = (item) => {
    setBlog([item,...blog]);
  };

 // List danh mục

 const cate = 'http://localhost/LaravelAPI/public/api/category';
 useEffect(() => {
   async function getCategory(){
       const response = await axios.get(cate);
       setCategory(response.data);
   }
   getCategory()
 }, []);

  // List Sản phẩm
  const url = 'http://localhost/LaravelAPI/public/api/products';
  useEffect(() => {
    async function getProducts(){
        const response = await axios.get(url);
        setProducts(response.data);
    }
    getProducts()
  }, []);

  // List bài viết
  const link = 'http://localhost/LaravelAPI/public/api/blog';
  useEffect(() => {
    async function getProducts(){
        const response = await axios.get(link);
        setBlog(response.data);
    }
    getProducts()
  }, []);

  // Cập nhật danh mục
  const updateCategory = (update) => {
    const newCate = category.map(category => (
      category.id === update.id ? update : category
    ));
    setCategory(newCate);
  }

  // Cập nhật sản phẩm
  const updateProducts = (update) => {
    const newProducts = products.map(products => (
      products.id === update.id ? update : products
    ));
    setProducts(newProducts);
  }

  // Cập nhật bài viết
  const updateBlog = (update) => {
    const newBlogs = blog.map(blog => (
      blog.id === update.id ? update : blog
    ));
    setBlog(newBlogs);
  }

// Xóa danh mục
const deleteCategory = (id) => {
  const newCategory = category.filter(categorys => categorys.id !== id);
    axios.delete(`${cate}/${id}`).then(result => {
        if(result.data.type === 'success'){
                setCategory(newCategory);
        }
        swal(result.data.msg, {
          icon: result.data.type,
        });
    });
}

  // Xóa sản phẩm
  const deleteProducts = (id) => {
    const newProducts = products.filter(product => product.id !== id);
        axios.delete(`${url}/${id}`).then(result => {
            if(result.data.type === 'success'){
                setProducts(newProducts);
            }
                swal(result.data.msg, {
                icon: result.data.type,
            });
      } );
  }

    // Xóa bài viết
    const deleteBlog = (id) => {
      const newBlogs = blog.filter(blog => blog.id !== id);
          axios.delete(`${link}/${id}`).then(result => {
              if(result.data.type === 'success'){
                setBlog(newBlogs);
              }
                  swal(result.data.msg, {
                  icon: result.data.type,
              });
        } );
    }

  return (
    <MutiRoute 
    addCategory={addCategory} category={category} updateCategory={updateCategory} deleteCategory={deleteCategory}
    addProducts={addProduct} products={products} updateProducts={updateProducts} deleteProducts={deleteProducts}
    addBlog={addBlog} blog={blog} updateBlog={updateBlog} deleteBlog={deleteBlog}
    />
  );
}

export default App;
