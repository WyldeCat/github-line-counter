function loadDocument(URL) {
  var xhr = new XMLHttpRequest();
  try {
    var docObj = { };
    var check = 0;
    xhr.open("GET", URL, false);
    xhr.onload = function() {
      check = 1;
      docObj.doc = document;
    }
    xhr.send();
    //while(check == 0);
    return docObj
  }
  catch(e) {
    window.alert("loading document fail..");
  }
}

function calculateURL(body, isCurr) {
  /* TODO */
  return 1;
}

var test_doc = loadDocument("https://github.com");
console.log(test_doc.doc);
