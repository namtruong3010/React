import React, { useState, useEffect } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useParams,useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from '../../../../firebase';
import swal from 'sweetalert';
import axios from 'axios';

export default function FormEditBaiViet({updateBlog,blog}) {
    const {id} = useParams();
    const { register, handleSubmit, errors } = useForm();
    const [text,getText] = useState();
    const history = useHistory();
    const [images,setImages] = useState();
    const [blogs,setBlog] = useState(blog);

    useEffect(() => {
        async function getBlog(){
            const response = await axios.get(`http://localhost/LaravelAPI/public/api/blog/${id}`);
            setBlog(response.data);
        }
        getBlog();
      }, []);




    const handleImage = (e) => {
      const image = e.target.files[0];
      const folder = 'images'
      const uploadTask = firebase.storage().ref(`${folder}/${image.name}`).put(image)
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        () => {
          let ref = firebase.storage().ref(`${folder}/${image.name}`).getDownloadURL().then((url) =>{
            setImages(url);
          })
        })
    }
    
    console.log(blogs);
    const UpdateBlogs =(data )=>{
        axios.patch(`http://localhost/LaravelAPI/public/api/blog/${id}`,data)
        .then(res => {
          if(res.status < 300){
            swal({
              title: "Thông báo",
              text: "Thay đổi bài viết thành công ?",
              icon: "success",
              button:  "Okey"
            }).then(() => {
                history.push('/admin/danh-sach-bai-viet');
            } );
            updateBlog(res.data);
          }else{
            swal({
              title: "Thông báo",
              text: "Thay đổi bài viết không thành công ?",
              icon: "error",
              button: "Okey"
            });
          }
       
        });
    }
    return (
        <div className="content  d-flex flex-column flex-column-fluid" id="kt_content">
        <div className="subheader py-2 py-lg-6  subheader-solid " id="kt_subheader">
          <div className=" container-fluid  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
            {/*begin::Info*/}
            <div className="d-flex align-items-center flex-wrap mr-1">
              {/*begin::Page Heading*/}
              <div className="d-flex align-items-baseline flex-wrap mr-5">
                {/*begin::Page Title*/}
                <h5 className="text-dark font-weight-bold my-1 mr-5">
                Thay đổi bài viết #{blogs.id}              	          </h5>
                {/*end::Page Title*/}
                {/*begin::Breadcrumb*/}
                <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                  <li className="breadcrumb-item">
                    <a href className="text-muted">
                      Trang chủ	                        	</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href className="text-muted">
                     Bài viết                   	</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href className="text-muted">
                    Thay đổi bài viết  #{blogs.id}                    	</a>
                  </li>
                </ul>
                {/*end::Breadcrumb*/}
              </div>
              {/*end::Page Heading*/}
            </div>
          </div>
        </div>
        
          {/*begin::Entry*/}
          <div className="d-flex flex-column-fluid">
            {/*begin::Container*/}
            <div className=" container ">
              <div className="row">
                <div className="col-md-12">
                  {/*begin::Card*/}
                  <div className="card card-custom gutter-b example example-compact">
                    {/*begin::Form*/}
                    <form class="form" onSubmit={handleSubmit(UpdateBlogs)}>
                    <input type="hidden" name="content" defaultValue={text ? text : blogs.content } ref={register({ required: true })}/>
                      <input type="hidden" name="image" defaultValue={images ? images : blogs.image} ref={register({ required: true, pattern: {value: /(\S)/  } })}/>
                      <div className="card-body row">
                        <div className="col-md-6 form-group">
                          <label htmlFor="exampleInputPassword1">Tên bài viết <span className="text-danger">*</span></label>
                          <input type="text" name="name" className={errors.name ? 'form-control is-invalid' : 'form-control'} id="name" placeholder="Tên sản phẩm ..." defaultValue={blogs.name} ref={register({ required: true, pattern: {value: /(\S)/  } })}/>
                         </div>
                         <div className="col-md-6 form-group row">
                          <div className="col-md-6">
                          <label htmlFor="exampleInputPassword1">Ảnh bài viết <span className="text-danger">*</span></label>
                          <input type="file" accept="image/*" onChange={handleImage} className={errors.image ? 'form-control is-invalid' : 'form-control'} id="image"  ref={register({ required: true, pattern: {value: /(\S)/  } })}/>
                          </div>
                          <div className="col-md-6">
                           <img src={images ? images : blogs.image} width="200" />
                          </div>
                         </div>
                         <div className="col-md-12 form-group">
                          <label htmlFor="exampleInputPassword1">Mô tả <span className="text-danger">*</span></label>
                          <CKEditor editor={ ClassicEditor } data={blogs.content} onChange={ ( event, editor ) => {
                                getText(editor.getData());
                            } }/>
                        </div>
                      </div>
                      <div className="text-center card-footer">
                        <button type="submit" className="btn btn-primary mr-2">Thao tác</button>
                        <button type="reset" className="btn btn-secondary">Thôi</button>
                      </div>
                    </form>
                    {/*end::Form*/}
                  </div>
                  {/*end::Card*/}
            
                </div>
              </div>
            </div>
            {/*end::Container*/}
          </div>
          {/*end::Entry*/}
        </div>
    )
}
