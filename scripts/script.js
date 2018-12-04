setTimeout(function(){
    $('.preloader').fadeOut('slow', function () {
    });
},4000);

var wrapper = document.getElementById("wrapper");

var ul = document.createElement("ul");
main.appendChild(ul);

var people = [];

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
  var main = document.getElementById('main');
  var f = 1;
  var req = new XMLHttpRequest();
  var URLhost = 'https://swapi.co/api/people/?page=' + f;
  
  req.open('GET', URLhost, true);
  req.addEventListener('load', function() {
    
      var response = JSON.parse(req.responseText);
      for (var k = 0; k < response.results.length; k++) {
        (function(y) {
          var person = document.createElement('li');
          ul.appendChild(person);
          person.textContent = response.results[y].name;
          people.push(response.results[y].name);
          console.log(people);
          
          
          
          var personHome = document.createElement('h5');
          var homeReq = new XMLHttpRequest();
          var planetURL = response.results[y].homeworld.toString();
          homeReq.open('GET', planetURL, true);
          homeReq.addEventListener('load', function () {
            if (homeReq.status >= 200 && homeReq.status < 400) {
              var planetResponse = JSON.parse(homeReq.responseText);
              personHome.textContent = 'Homeworld: ' + planetResponse.name;
              person.appendChild(personHome);
            } else {
              console.log('Error in network request: ' + req.statusText);
            }});
            homeReq.send(null);
            event.preventDefault();
          
//          var filmList = document.createElement('ol');
//          if (response.results[y].films.length > 0) {
//            var movieHead = document.createElement('h6');
//            movieHead.textContent = 'Movie Appearances:';
//            person.appendChild(movieHead)
//            var movieList = document.createElement('ol');
//            movieHead.appendChild(movieList);
//            for (var e = 0; e < response.results[y].films.length; e++) {
//              (function(x) {
//                var newURLhost = response.results[y].films[x];
//                var newReq = new XMLHttpRequest();
//                newReq.open('GET', newURLhost, true);
//                newReq.addEventListener('load', function(){
//                  if(newReq.status >= 200 && newReq.status < 400){
//                    var newResponse = JSON.parse(newReq.responseText);
//                    var movie = document.createElement('li');
//                    movie.textContent = newResponse.title;
//                    movieList.appendChild(movie);
//                  } else {
//                    console.log("Error in network request: " + newReq.statusText);
//                  }});
//                newReq.send(null);
//                event.preventDefault();
//              })(e);
//            }
//          }
    })(k);
    }
    
    });
    req.send(null);
    event.preventDefault();

  document.getElementById('next').addEventListener('click', function(event){
    if (f < 9) {
      ul.innerHTML = "";
      f++;
      var req = new XMLHttpRequest();
  var URLhost = 'https://swapi.co/api/people/?page=' + f;
  req.open('GET', URLhost, true);
  req.addEventListener('load', function() {
    if (req.status >= 200 && req.status < 400) {
      var response = JSON.parse(req.responseText);
      for (var k = 0; k < response.results.length; k++) {
        (function(y) {
          var person = document.createElement('li');
          ul.appendChild(person);
          person.textContent = response.results[y].name;
          people.push(response.results[y].name);
          console.log(people);
          
          
//          var personHome = document.createElement('h5');
//          var homeReq = new XMLHttpRequest();
//          var planetURL = response.results[y].homeworld;
//          homeReq.open('GET', planetURL, true);
//          homeReq.addEventListener('load', function () {
//            if (homeReq.status >= 200 && homeReq.status < 400) {
//              var planetResponse = JSON.parse(homeReq.responseText);
//              personHome.textContent = 'Homeworld: ' + planetResponse.name;
//              person.appendChild(personHome);
//            } else {
//              console.log('Error in network request: ' + req.statusText);
//            }});
//            homeReq.send(null);
//            event.preventDefault();
          
          
          
//          var filmList = document.createElement('ol');
//          if (response.results[y].films.length > 0) {
//            var movieHead = document.createElement('h6');
//            movieHead.textContent = 'Movie Appearances:';
//            person.appendChild(movieHead)
//            var movieList = document.createElement('ol');
//            movieHead.appendChild(movieList);
//            for (var e = 0; e < response.results[y].films.length; e++) {
//              (function(x) {
//                var newURLhost = response.results[y].films[x];
//                var newReq = new XMLHttpRequest();
//                newReq.open('GET', newURLhost, true);
//                newReq.addEventListener('load', function(){
//                  if(newReq.status >= 200 && newReq.status < 400){
//                    var newResponse = JSON.parse(newReq.responseText);
//                    var movie = document.createElement('li');
//                    movie.textContent = newResponse.title;
//                    movieList.appendChild(movie);
//                  } else {
//                    console.log("Error in network request: " + newReq.statusText);
//                  }});
//                newReq.send(null);
//                event.preventDefault();
//              })(e);
//            }
//          }
    })(k);
    }
    
    } else {
      console.log('Error in network request: ' + req.statusText);
    }});
    req.send(null);
    event.preventDefault();
    }
  });

  document.getElementById('prev').addEventListener('click', function(event){
    if (f > 1) {
      ul.innerHTML = "";
      f--;
      var req = new XMLHttpRequest();
  var URLhost = 'https://swapi.co/api/people/?page=' + f;
  req.open('GET', URLhost, true);
  req.addEventListener('load', function() {
    if (req.status >= 200 && req.status < 400) {
      var response = JSON.parse(req.responseText);
      for (var k = 0; k < response.results.length; k++) {
        (function(y) {
          var person = document.createElement('li');
          ul.appendChild(person);
          person.textContent = response.results[y].name;
          people.push(response.results[y].name);
          console.log(people);
          
          
          
          
          
//          var personHome = document.createElement('h5');
//          var homeReq = new XMLHttpRequest();
//          var planetURL = response.results[y].homeworld;
//          homeReq.open('GET', planetURL, true);
//          homeReq.addEventListener('load', function () {
//            if (homeReq.status >= 200 && homeReq.status < 400) {
//              var planetResponse = JSON.parse(homeReq.responseText);
//              personHome.textContent = 'Homeworld: ' + planetResponse.name;
//              person.appendChild(personHome);
//            } else {
//              console.log('Error in network request: ' + req.statusText);
//            }});
//            homeReq.send(null);
//            event.preventDefault();
          
          
          
          
//          var filmList = document.createElement('ol');
//          if (response.results[y].films.length > 0) {
//            var movieHead = document.createElement('h6');
//            movieHead.textContent = 'Movie Appearances:';
//            person.appendChild(movieHead)
//            var movieList = document.createElement('ol');
//            movieHead.appendChild(movieList);
//            for (var e = 0; e < response.results[y].films.length; e++) {
//              (function(x) {
//                var newURLhost = response.results[y].films[x];
//                var newReq = new XMLHttpRequest();
//                newReq.open('GET', newURLhost, true);
//                newReq.addEventListener('load', function(){
//                  if(newReq.status >= 200 && newReq.status < 400){
//                    var newResponse = JSON.parse(newReq.responseText);
//                    var movie = document.createElement('li');
//                    movie.textContent = newResponse.title;
//                    movieList.appendChild(movie);
//                  } else {
//                    console.log("Error in network request: " + newReq.statusText);
//                  }});
//                newReq.send(null);
//                event.preventDefault();
//              })(e);
//            }
//          }
          
          
          
          
          
    })(k);
    }
    
    } else {
      console.log('Error in network request: ' + req.statusText);
    }});
    req.send(null);
    event.preventDefault();
    }
  });

}