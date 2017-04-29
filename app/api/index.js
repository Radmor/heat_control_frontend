class api {
    constructor() {
        this.dateScheduleListURL = 'http://localhost:8000/api/date_schedule';
        this.weekScheduleURL = 'http://localhost:8000/api/week_schedule';
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

    getDateScheduleItems(){
        return this.fetch('GET', this.dateScheduleListURL)
    }


}

export default new api();
