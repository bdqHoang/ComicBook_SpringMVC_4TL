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
        
        if(params.ratting == undefined){
            for(var i=0 ; i < 5 ; i++){
                ratting.push(<i className="fa-regular fa-star"></i>)
            }

            return ratting;
        } 
        
        var check = 0;
            for(var i=0 ; i <= params.ratting ; i++){
                ratting.push(<i className="fa-solid fa-star"></i>)
                check++;
            }
            if (check < params.ratting) {
                check++;
                ratting.push(<i className="fa-solid fa-star-half-stroke"></i>) 
            }
            for(var i=check ; i < 5 ; i++){
                ratting.push(<i className="fa-regular fa-star"></i>)
            }
            
        return ratting;
    }

    genre(params) {
        if (params === undefined) {
            return <li>None</li>
        }
        if(params.genre == undefined){
            return <li>None</li>
        }
        let genre = [];
        for(const i in params.genre){
            genre.push(<li>{i.name}</li>)
            
        }
        return genre;
    }

}

export default Helper;