var endpoint = "https://www.jsonstore.io/b3b09ab60c39de74cdcd910207cfc07ed7ab0ffa926ebb9a782cc6b68e137f6f";

function getrandom(){
  var random_string = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
  return random_string;
}

function geturl(url){
  var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
  if(!protocol_ok){
    newurl = "http://"+url;
    return newurl;
  }
  else{
    return url;
  }
}

// function genhash(){
//   if (window.location.hash == “”){
//     window.location.hash = getrandom();
//   }
// }

function shorturl(url){
  var longurl = geturl(url);
  //genhash();
  send_request(longurl);
  return longurl;
}

function send_request(url) {
  this.url = url;
  $.ajax({
    'url': endpoint + "/" + window.location.hash.substr(1),
    'type': 'POST',
    'data': JSON.stringify(this.url),
    'dataType': 'json',
    'contentType': 'application/json; charset=utf-8'
  })
}


var hashh = window.location.hash.substr(1)

if (window.location.hash != "") {
    $.getJSON(endpoint + "/" + hashh, function (data) {
        data = data["result"];

        if (data != null) {
            window.location.href = data;
        }

    });
}
