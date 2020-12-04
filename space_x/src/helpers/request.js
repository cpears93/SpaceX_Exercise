const baseUrl = 'https://api.spacexdata.com/v4/launches/'
class Request {

    get() {
        console.log("fetching");
        
        return fetch(baseUrl)
            .then(res => res.json())
    }
}

export default Request;