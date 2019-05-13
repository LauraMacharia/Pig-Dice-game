var player1="";
var player2="";

// player1 = document.getElementById("#name1").val()
// player2 = document.getElementById("#name2").val()

// player1 = document.querySelector("#name1").value;


$(document).ready(function () {
    $("#rules").click(function () {
        $(".Rules").toggle(100);
    });
    $("#game").submit(function(event){
        event.preventDefault();
        player1 = $("#name1").val()
        player2 = $("#name2").val()
        $("#game").toggle(100);
    });
    $("#name1").on("input",function(event){
        $("#one").text(event.target.value);
    })
    $("#name2").on("input",function(event){
        $("#two").text(event.target.value);
    })
});

var score1, score2, totalScore1, totalScore2;
score1 = 0;
score2 = 0;
totalScore1 = 0;
totalScore2 = 0;
$(document).ready(function(){
    $("#roll1").click(function(){
        player = Math.floor(Math.random()*6)+1;
        if(player === 1){
            alert("Oops! You rolled a one. It's your partner's turn");
            score1 = 0;
            $(".p1round").text(score1);
            totalScore1 += score1;
            $("#p1game").text(totalScore1);
            $("#button1").hide();
            $("#button2").show();
        }
        else{
            score1 += player;
            $(".p1round").text(score1);
        }
    })
    $("#hold1").click(function(){
        totalScore1 += score1;
        $("#p1game").text(totalScore1);
        // $("#button1").hide();
        // $("#button2").show(); 
        score1 = 0;
    })
    $("#roll").click(function(){
        player = Math.floor(Math.random()*6)+1;
        if(player === 1){
            alert("Oops! You rolled a one. It's your partner's turn");
            score2 = 0;
            $(".p2round").text(score2);
            totalScore2 += score2;
            $("#p2game").text(totalScore2);
            $("#button2").hide();
            $("#button1").show();
        }
        else{
            score2 += player;
            $(".p2round").text(score2);
        }
    })
    $("#hold").click(function(){
        totalScore2 += score2;
        $("#p2game").text(totalScore2);
        // $("#button2").hide();
        // $("#button1").show(); 
        score2 = 0;
    })
})