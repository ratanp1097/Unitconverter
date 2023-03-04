function shortenUrl() {
    var urlInput = document.getElementById("urlInput").value;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var shortenedUrl = JSON.parse(this.responseText).shortUrl;
        document.getElementById("shortenedUrl").innerHTML = shortenedUrl;
      }
    };
    request.open("POST", "/api/shorten", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify({url: urlInput}));
  }
  