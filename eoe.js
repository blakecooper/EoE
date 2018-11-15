<script>
"use strict"

let substrings = [
  "<li class="current-page">",
  "<div class="introtext text parbase section"><p>",
  "srcset=",
  "srcset=",
  "<div class="calltoaction section">"
]
let eoeElements = [
  "Title not found",
  "Teaser not found",
  "Image not found",
  "Link not found",
  "Link text not found"
]

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

function test() {
  document.getElementById('textArea').innerHTML = 'hiya buddy'
}

</script>
