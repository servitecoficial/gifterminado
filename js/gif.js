class Giphy{
    constructor(keyword) {
        this.keyword = keyword;
        this.endpoint = "https://api.giphy.com/v1/gifs";
        this.api_key = "D9cCRwQfumyUCG62q835gqKzElV5wTip";
    }

static getUrlAsync(keyword, callback){
    return new Giphy(keyword).GetGifUrl(callback);
}


GetGifUrl(callback){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", this.endpoint+"/translate?api_key="+this.api_key+"&s="+this.keyword);

    xhr.responseType = "json";

    xhr.onload = function(){
        callback(this.response.data.images.original.mp4);
    }

    xhr.send();
}
}

document.getElementById('btn').addEventListener('click', function() {
    console.log('asd');
    var keyword = document.getElementById('search').value;

    Giphy.getUrlAsync(keyword,function(videoURL){
        document.getElementById('gif').src = videoURL;
    });
});



