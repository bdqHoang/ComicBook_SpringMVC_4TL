import React from "react";

const Profile = (pros) => {
    const myStyle = { 
        background: 'url(https://yae.hifive03.com/assets/img/manga_banner/log.jpg) fixed no-repeat center/cover',
        marginBotton: 20
    };
    const fontStyle = {
        color: "black"
    }
    return(
        <>
            <div className="container"  style={myStyle}>
            <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <div className="tit_form">
                            <h3>Thông tin tài khoản</h3>
                        </div>
                        <form>
                        <div className="tit_form">
                            <h3>Thay đổi ảnh đại diện</h3>
                        </div>
                        <div className="mb-3">
                            <div class="d-flex justify-content-center mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                                    class="rounded-circle" alt="example placeholder"
                                    style={{ width:"200px"}} />
                            </div>
                            <div class="d-flex justify-content-center">
                                <div class="btn btn-primary btn-rounded">
                                    <label class="form-label text-white m-1" for="avatar">Chọn hình</label>
                                    <input type="file" class="form-control d-none" id="avatar" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="modal_btn text-center">Cập nhật</button>
                        </form>
                    <form>
                        <div className="mb-3">
                                <label htmlFor="email" className="form-label" >Họ và tên</label>
                                <input type="text" className="form-control" style={fontStyle} required
                                    name="name" id="name"/>
                        </div>
                        <button type="submit" className="modal_btn text-center">Cập nhật</button>
                    </form>
                    
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" >Email</label>
                        <input type="email" data-validation="email" style={fontStyle} readOnly
                            data-content="Email phải đúng định dạng" className="form-control"
                            name="email" id="email"/>
                        <div className="form_text">Không được chia sẻ email.</div>
                    </div>
                    <form>
                    <div className="tit_form">
                            <h3>Thay đổi mật khẩu</h3>
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
                        <button type="submit" className="modal_btn text-center">Thay đổi mật khẩu</button>
                    </form>
                        
                        <a href="/login" className="modal_btn text-center" style={{marginTop: 10, width:"max-content", color:"white"}}>Trở về trang chủ</a>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default Profile;