setTimeout(function(){
    $('.preloader').fadeOut('slow', function () {
    });
},4000);


function display_hide(){
  $(".showWhenHover").children('.hover').toggle();
}

var wrapper = document.getElementById("wrapper");

var ul = document.createElement("ul");
main.appendChild(ul);

var people = [];
var f = 1;
var URLhost = 'https://swapi.co/api/people/?page=' + f;

getJson(URLhost);

function getJson(myurl) {
    var req = new XMLHttpRequest();
    req.onload = function(){
      var jsonResponse = req.response;
      for(i = 0; i < jsonResponse.results.length; i++) {
        people.push(jsonResponse.results[i].name);
      }
//        console.log(people);
      for(i = 0; i < people.length; i++){
        
          var person = document.createElement('li');
          ul.appendChild(person);
          
          person.textContent = jsonResponse.results[i].name;
          
          var gender = document.createElement('p');
          gender.textContent = 'Gender: ' + jsonResponse.results[i].gender;
          person.appendChild(gender);
        
        
          var skinColor = document.createElement('p');
          skinColor.textContent = 'Skin Color: ' + jsonResponse.results[i].skin_color;
          person.appendChild(skinColor);
        
          var eye_color = document.createElement('p');
          eye_color.textContent = 'Eye Color: ' + jsonResponse.results[i].eye_color;
          person.appendChild(eye_color);
        
          var hair_color = document.createElement('p');
          hair_color.textContent = 'Hair Color: ' + jsonResponse.results[i].hair_color;
          person.appendChild(hair_color);
        
//          var homeWord = document.createElement('p');
//          var homeReq = new XMLHttpRequest();
//          var planetURL = jsonResponse.results[i].homeworld.toString();
//          homeReq.open('GET', planetURL, true);
//          var planetResponse = jsonResponse(homeReq.response);
//          homeWord.textContent = 'Homeworld: ' + planetResponse.name;
////          homeWord.textContent = 'Homeworld: ' + jsonResponse.results[i].homeworld.name;
////          homeWord.textContent = 'Homeworld: ' + jsonResponse.results[i].homeworld;
//          person.appendChild(homeWord);
//          console.log(jsonResponse.results[i].homeworld.name);
      }
    }
    req.onerror = function() {
    console.log(req.statusText);
}
    req.open("GET", myurl, true);
    req.responseType = "json";
    req.send();
}



function createLi(){
  
}

function next(){
  if (f < 9) {  
    ul.innerHTML = "";
    f++;
    URLhost = 'https://swapi.co/api/people/?page=' + f;
    getJson(URLhost);
  }
}

function previous(){
  if (f > 1) {
    ul.innerHTML = "";
    f--;
    URLhost = 'https://swapi.co/api/people/?page=' + f;
    getJson(URLhost);
  }
}

function pagination(page){
  ul.innerHTML = "";
  f = page;
  URLhost = 'https://swapi.co/api/people/?page=' + f;
  getJson(URLhost);
}
