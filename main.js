var endpoint = "https://www.jsonstore.io/b3b09ab60c39de74cdcd910207cfc07ed7ab0ffa926ebb9a782cc6b68e137f6f";

function getrandom(){
  var random_string = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
  return random_string;
}

function geturl(){
  var url = document.getElementById(“URL”).value;
  var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
  if(!protocol_ok){
    newurl = "http://"+url;
    return newurl;
  }
  else{
    return url;
  }
}

function genhash(){
  if (window.location.hash == “”){
    window.location.hash = getrandom();
  }
}

function shorturl(){
  var longurl = geturl();
  genhash();
  send_request(longurl);
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