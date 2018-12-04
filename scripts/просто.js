var main = document.createElement("div");
main.setAttribute('id', "main");
document.body.appendChild(main);

//var iframe = document.createElement("iframe");
//iframe.setAttribute('width', "560");
//iframe.setAttribute('height', "315");
//iframe.setAttribute('href', "https://www.youtube.com/embed/IvUU8joBb1Q");
//iframe.setAttribute('frameborder', "0");
//main.appendChild(iframe);

//var form = document.createElement("form");
//document.body.appendChild(form);
//var vidSearch = document.createElement("input");
//vidSearch.placeholder = "Мне повезёт!"
//form.appendChild(vidSearch);
//var go = document.createElement("button");
//go.textContent = "GO";
//form.appendChild(go);

var ul = document.createElement("ul");
document.body.appendChild(ul);

var videos =[];

function createVideo(e){
	e.preventDefault();
    ul.innerHTML = "";
	var input = vidSearch.value;
	var wUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAvpCSzbvBcVu5DUBCBfgmIxrWZsb4gssU&q=" + input + "&type=video";
	getVideoId(wUrl);
}

function getVideoId(myUrl){

    var req = new XMLHttpRequest();
    req.onload = function(){
    	var jsonResponse = req.response;

    	var vidId = jsonResponse.items[0].id.videoId;
        videos.push(jsonResponse.items[0]);
        videos.push(jsonResponse.items[1]);
        videos.push(jsonResponse.items[2]);
        videos.push(jsonResponse.items[3]);
        videos.push(jsonResponse.items[4]);
        console.log(videos);
    	setPlayer(vidId);
        generateMarkup(videos);
    }
    req.onerror = function() {
    console.log(req.statusText);
}
    req.open("GET", myUrl, true);
    req.responseType = "json";
    req.send();

}

function setPlayer(viId){
    var player = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ viId +"\"" + 'frameborder="0" allowfullscreen></iframe>';
    playVideo(player);
}

function playVideo(htmCode){
    main.innerHTML = "";
    main.innerHTML = htmCode;
}

function generateMarkup(array) {

	for(let x in array){
		createLi(array[x])
	}
  
    videos = [];
    vidSearch.value = ""

}

function createLi(item){

    var li = document.createElement("li");
    var a = document.createElement("a");
    a.textContent = item.snippet.title;
    a.setAttribute('onclick', 'setPlayer("'+item.id.videoId+'")');
    a.setAttribute('style', 'cursor:pointer');
    ul.appendChild(li);
    li.appendChild(a);
}



form.onsubmit = createVideo;