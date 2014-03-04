//notes:
//hung up by onload
//hung up by JS counting empty white-spaces as text nodes

window.onload=function(){
var counter=0;

var textaCount=document.getElementsByClassName("texta");
var drop=document.getElementById("dropdowns");
var TAC=document.getElementById("container");
var newN=document.getElementById("select");


var mixup=function (){

}
var plusField=function (){
	if(TAC.childNodes.length<6){
	var newNer= newN.cloneNode(true);
	var newTA= document.createElement("textarea");
    drop.appendChild(newNer);
    TAC.appendChild(newTA);
    }
    
    }


var minusField=function (){
    if(TAC.childNodes.lastChild=1&&TAC.childNodes.length>0){
        TAC.removeChild(TAC.childNodes[TAC.childNodes.length-1]);
        drop.removeChild(drop.childNodes[drop.childNodes.length-1]);                       }
    }
/*var getResults=function (){
    
    alert("test");
var aback = array1[0].length;
    var bback = array1[1].length;
    var cback = array1[2].length;
    var count = aback * bback * cback;
    counter++;
        document.getElementById("results").innerHTML = "Just one of" + " " + count + " " + "results!";}*/

var plus;
plus=document.querySelector(".plus");
plus.addEventListener("click",plusField,false);

var minus;
minus=document.querySelector(".minus");
minus.addEventListener("click",minusField,false);

var mixup=document.getElementById("mix");

//minus.addEventListener("click",minusField,false);
/*document.getElementById("minus").onclick= minusField;
*/


var handleFiles= function handleFiles(files) {
    // Check for the various File API support.
    if (window.FileReader) {
        // FileReader are supported.
        getAsText(files[0]);
    } else {
        alert('FileReader are not supported in this browser.');
    }
  }

  function getAsText(file) {
    var reader = new FileReader();
    // Read file into memory as UTF-8      
    reader.readAsText(file);
    // Handle errors load
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
  }

  function loadHandler(event) {
    var csv = event.target.result;
    processData(csv);
  }

  function processData(csv) {
      var allTextLines = csv.split(/\r\n|\n/);
      var lines = [];
      for (var i=0; i<allTextLines.length; i++) {
          var data = allTextLines[i].split(';');
              var tarr = [];
              for (var j=0; j<data.length; j++) {
                  tarr.push(data[j]);
              }
              lines.push(tarr);
      }
    console.log(lines[4]);
  }

  function errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
  }
  var csv;
csv=document.getElementById("csvFileInput");
csv.addEventListener("click",handleFiles,false);
}