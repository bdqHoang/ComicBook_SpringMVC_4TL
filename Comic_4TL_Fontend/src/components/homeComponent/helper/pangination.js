import React, {useCallback, useEffect, useState} from "react";
import Block from "../../templateBook/block";
import HomeServices from "../../../services/HomeServices";
import ReactDOM from 'react-dom/client';



export default function Pangination(props) {
    var active;
    var homeServices = new HomeServices();
    let getBlock=[];

    const [data, setData] = useState([]);
    const [clicked, setClicked] = useState(false);
    if(props.props === 1){ 
        active = "active"
    };
    const HandelPage = () => {
        setClicked(!clicked);
        for(var i in data){
            getBlock.push(<Block props={data[i]}/>); 
        }
        ReactDOM.createRoot(document.getElementById("getAllManga"))
        .render(<React.StrictMode>
                {getBlock}
            </React.StrictMode>);
    }
    useEffect(() => {
        homeServices.getAllManga(props.props).then((res) => {
            setData(res.data);
        })
    },[clicked]);


    return(
        <a class={"nav-item nav-link " + active} id="nav-one-recently-tab" onClick={HandelPage}
            data-toggle="tab" href="#nav-one-recently" role="tab" aria-controls="nav-one-recently"
            aria-selected="true">{props.props}</a>
    )
}