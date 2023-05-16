DOM = (selector) => document.querySelector(selector)

const gallery = DOM("#gallery");
const view = DOM("#viewer");
const close = DOM("#close");
const next = document.querySelector("span.next");
const previous = document.querySelector("span.previous");


var images = [];
var i = 0;
var j=0;

fetch("imagedata.json")
    .then(data => data.json())
    .then((listOfImages) => {
        images = listOfImages.slice(0, 60);
        populate();
    });

function populate() {
    for (i = 0; i < images.length; i++) {

        gallery.innerHTML += `
        <div class="box">
                <img alt="Failed to load" onclick="img_view(${i})" class ="image" src="${images[i].url}">
                <input onclick="downloadImg(${i}, this)" class="material-symbols-outlined downloadBTN" type="button" value="download" id="dl">
            </div>`;

    }
}
function downloadImg(index, elem) {
    elem.value = "downloading";


    url = images[index].download_url;

    const options = {
        Accept: "application/json",
        "Content-Type": "application/json",
        cache: "force-cache",
        method: 'GET',
        mode: 'no-cors'
    };

    fetch(url, options)
        .then((response) => {
            response.blob().then((blob) => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement("a");
                a.href = url;
                a.download = "gallery-" + index + ".jpg";
                a.click();

                elem.value = "download_done";
                setTimeout(() => {
                    elem.value = "download";
                }, 2000);
            });
        })
        .catch((rejected) => {
            elem.value = "wifi_off";
            setTimeout(() => {
                elem.value = "download";
            }, 5000);
        });
}
function img_view(i){
    gallery.style.display="none";
    view.style.display="block";
    close.style.display="block";
    next.style.display="block";
    previous.style.display="block";
    view.innerHTML += `
    <div class="dis_img">
            <img alt="Failed to load" " class ="image" src="${images[i].url}">
            <input onclick="downloadImg(${i}, this)" class="material-symbols-outlined downloadBTN" type="button" value="download" id="dld">
        </div>`;
        console.log(i);
        j=i;

}
previous.addEventListener("click", () =>{
    j--;
    console.log(j);
    if(j==(-1)){
        j=(images.length-1);
    }
    img_view(j);
  
  });
next.addEventListener("click", () =>{
    console.log(j);
    j++;
    if(j==(images.length)) {
        j=0;
    }
    console.log(j);
    img_view(j);
  
  });
  function closeview(){
    close.style.display="none";
view.style.display="none";
gallery.style.display="grid"
next.style.display="none";
    previous.style.display="none";
  }
//   function zoom(event) {
//     event.preventDefault();
  
//     scale += event.deltaY * -0.01;
  
//     // Restrict scale
//     scale = Math.min(Math.max(1, scale), 1.5);
  
//     // Apply scale transform
//     view.style.transform = `scale(${scale})`;
//   }
  
//   let scale = 1;

//   view.onwheel = zoom;
// view.on('click', function() {

//     map.zoomIn();
 
//  });
const image= document.querySelector("#viewer > div > img");
// let click =0;
//  if(click==0){view.addEventListener('dblclick',()=>{
//     view.style.transform="scale(1.4,1.4)";
//     click =1;
//  })}
//  else{
//     view.addEventListener('dblclick',()=>{
//     view.style.transform="scale(0.7,0.7)";
//     click =0;
//  })}
view.addEventListener('dblclick',()=>togglepress);
const togglepress = () => {
    view.classList.toggle("active");
};