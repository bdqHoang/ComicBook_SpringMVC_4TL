import api from "./api";
class HomeServices{

    // Get all comics new season
    getNewSeason(){
        return api.get("/home/new-season");
    }


    // Get all comics recent release
    getRecentRelease(){
        return api.get("/home/recent-release");
    }

    //get page manga

    getPageManga(){
        return api.get(`/home/count-manga`);
    }

    //get all manga
    getAllManga(page){
        return api.get(`/home/all-manga?page=${page}`);
    }

    //get genre in home page

    getHomeGenre(){
        return api.get(`/home/top-genre`);
    }

    

    


}

export default HomeServices;