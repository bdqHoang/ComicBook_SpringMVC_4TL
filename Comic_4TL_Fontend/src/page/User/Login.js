import React, {useState} from "react";
import UserServices from "../../services/UserServices";

const Login = () => {

    var userServices = new UserServices();

     const myStyle = { 
        background: 'url(https://yae.hifive03.com/assets/img/manga_banner/log.jpg) fixed no-repeat center/cover',
        marginBotton: 20
    };
    const fontStyle = {
        color: "black"
    }


      //login
      const handleLogin = async (e) => {
        e.preventDefault();
        var data = await userServices.login(document.getElementById("email").value, document.getElementById("password").value);
        if(data == null){
            alert("Sai thông tin đăng nhập");
        }
        else{
            window.location ="/home";
        }
      }

  return(
    <>

            <div className="container"  style={myStyle}>
                <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <form onSubmit={handleLogin}>
                                <div className="tit_form">
                                    <h3>Đến với manga</h3>
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
                                <button type="submit" className="modal_btn text-center">Đăng nhập</button>
                                
                            </form>
                            <a href="/sign-in" className="modal_btn text-center" style={{marginTop: 10, width:"max-content", color:"white"}}>Đăng ký</a>

                        </div>
                    </div>
                </div>
            </div>
    </>
  );
}

export function CheckLogin(){
    var userServices = new UserServices();

    //get profile

    const getprofile = async (e) => {
        e.preventDefault();
        var data = await userServices.getUserInfo();
        if(data == null){
            alert("Hệ thống bị lỗi");
        }
        else{
            window.location ="/profile";
        }
    }
    if(localStorage.getItem('token') == null){
        return <><a className="js-show-modal" href="/login"><i
        className="fa-regular fa-user"></i>Login/Sign Up</a></>;
    }else{
        const logoutHandel = () => {
            userServices.logout();
            window.location.reload();
        }
        return <>
        <div class="dropdown">
            <button class="btn-secondary btn-sm dropdown-toggle" style={{backgroundColor:"#f27fb5", border:"none", borderRadius : "10px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa-regular fa-user"> Xin chào Hoàng </i>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a id="profile" onClick={getprofile}>Thông tin</a>
                <a id="logout" onClick={logoutHandel}>Đăng xuất</a>
            </div>
            </div>
        </>;
    }
}

export default Login;