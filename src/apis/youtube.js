import axios from 'axios';

const KEY = 'AIzaSyAc8bAd4c8OwUXSR5bMSmy3iIpc8pZ50Ec';



//npm install axios@0.18.1  ... installed this version to prevent errors as per instructions on Udemy
//https://developers.google.com/youtube/v3/docs/search/list

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',   //so not include '/search' bit of api
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`,
        // will add 'q:' (query in our search) later
    }
})

// to see search details, see console.log > network > ..filter to XHR. then search
        //^ using 'videoID:'