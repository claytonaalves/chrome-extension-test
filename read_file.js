var url = chrome.extension.getURL('the_file.txt'); // full url
var req = new XMLHttpRequest(); // read via XHR
req.open('GET', url);
req.onreadystatechange = function(e) {
  if (req.readyState === 4 && req.status === 200) {
    console.log(data);
  } else {
    // error
  }
}
