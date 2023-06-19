//practicing functions
function razzle(){
    console.log("You've been razzled");
}
razzle();
function razzles(lawyer= "Billy",target = "'em"){
    console.log(`${lawyer} razzles-dazzles ${target}!`)
}
razzles();

const button = document.getElementById("button");
button.addEventListener("click", function () {
  console.log("Yet more razzling");
});