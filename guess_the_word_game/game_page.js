player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_qustion").innerHTML="question turn-"+player1_name;
document.getElementById("player_answer").innerHTML="answer turn-"+player2_name;

function send() {

 Number1=document.getElementById("Number1").value;
 Number2=document.getElementById("Number2").value;
Answer=parseInt(Number1)*parseInt(Number2);
question_word="<h4>"+Number1+"X"+Number2+"</h4>";
input_box="<br> answer: <input type='text'id='input_check_box'>";
check_button="<br> <br> <button class='btn btn-info' onclick='check()'> check </button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("Number1").value="";
document.getElementById("Number2").value="";
}