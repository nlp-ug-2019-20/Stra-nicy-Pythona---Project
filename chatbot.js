const showButton = document.getElementById("showButton")
var questionNum = 0;													// keep count of question, used for IF condition.
var question = 'Hi. I\'m MemeBot. What is your name?';				  // first question

var output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question

function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = 'Hello, ' + input +"."; // output response
    document.getElementById("input").value = "";   		// clear text box
    question = 'Would you like me to display a random meme for you? That\'s what I do :)';			    	// load next question		
    setTimeout(timedQuestion, 2000);									// output next question after 2sec delay
    }
//Questions and responses
    else if (questionNum == 1 & input === "Yes" || input === "Sure") {
    output.innerHTML = 'Alright. Then here you go, press the button below and look at random memes from Reddit. Enjoy! :)';
    document.getElementById("button").removeAttribute("hidden");
    document.getElementById("input").value = "";	      	

    }   
    else if (questionNum == 1 & input === "No" || input === "Nope") {
    output.innerHTML = 'Well, I\'m sad now, because that\'s mostly what I do for now :(. If you still want to look at memes, just type \'Ok\'';
    document.getElementById("input").value ="";
    }
    else if (questionNum == 2 & input === "Alright, show me some memes" || input === "Ok" || input === "Show memes") {
      output.innerHTML = 'Then here, click on the button below and enjoy the memes!';
      document.getElementById("button").removeAttribute("hidden");
      document.getElementById("input").value ="";
    }
    else if (questionNum == 1 & input === "You're stupid" || input === "Fudge off" || input === "I hate you") {
      output.innerHTML = "Please don't be mean... I just want you to have a good time, y'know? :( Wanna look at some memes?";
      document.getElementById("input").value ="";
    }
    else if (questionNum == 1 & input === "I love you" || input === "You're the best" || input === "You're awesome") {
      output.innerHTML = "Awww, thank you. You are cool too! Want to watch some memes?";
      document.getElementById("input").value ="";
    }
    else if (questionNum == 2 || questionNum == 3  & input === "Thank you" || input === "Awesome") {
      output.innerHTML = "No problem. Glad I could help. Enjoy!";
      document.getElementById("input").value ="";
}}

function timedQuestion() {
    output.innerHTML = question;
}
document.getElementById('input').addEventListener('keypress', pressKey);
//push enter key, to run bot function.
function pressKey(event) {
  if (event.which == 13) {
    bot();
    questionNum++													// increase questionNum count by 1
  }
};
