import React, {useState} from 'react';
import firebase from '../../../../firebase';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import swal from 'sweetalert';  
import { useForm } from "react-hook-form";
import $ from 'jquery';

const FormThemSanPham = ({addProducts,category}) => {
  const { register, handleSubmit, errors } = useForm();
  const [text,getText] = useState();
  const [images,setImages] = useState();

  const ChangeImage = (e) => {
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

  const AddProduct = (data )=>{
    axios.post('http://localhost/LaravelAPI/public/api/products',data).then(res => {
      if(res.status < 300){
        swal({
          title: "Thông báo",
          text: "Bạn thêm sản phẩm thành công ?",
          icon: "success",
          button:  "Okey"
        }).then(res => { $('.form')[0].reset(); });
        addProducts(res.data);
      }else{
        swal({
          title: "Thông báo",
          text: "Bạn thêm sản phẩm không thành công ?",
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
        Thêm sản phẩm               	          </h5>
        {/*end::Page Title*/}
          {/*begin::Breadcrumb*/}
          <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
            <li className="breadcrumb-item">
              <a href className="text-muted">
                Trang chủ	                        	</a>
            </li>
          <li className="breadcrumb-item">
            <a href className="text-muted">
              Sản phẩm                    	</a>
          </li>
          <li className="breadcrumb-item">
            <a href className="text-muted">
            Thêm sản phẩm                      	</a>
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
            <form class="form" onSubmit={handleSubmit(AddProduct)} enctype="multipart/form-data">
            <input type="hidden" name="content" defaultValue={text ? text : ""} ref={register({ required: true })}/>
            <input type="hidden" name="image" defaultValue={images ? images : ""} ref={register({ required: true, pattern: {value: /(\S)/  } })}/>

            <div className="card-body row">
              <div className="col-md-6 row">
                <div className="col-md-6 form-group">
                  <label>Thể loại <span className="text-danger">*</span></label>
                  <select className={errors.id_cate ? 'form-control is-invalid' : 'form-control'} name="id_cate"  ref={register({ required: true })}>
                      <option value="">-- Không chọn --</option>
                                { category.map( ({id,name},key) => (
                                  <option key={key} value={id}>{name}</option>
                                ))}
                  </select>
                  </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="exampleInputPassword1">Tên sản phẩm <span className="text-danger">*</span></label>
                  <input type="text" name="name" className={errors.name ? 'form-control is-invalid' : 'form-control'} id="name" placeholder="Tên sản phẩm ..." ref={register({ required: true, pattern: {value: /(\S)/  } })}/>
                 </div>
                 <div className="col-md-6 form-group">
                  <label htmlFor="exampleInputPassword1">Trị giá <span className="text-danger">*</span></label>
                  <input type="text" name="price" className={errors.price ? 'form-control is-invalid' : 'form-control'} id="price" placeholder="Trị giá ..." ref={register({ required: true, pattern: {value: /^[0-9,-]{4,250}$/  } })} />
               </div>
               <div className="col-md-6 form-group">
                  <label htmlFor="exampleInputPassword1">Giảm giá <span className="text-danger">*</span></label>
                  <input type="text" name="sale" className={errors.sale ? 'form-control is-invalid' : 'form-control'} id="price" placeholder="Giảm giá ..." ref={register({ required: true, pattern: {value: /^[0-9,-]{1,3}$/  } })} />
                </div>
               </div>
               <div className="col-md-6 row">
                <div className="col-md-6">
                <label htmlFor="exampleInputPassword1">Ảnh sản phẩm <span className="text-danger">*</span></label>
                  <input type="file" accept="image/*" name="imagesss" onChange={ChangeImage} className={errors.imagesss ? 'form-control is-invalid' : 'form-control'} id="image" ref={register({ required: true, pattern: {value: /(\S)/  } })}/>
              </div>
              <div className="col-md-6 form-group">
                  <img src={images ? images : ""} width="200" />
              </div>
            </div>
            <div className="col-md-12 form-group">
                  <label htmlFor="exampleTextarea">Mô tả <span className="text-danger">*</span></label>
                  <textarea name="description" className={errors.description ? 'form-control is-invalid' : 'form-control'} rows={3} placeholder="Mô tả ..." ref={register({ required: true, pattern: {value: /(\S)/  } })} />
            </div>
            <div className="col-md-12 form-group">
                  <label htmlFor="exampleTextarea">Nội dung <span className="text-danger">*</span></label>
                  <CKEditor editor={ ClassicEditor } onChange={ ( event, editor ) => {
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

export default FormThemSanPham

