import React, {useState} from "react";
import UserServices from "../../services/UserServices";

const Login = () => {

    var userServices = new UserServices();

     const myStyle = { 
        background: 'url(https://yae.hifive03.com/assets/img/manga_banner/log.jpg) fixed no-repeat center/cover'
      };

      //login
      const handleLogin = (e) => {
        e.preventDefault();
        var data = userServices.login(document.getElementById("email").value, document.getElementById("password").value);
        console.log(data);
      }


  return(
    <>
<div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
            <div className="overlay-modal1 js-hide-modal1" style={myStyle}></div>
            <div className="container">
                <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                    <button className="how-pos3 hov3 trans-04 js-hide-modal1">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <form onSubmit={handleLogin}>
                                <div className="tit_form">
                                    <h3>Đến với manga</h3>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label" >Email</label>
                                    <input type="email" data-validation="email"
                                        data-content="Email phải đúng định dạng" className="form-control"
                                        name="email" id="email"/>
                                    <div className="form_text">Không được chia sẻ email.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password"
                                        className="form-label">Mật khẩu</label>
                                    <input type="password" className="form-control"
                                        id="password"/>
                                </div>
                                <button type="submit" className="modal_btn text-center">Đăng nhập</button>
                                
                            </form>
                            <button className="modal_btn text-center js-hide-modal1 js-show-modal2" style={{marginTop: 20}}>Đăng ký</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export function CheckLogin(){
    if(localStorage.getItem('token') == null){
        return <><a className="js-show-modal" href="/login"><i
        className="fa-regular fa-user"></i>Login/Sign Up</a></>;
    }else{
        return <>
            <a className="js-show-modal" href="/login"><i
            className="fa-regular fa-user"></i>Login/Sign Up</a>
        </>;
    }
}

export default Login;