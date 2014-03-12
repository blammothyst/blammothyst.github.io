$(document).ready(function(){
//var allQtions= $.getJSON( "questions.json", function() {
//console.log("complete");
if($("#logButton")){
$("#logButton").addEventListener("click",function(){
var namex=$("#userHtml").value;
var passex=$("#passHtml").value;
localStorage.username=namex;
localStorage.password=passex;
window.location="index.html";
},false);}
if($
("#cancelButton")){
$("#cancelButton").addEventListener("click",function(){window.location="index.html";}
,false);}


/*var twoFields=function twoFields () {

}*/

var name=localStorage.username;
if(name){
var welcome= document.createTextNode("Hello "+name);
login.appendChild(welcome);
$("#question").style.display="none";
}

if(counter>0){
$("#login").style.display="none";
}



var allQuestions=[{
    "question": "Who's the Boss?",
    "choices": ["Tony Danza (hint: this is correct)", "Lumberg", "Charles/Scott Baio", "Not this one"],
    "correctAnswer": 0
}, {
    "question": "Where were the 2014 Winter Olympics held?",
    "choices": ["America", "Florida", "THE United States of America", "Sochi, Russia", "Jamaica!", "Argentina"],
    "correctAnswer": 3
}, {
    "question": "Where is the World Cup being held during summer 2014?",
    "choices": ["USA", "Qatar", "Brazil", "Argentina"],
    "correctAnswer": 2
}, {
    "question": "What color are Bob Costa's eyes when he has pink eye?",
    "choices": ["White", "Blue", "Pink", "Translucent"],
    "correctAnswer": 2
}, {
    "question": "Who won Superbowl XLVIII (played 2/2/2014)?",
    "choices": ["Denver Broncos", "Seattle Seahawks", "Omaha", "Troy Aikman"],
    "correctAnswer": 1
}]
/*(function () {
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
})(); */
//make a counter and a score
var counter = 0;
var arrayScore = [];
var totals = 0;
if($
("#backButton")){$
("#backButton").style.display = "none";}


function fill() {
    $("#visibleForm").fadeOut(200, function () {

        if (allQuestions[counter - 1]) {
            var newQText = document.createTextNode(allQuestions[counter - 1].question);
            //identify parent node to accept question from array  
            var qParent = $
        ("#question");
            //add new question child to node, replacing old node child
            qParent.replaceChild(newQText, qParent.childNodes[0]);
            //identify parent node to accept choice inputs
            var choiceP = $
        ("#choices");
            //clear all children
            while (choiceP.firstChild) {
                choiceP.removeChild(choiceP.firstChild);
            };
            for (var i = 0, var k = allQuestions[counter - 1].choices.length; i < k; i++) {
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
                    $
                ("#backButton").style.display = "inline";
                } else {
                    $
                ("#backButton").style.display = "none";
                }
            }
        }
    });
   
    $("#visibleForm").fadeIn(200);
    }

    

console.log("progress up to next()");
    //make a function that runs when you hit next
    function next() {
$("#question").style.display="inline";
$("#login").style.display="none";

        console.log(counter);
        if (counter > 0) {
            //loop through child nodes to get checked status
            for (i = 0, k = allQuestions[counter - 1].choices.length; i < k; i++) {
                if (counter > 0 && $
                ("#choices").childNodes[i].childNodes[0].checked) {
                    arrayScore[counter - 1] = i;
                    counter++;
                }
            }
        }
        //if last question has been shown, show score
        if (counter - 1 == allQuestions.length) {
            while ($
            ("#choices").firstChild) {
                $
        ("#choices").removeChild($
                ("#choices").firstChild);
            };
            for (var i = 0, k = allQuestions.length; i < k; i++) {
                if (arrayScore[i] === allQuestions[i].correctAnswer) {
                    totals++;
                }
            }
            $
        ("#question").innerHTML = totals + " " + "out of" + " " + allQuestions.length + " " + "isn't bad!";
            $
        ("#nextButton").style.display = "none";
            totals = 0;
        }
        if (counter === 0) {
            counter++;
        }
        console.log("next prefill counter: " + counter);
        console.log("next prefill arrayScore[counter-1] value: " + arrayScore[counter - 1]);
        fill();
    }

    if($
    ("#backButton")){$
    ("#backButton").onclick = function back() {
        counter--;
        console.log("back prefill counter: " + counter)
        console.log("back prefill arrayScore[counter-1] value: " + arrayScore[counter - 1]);
        fill();
        $
    ("#nextButton").style.display = "inline";
    };
$("#nextButton").click(next);
}
);//ready   