import api from "./api";
import jwt from 'jsonwebtoken';

class UserServices{

    async login(email, password){
        const response = await api.post('/api/login', {
            email,
            password
        });
        console.log(response.data);
        if(response.data.token){
            localStorage.setItem('token', response.data.token);
            alert(response.data.message);
            console.log(jwt.decode(response.data.token));
        }else{
            alert(response.data.message);
        }
        return response.data;

    }

    async logout(){
        localStorage.removeItem('token');
    }

}


export default UserServices;