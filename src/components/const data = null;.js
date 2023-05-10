const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open(
  "GET",
  "https://youtube-v31.p.rapidapi.com/search?part=snippet&order=date&q=reactjs"
);
xhr.setRequestHeader(
  "X-RapidAPI-Key",
  "b4680d97eamshdd160c89960e42ep1d3878jsnce346845b7d1"
);
xhr.setRequestHeader("X-RapidAPI-Host", "youtube-v31.p.rapidapi.com");

xhr.send(data);
