class api {
    constructor() {
        this.dateScheduleListURL = 'http://0.0.0.0:8000/api/date_schedule/';
    }

    getDetailURL(url, id){
        return url.concat(id + '/');
    }
    
    fetch(method, url, options = {}){
        const requestOptions = {
            ...options,
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        return fetch(url, requestOptions)
        .then(res => res.json())
    }
    
    fetchDateScheduleItems() {
        return this.fetch('GET', this.dateScheduleListURL);
    }      
    
    fetchWeekScheduleItems() {
        return this.fetch('GET', this.weekScheduleURL);
    }   

    createDateScheduleItem(options) {
        return this.fetch('POST', this.dateScheduleListURL, options);
    }

    updateDateScheduleItem(options, id){
        return this.fetch('PUT', this.getDetailURL(this.dateScheduleListURL, id), options);
    }

    getDateScheduleItems(){
        return this.fetch('GET', this.dateScheduleListURL)
    }

    getDateScheduleItem(id){
        return this.fetch('GET', this.getDetailURL(this.dateScheduleListURL, id));
    }


}

export default new api();
