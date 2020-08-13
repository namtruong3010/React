import React from 'react';
import { Link } from "react-router-dom";
import swal from 'sweetalert';

export default function ListProducts({products,category,onDelete}) {

  const Delete = (id) => {
    swal({
      title: "Thông báo",
      text: "Bạn có chắc chắn muốn xóa sản phẩm này không ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
          onDelete(id)
        }
      });
    }

  function getStatus(data){
      if(data == 1)
        return 'Còn hàng';
      else
        return 'Hết hàng'
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
            Danh sách sản phẩm               	          </h5>
            {/*end::Page Title*/}
            {/*begin::Breadcrumb*/}
            <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
              <li className="breadcrumb-item">
                <a href className="text-muted">
                  Trang chủ	                        	</a>
              </li>
              <li className="breadcrumb-item">
                <a href className="text-muted">
                 Sản phẩm                   	</a>
              </li>
              <li className="breadcrumb-item">
                <a href className="text-muted">
                Danh sách sản phẩm                      	</a>
              </li>
            </ul>
            {/*end::Breadcrumb*/}
          </div>
          {/*end::Page Heading*/}
        </div>
      </div>
    </div>
  {/* Main content */}
  <div className="d-flex flex-column-fluid">
    {/*begin::Container*/}
    <div className=" container ">
      <div className="row">
        <div className="col-md-12">
          {/*begin::Card*/}
          <div className="card card-custom gutter-b example example-compact">
            {/* /.card-header */}
            <div className="card-body">
              <table className="table table-bordered">
                <thead>                  
                  <tr>
                    <th>ID</th>
                    <th>Danh mục</th>
                    <th>Tên sản phẩm</th>
                    <th>Số tiền</th>
                    <th>Giảm giá</th>
                    <th>Mô tả</th>
                    <th>Ảnh</th>
                    <th>Tình trạng</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                    { products.map(({id,name,price,sale,description,image,id_cate,status},key) => (
                       <tr key={key}>
                         <td>{id} </td>
                         <td> {category.map((e,i) => {
                            return e.id == id_cate ? e.name : ""
                         })}  </td>
                         <td> {name}  </td>
                         <td> {price}  </td>
                         <td> {sale}%</td>
                         <td> {description}  </td>
                         <td> <img src={image} width="50px" />  </td>
                         <td> {getStatus(status)}  </td>
                         <td> <Link className="col-md-1" to={`/admin/edit/product/${id}`} ><i className="fa fa-edit"></i></Link> 
                              <a className="col-md-1" href="#" onClick={() => Delete(id)}><i className="fa fa-trash"></i></a>
                         </td>
                       </tr>
                     ))
                   }
                  </tbody>
              </table>
            </div>
            {/* /.card-body */}
            <div className="card-footer clearfix">
              <ul className="pagination pagination-sm m-0 float-right">
                <li className="page-item"><a className="page-link" href="#">«</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">»</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>{/* /.container-fluid */}
    </div>
  {/* /.content */}
</div>
  )
}