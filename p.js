let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImage");
let close = document.querySelector("span.close");
let next = document.querySelector("span.next");
let previous = document.querySelector("span.previous");
let i = 0;
let j = 0, k = 0;
const huh = images.forEach((img, index) => {
  // console.log(index);
  img.addEventListener("click", () => {
    console.log(index);
    open(`img/${index}.jpg`);
    i = index; k = j;
    next.addEventListener("click",  () => {
      i = (i % 10) + 1;
      console.log(i,k);
      open(`img/${i - k}.jpg`);
      if(j!=0)k+=01;
    });
    previous.addEventListener("click", () =>{
      i--; k = j;
      i = Math.abs(i % 10);
      if (i == 0) i = 10;
      console.log(i,k);
      open(`img/${i + k}.jpg`);
      if(j!=0)k+=0.5;
    });

    close.addEventListener("click", () => {
      wrapper.style.display = "none";

      j++;
    });

  });


});


function open(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}