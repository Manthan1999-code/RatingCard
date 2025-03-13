 let div2 = document.querySelector(".maindiv2");
 let clickme = document.querySelector(".clickbtn");
  let div1 = document.querySelector(".fulldiv");
  let newbtn = document.querySelector(".btn")
let smallbtn = document.getElementsByClassName("btnn")
let spann = document.querySelector(".ratingnumber")

for(let i of smallbtn){
function btngayab(){
    
let spam = document.createElement ("span")
spam.innerText = i.innerText;
console.log(spam);
spann.appendChild(spam);

    if(newbtn.classList.contains("btn")){
        newbtn.classList.remove("btn")
        newbtn.classList.add("gayab")
    }
    }
i.addEventListener("click",btngayab);
}

  function makevisible(){

if(
    div1.classList.contains("fulldiv")
){
    div1.classList.remove("fulldiv")
    div1.classList.add("maindivv")
}
if(
    div2.classList.contains("maindiv2")
){
    div2.classList.remove("maindiv2")
    div2.classList.add("maindiv22")
}
  }
  clickme.addEventListener("click",makevisible);
 