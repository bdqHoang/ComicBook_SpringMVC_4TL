import api from "./api";

class UserServices{

    async login(email, password){
        const response = await api.post('/api/login', {
            email,
            password
        });
        console.log(response.data);
        if(response.data.token){
            localStorage.setItem('token', response.data.token);
        }else{
            alert(response.data.message);
        }
        return response.data;

    }

    // get infotmantion user
    async getUserInfo(){
        const response = await api.get('/api/protected');
        return response.data;
    }

    async logout(){
        localStorage.removeItem('token');
    }

}


export default UserServices;