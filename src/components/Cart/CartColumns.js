import React from 'react';

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
               <div className="col-10 mx-auto col-lg-2">
                   <p className="text-uppercase">услуги</p>  
               </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">название услуги</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">цена</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">количество</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">удалить</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">количество</p>
                </div>
          </div>   
        </div>
    )
}
