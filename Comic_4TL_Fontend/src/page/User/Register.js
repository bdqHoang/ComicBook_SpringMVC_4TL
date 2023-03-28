import React, { useState } from "react";
import UserServices from "../../services/UserServices";

function SignIn(){
    var userServices = new UserServices();

     const myStyle = { 
        background: 'url(https://yae.hifive03.com/assets/img/manga_banner/log.jpg) fixed no-repeat center/cover',
        marginBotton: 20
    };
    const fontStyle = {
        color: "black"
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        var user = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        }
        if(user.password != document.getElementById("re_password").value){
            alert("Mật khẩu không khớp");
            return ;
        }
        await  userServices.register(user);
    }


      

  return(
    <>
        <div className="container"  style={myStyle}>
            <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <form onSubmit={handleRegister}>
                            <div className="tit_form">
                                <h3>Hãy đăng tài khoản</h3>
                            </div>
                        <div className="mb-3">
                                <label htmlFor="email" className="form-label" >Họ và tên</label>
                                <input type="text" className="form-control" style={fontStyle} required
                                    name="name" id="name"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label" >Email</label>
                                <input type="email" data-validation="email" style={fontStyle} required
                                    data-content="Email phải đúng định dạng" className="form-control"
                                    name="email" id="email"/>
                                <div className="form_text">Không được chia sẻ email.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password"
                                    className="form-label">Mật khẩu</label>
                                <input type="password" className="form-control" style={fontStyle} required
                                    id="password"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password"
                                    className="form-label">Nhập lại mật khẩu</label>
                                <input type="password" className="form-control" style={fontStyle} required
                                    id="re_password"/>
                            </div>
                            <button type="submit" className="modal_btn text-center">Đăng ký</button>
                            
                        </form>
                        <a href="/login" className="modal_btn text-center" style={{marginTop: 10, width:"max-content", color:"white"}}>Tôi đã có tài khoản</a>

                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
export default SignIn;