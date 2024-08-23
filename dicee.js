$(".img1").attr("src","images/dice6.png");
$(".img2").attr("src","images/dice6.png");

function play() {
    var randomNumber1 = Math.floor((Math.random()* 6)+1);
    var randomNumber2 = Math.floor((Math.random()* 6)+1); 

    $(".img1").attr("src","images/dice"+randomNumber1+".png");
    $(".img2").attr("src","images/dice"+randomNumber2+".png");
    
    if (randomNumber1 > randomNumber2) {
        $("h1").text("Player 1 is the Winner !");

    }else if (randomNumber2 > randomNumber1){
        $("h1").text("Player 2 is the Winner !");

    }else{
        $("h1").text("Draw !");
    }
}

$(".play-button").click(function(){
    play();
})   