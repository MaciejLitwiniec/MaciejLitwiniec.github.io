

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

function loadDocPL() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("content").innerHTML = this.responseText;
   }
 };
 xhttp.open("GET", "contentPL.html", true);
 xhttp.send();
}
 
function loadDocEN() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("content").innerHTML = this.responseText;
   }
 };
 xhttp.open("GET", "contentEN.html", true);
 xhttp.send();
} 
