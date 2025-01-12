const containerEL = document.querySelector(".container");

const careers = ["YouTuber","Developer","ChessPlayer","Freelancer","ContentWriter"];

careersIndex = 0;

charecterIndex = 0;

updateCareer();

function updateCareer(){
    charecterIndex++;
    containerEL.innerHTML = `<h1>I am a ${careers[careersIndex].slice(0,charecterIndex)}</h1>`;
    
    
    if(charecterIndex === careers[careersIndex].length){
        careersIndex++;
        charecterIndex= 0;
    }
    setTimeout(updateCareer,300);
}