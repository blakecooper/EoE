//substrings to find beginnings and endings in source
let begSubstrings = [
  `<li class="current-page">`,
  `<div class="introtext text parbase section"><p`,
  `srcset=`,
  `srcset=`,
  `<div class="calltoaction section">`,
  `src="/content/shared`
]

//EoE elements to populate from page source
let eoeElements = [
  "Title not found",
  "Teaser not found",
  "Image not found",
  "Link not found",
  "Link text not found"
]

function $(id) {
    return document.getElementById(id)
    }

//Search page source to populate the elements (almost) correctly
function getElements() {

  for(let i = 0; i < 6; i++) {
    var idxBeg = $("source").value.indexOf(begSubstrings[i]);
    eoeElements[i] = $("source").value.substring(idxBeg + begSubstrings[i].length - 1);
    var idxEnd = eoeElements[i].indexOf("</");
    eoeElements[i] = eoeElements[i].substring(i,idxEnd);
  }

  //A little post-loop cleanup to catch irregularities in styling from page to page
  eoeElements[0] = eoeElements[0].substring(1,eoeElements[0].length)

  if(eoeElements[1].substring(0,7) == ` class=`) {
    eoeElements[1] = eoeElements[1].substring(19,eoeElements[1].length)
  }

  startOfLinkText = eoeElements[4].lastIndexOf(`>`) + 1
  eoeElements[4] = eoeElements[4].substring(startOfLinkText,eoeElements[4].length)

  endOfLink = eoeElements[3].indexOf('jcr:') -1
  eoeElements[3] = "http://www.buffalo.edu/ubit/news/article.host.html/" + eoeElements[3].substring(0, endOfLink) + ".detail.html"

  endOfImageLink = eoeElements[5].indexOf(`"`)
  eoeElements[5] = "http://www.buffalo.edu/content/shared/www" + eoeElements[5].substring(0,endOfImageLink)

  $("textArea").innerHTML = "<b>Title: </b>" + eoeElements[0] +
  "<br><b>Teaser: </b>" + eoeElements[1] +
  "<br><b>Link text: </b>" + eoeElements[4] +
  "<br><b>Link: </b>" + eoeElements[3];

  $("image").innerHTML = "<img src='" + eoeElements[5] + "'></img>"
}

function copyAndImageSearch() {
    const toCopy = document.createElement('textarea');
    toCopy.value = eoeElements[5];
    document.body.appendChild(toCopy);
    toCopy.select();
    document.execCommand("copy")
    document.body.removeChild(toCopy)
    window.open("http://images.google.com")
}
