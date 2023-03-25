import React from "react"
class Helper{
    ratting(params) {
        let ratting =[];
        if(params === undefined){
            for(var i=0 ; i < 5 ; i++){
                ratting.push(<i className="fa-regular fa-star"></i>)
            }

            return ratting; 
        }
        
        var check = 0;
            for(var i=0 ; i <= params ; i++){
                ratting.push(<i className="fa-solid fa-star"></i>)
                check++;
            }
            if (check < params) {
                check++;
                ratting.push(<i className="fa-solid fa-star-half-stroke"></i>) 
            }
            for(var i=check ; i < 5 ; i++){
                ratting.push(<i className="fa-regular fa-star"></i>)
            }
            
        return ratting;
    }

    genre(params) {
        if (params === undefined || params.length === 0) {
            return <li>None</li>
        }
        let genre = [];
        for(const i in params){ 
            if(i == params.length -1){
            genre.push(<li> {params[i].genre.name}.</li>)
            }else{
            genre.push(<li>{params[i].genre.name},</li>)
            }
        }
        return genre;
    }

}

export default Helper;