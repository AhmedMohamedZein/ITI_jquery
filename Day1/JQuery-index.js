let getImageContainer = $(".container");
let imag = getImageContainer.find("#taksOne");
let getButton = $("button");
const numberOfPhoto = 7 ;
let i = 2 ;

function changePhoto () {
    $(this).attr("src",`./img/${i}.jpg`).fadeIn(2000);
    i++;
    if (i > numberOfPhoto) i = 1 ; 
    // console.log(i);
}
let photoInterval = setInterval(()=>{
    imag.fadeOut(2000 , changePhoto);
},2000);
getButton.on("click" , ()=>{
    clearInterval(photoInterval);
});
