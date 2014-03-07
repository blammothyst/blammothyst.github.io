window.onload=function(){
//var allQuestions= $.getJSON( "questions.json", function() {
//console.log("complete");
if(document.getElementById("logButton")){
document.getElementById("logButton").addEventListener("click",function(){
var namex=document.getElementById("userHtml").value;
var passex=document.getElementById("passHtml").value;
localStorage.username=namex;
localStorage.password=passex;
window.location="index.html";
},false);}
if(document.getElementById("cancelButton")){
document.getElementById("cancelButton").addEventListener("click",function(){window.location="index.html";}
,false);}


/*var twoFields=function twoFields () {

}*/

var name=localStorage.username;
if(name){
var welcome= document.createTextNode("Hello "+name);
login.appendChild(welcome);
document.getElementById("question").style.display="none";
}






var allQuestions=(function () {
    allQuestions = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "questions.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 
//make a counter and a score
var counter = 0;
var arrayScore = [];
var totals = 0;
if(document.getElementById("backButton")){document.getElementById("backButton").style.display = "none";}


function fill() {
    $("#visibleForm").fadeOut("slow", function () {

        if (allQuestions[counter - 1]) {
            var newQText = document.createTextNode(allQuestions[counter - 1].question);
            //identify parent node to accept question from array  
            var qParent = document.getElementById("question");
            //add new question child to node, replacing old node child
            qParent.replaceChild(newQText, qParent.childNodes[0]);
            //identify parent node to accept choice inputs
            var choiceP = document.getElementById("choices");
            //clear all children
            while (choiceP.firstChild) {
                choiceP.removeChild(choiceP.firstChild);
            };
            for (i = 0, k = allQuestions[counter - 1].choices.length; i < k; i++) {
                var newCText = document.createTextNode(allQuestions[counter - 1].choices[i]);
                var newLabel = document.createElement("label");
                var newRB = document.createElement("input");
                newRB.type = "radio";
                newRB.name = "only1";
                if (arrayScore[counter - 1] === i) {
                    newRB.checked = true;
                }
                var br = document.createElement("br");
                choiceP.appendChild(newLabel);
                newLabel.appendChild(newRB);
                newLabel.appendChild(newCText);
                newLabel.appendChild(br);
                if (counter > 1) {
                    document.getElementById("backButton").style.display = "inline";
                } else {
                    document.getElementById("backButton").style.display = "none";
                }
            }
        }
    });
    $("#visibleForm").fadeIn("slow");
    }

    

console.log("progress up to next()");
    //make a function that runs when you hit next
    function next() {

        console.log(counter);
        if (counter > 0) {
            //loop through child nodes to get checked status
            for (i = 0, k = allQuestions[counter - 1].choices.length; i < k; i++) {
                if (counter > 0 && document.getElementById("choices").childNodes[i].childNodes[0].checked) {
                    arrayScore[counter - 1] = i;
                    counter++;
                }
            }
        }
        //if last question has been shown, show score
        if (counter - 1 == allQuestions.length) {
            while (document.getElementById("choices").firstChild) {
                document.getElementById("choices").removeChild(document.getElementById("choices").firstChild);
            };
            for (var i = 0, k = allQuestions.length; i < k; i++) {
                if (arrayScore[i] === allQuestions[i].correctAnswer) {
                    totals++;
                }
            }
            document.getElementById("question").innerHTML = totals + " " + "out of" + " " + allQuestions.length + " " + "isn't bad!";
            document.getElementById("nextButton").style.display = "none";
            totals = 0;
        }
        if (counter === 0) {
            counter++;
        }
        console.log("next prefill counter: " + counter);
        console.log("next prefill arrayScore[counter-1] value: " + arrayScore[counter - 1]);
        fill();
    }

    if(document.getElementById("backButton")){document.getElementById("backButton").onclick = function back() {
        counter--;
        console.log("back prefill counter: " + counter)
        console.log("back prefill arrayScore[counter-1] value: " + arrayScore[counter - 1]);
        fill();
        document.getElementById("nextButton").style.display = "inline";
    };
$("#nextButton").click(next);
}}