
function HideContent(d) {
document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
document.getElementById(d).style.display = "block";
}
function ReverseDisplay(d) {
if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }
else { document.getElementById(d).style.display = "none"; }
}

function images_add_more() {
	var txt = "<br><input id=\"image\" class=\"field text medium\" name=\"images[]\"  type=\"file\" maxlength=\"255\" value=\"\" />";
	document.getElementById("imagediv").innerHTML += txt;
 }

function parts_add_more() {
        var txt = "<input id=\"part\" class=\"field text medium\" name=\"parts[]\" type=\"text\" maxlength=\"200\" value=\"\" /><br />";
        document.getElementById("partdiv").innerHTML += txt;
 }
