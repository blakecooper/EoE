//substrings to search for in page source
let substrings = []

//EoE elements to populate from page source
let eoeElements = [
  "Title not found",
  "Teaser not found",
  "Image not found",
  "Link not found",
  "Link text not found"
]

//Testing for correct path and functionality... this can come out!
function test() {
  document.getElementById('textArea').innerHTML = 'hiya buddy'
}

//Search page source to populate the elements correctly
function getElements(source) {
  if(source != "") {
    for(let i = 0; i < 5; i++) {
      var idxBeg = source.indexOf(substrings[i]);
      eoeElements[i] = source.substring(idxBeg + substrings[i].length);
      var idxEnd = eoeElements[i].indexOf("</");
      eoeElements[i] = eoeElements[i].substring(0,idxEnd);
    }
  }
}
