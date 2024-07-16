const fav="Ishq";
let guess=prompt("Guess The favorite Movie & win big");

while ((guess!=fav) && (guess!="quite")) {
    console.log(prompt("Opps! Your guess is wrong let's try again"));
}

if (guess==fav) {
    console.log(prompt("Yeah! You guess it right"));
}else if(guess=="quite"){
    console.log(prompt("Oo It seem's You want to quite the game "));
}