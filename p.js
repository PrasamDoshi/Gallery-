let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImage");
let close = document.querySelector("span.close");
let next = document.querySelector("span.next");
let previous = document.querySelector("span.previous");
let i = 0;
images.forEach((img, index) => {
   console.log(index);
  img.addEventListener("click", () => {
    console.log(index);
    open(`${index}.jpg`);
    i = index;
    next.addEventListener("click",  () => {
      i = (i % 10) + 1;
      console.log(i);
      open(`${i}.jpg`);
    });
    previous.addEventListener("click", () =>{
      i--;
      i = Math.abs(i % 10);
      if (i == 0) i = 10;
      console.log(i);
      open(`${i}.jpg`);
    });

    close.addEventListener("click", () => {
      wrapper.style.display = "none";
    });

  });


});


function open(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}