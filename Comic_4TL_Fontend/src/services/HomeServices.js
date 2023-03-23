import React from "react";
import api from "./api";
class HomeServices{

    
    getAll(){
        return api.get("/season");
    }

}

export default HomeServices;