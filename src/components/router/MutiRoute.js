import React from 'react';
import { BrowserRouter as Routers, Route, Switch } from "react-router-dom";
import Admin from '../templates/Admin';
import Dashboard from '../container/Admin/Dashboard';
import ListProducts from '../container/Admin/List/ListProduct';
import FormEditSanPham from '../container/Admin/Form/FormEditSanPham';
import FormThemSanPham from '../container/Admin/Form/FormThemSanPham';
import FormDanhMuc from '../container/Admin/Form/FormDanhMuc';
import FormEditDanhMuc from '../container/Admin/Form/FormEditDanhMuc';
import FormBaiViet from '../container/Admin/Form/FormBaiViet';
import ListBlog from '../container/Admin/List/ListBlog';
import FormEditBaiViet from '../container/Admin/Form/FormEditBaiViet';
import ListCategory from '../container/Admin/List/ListCategory';
import NotFound from '../layouts/Admin/NotFound';

import Client from '../templates/Client';
import Home from '../container/Client/Pages/Home';
import ViewProduct from '../container/Client/Pages/ViewProduct';
import ProductAll from '../container/Client/Pages/ProductAll';
import DanhMuc from '../container/Client/Pages/DanhMuc';
import LienHe from '../container/Client/Pages/LienHe';
import TinTuc from '../container/Client/Pages/TinTuc';
import ViewBlog from '../container/Client/Pages/ViewBlog';
import TimTheoDanhMuc from '../container/Client/Pages/TimTheoDanhMuc';

export default function MutiRoute({
    addCategory,category,updateCategory,deleteCategory,
    addProducts,products,updateProducts,deleteProducts,
    addBlog,blog,updateBlog,deleteBlog
}) {
    const deleteCate = (id) => {
        deleteCategory(id);
    }

    const deleteSanPham = (id) => {
        deleteProducts(id);
    }

    const deleteBaiViet = (id) => {
        deleteBlog(id);
    }
    return (
       <Routers>
           <Switch>
               <Route path="/admin/*">
                   <Admin>
                        <Switch>
                            <Route path="/admin" exact >
                                <Dashboard />
                            </Route>

                            <Route path="/admin/them-danh-muc"  >
                                <FormDanhMuc addCategory={addCategory} />
                            </Route>

                            <Route path="/admin/danh-sach-danh-muc"  >
                                <ListCategory category={category}  onDelete={deleteCate}  />
                            </Route>

                            <Route path="/admin/edit/category/:id" >
                                <FormEditDanhMuc categories={category} updateCategory={updateCategory}/>
                            </Route> 

                            <Route path="/admin/them-san-pham"  >
                                <FormThemSanPham addProducts={addProducts}  category={category} />
                            </Route>
                            
                            <Route path="/admin/danh-sach-san-pham"  >
                                <ListProducts products={products}  onDelete={deleteSanPham}  category={category} />
                            </Route>

                            <Route path="/admin/edit/product/:id" >
                                <FormEditSanPham category={category} products={products} updateProducts={updateProducts} />
                            </Route>  

                            <Route path="/admin/them-bai-viet"  >
                                <FormBaiViet addBlog={addBlog}/>
                            </Route>

                            <Route path="/admin/danh-sach-bai-viet"  >
                                <ListBlog  blog={blog} deleteBaiViet={deleteBaiViet}/>
                            </Route>

                            <Route path="/admin/edit/blog/:id" >
                                <FormEditBaiViet updateBlog={updateBlog} blog={blog}/>
                            </Route>

                            <Route path='/admin/*' component={NotFound} />
                        </Switch>
                   </Admin>
               </Route>
               <Route> 
                   <Client>
                    <Switch>
                            <Route path="/" exact >
                                <Home  products={products}/>
                            </Route>
                            
                            <Route path="/view/:id" >
                                <ViewProduct  products={products}/>
                            </Route>

                            <Route path="/san-pham" >
                                <ProductAll  products={products}/>
                            </Route>
                            
                            <Route path="/danh-muc" >
                                <DanhMuc  category={category}/>
                            </Route>

                            <Route path="/category/:id" >
                                <TimTheoDanhMuc  products={products}/>
                            </Route>

                            <Route path="/tin-tuc" >
                                <TinTuc  blog={blog}/>
                            </Route>

                            <Route path="/blog/:id" >
                                <ViewBlog  blog={blog}/>
                            </Route>

                            <Route path="/lien-he" >
                                <LienHe  />
                            </Route>
                        </Switch>
                   </Client>
               </Route>
           </Switch>
       </Routers>
    )
}
