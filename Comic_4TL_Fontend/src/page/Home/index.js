import React, {useState, useEffect } from "react";
import NewSeason from "../../components/homeComponent/newSeason";
import HomeServices from "../../services/HomeServices";
import LastedManga from "../../components/homeComponent/lastedManga";
import { GenreHome } from "../../components/genreComponent/genreItem";
function Index() {
   

      const [state, setState] = useState([]);

      let homeServices = new HomeServices();

      useEffect(() => {
        homeServices.getNewSeason().then((res) => {
            setState(res.data);
        })
      }, []);
      
      
    return (
        < >
            <NewSeason props={state} />

            <LastedManga/>

            <GenreHome/>
           
        </>

    )
}

export default Index;