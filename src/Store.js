import axios from 'axios';

class Store {
    constructor(){
        this.name = "Delowar";
        this.houses = [];
        this.page = 0;
        this.getInitianData();
    }

    async getInitianData(){
        axios.get("http://falgunit.com/tolet/public/api/adds?page="+this.page)
        .then((res) => {
            this.houses = res.data.Adds;
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export default new Store();