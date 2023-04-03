import React, {useState, useEffect} from "react";
import chapterServices from "../../services/chapterService";
import ListChappter from "../../page/Manga/ListChapter";

export default function ListChapter(props) {
    let [data, setdata] = useState([]);
    let listChapter = [];
    useEffect(() => {
        chapterServices.getChapter(props.props).then(function (res) {
            setdata(res.data);
        })
    }, []);
    for (let i = 0; i < data.length; i++) {
        listChapter.push(<ListChappter props={data[i]}/>);
    }

    return (
        <>
            <div className="manga_info">
                <div className="section-tittle mt-30 mb-30">
                  <h3>LATEST MANGA RELEASES</h3>
                </div>
                <ul className="chapter mb-3">
                    {listChapter}
                </ul>
              </div>
        </>
    )

}