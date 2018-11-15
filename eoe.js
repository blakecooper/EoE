//substrings to search for in page source
let substrings = [
  `<li class="current-page">`,
  `<div class="introtext text parbase section"><p>`,
  `srcset=`,
  `srcset=`,
  `<div class="calltoaction section">`
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

//Search page source to populate the elements correctly
function getElements() {
  for(let i = 0; i < 5; i++) {
    var idxBeg = $("source").value.indexOf(substrings[i]);
    eoeElements[i] = $("source").value.substring(idxBeg + substrings[i].length - 1);
    var idxEnd = eoeElements[i].indexOf("</");
    eoeElements[i] = eoeElements[i].substring(i,idxEnd);
  }

  //A little cleanup once the loop has run to catch irregularities
  eoeElements[0] = eoeElements[0].substring(1,eoeElements[0].length)
  startOfLinkText = eoeElements[4].indexOf(`>`) + 1
  eoeElements[4] = eoeElements[4].substring(startOfLinkText,eoeElements[4].length)
  endOfLink = eoeElements[3].indexOf('jcr:') -1
  eoeElements[3] = "http://www.buffalo.edu/ubit/news/article.host.html/" + eoeElements[3].substring(0, endOfLink) + ".detail.html"

  document.getElementById('textArea').innerHTML = "<b>Title: </b>" + eoeElements[0] +
  "<br><b>Teaser: </b>" + eoeElements[1] +
  "<br><b>Link text: </b>" + eoeElements[4] +
  "<br><b>Link : </b>" + eoeElements[3];

  //TODO: get photo and set up onClick functions for buttons
}
