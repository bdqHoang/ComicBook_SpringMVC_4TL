import api from "./api";

class UserServices{

    async login(email, password){
        try{
            const response = await api.post('/api/login', {
                email,
                password
            });
            if(response.data.token){
                localStorage.setItem('token', response.data.token);
                api.interceptors.request.use(function(config) {
                    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
                    return config;
                });
            }
            return response.data;
        }catch(error){
           return null;
        }

    }

    // get infotmantion user
    async getUserInfo(){
        const response = await api.get('/api/protected');
        return response.data;
    }

    async logout(){
        localStorage.removeItem('token');
    }
    

    async register(user){
        try{
            const response = await api.post('/api/register', user);
            alert("Đăng ký thành công")
            window.location = "/login";
        }catch(error){
            alert(error.response.data.errors);
        }
    }

}


export default UserServices;