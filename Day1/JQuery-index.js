let getImageContainer = $(".container");
let imag = getImageContainer.find("#taksOne");
let getButton = $("#photo_button");
const numberOfPhoto = 7 ;
let i = 2 ;

function changePhoto () {
    $(this).attr("src",`./img/${i}.jpg`).fadeIn(1000);
    i++;
    if (i > numberOfPhoto) i = 1 ; 
    // console.log(i);
}
let photoInterval = setInterval(()=>{
    imag.fadeOut(1000 , changePhoto);
},1000);
getButton.on("click" , ()=>{
    clearInterval(photoInterval);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let imagOneList = $("#first_imag");
let imagTwoList = $("#second_imag");
let imagThreeList = $("#third_imag");

var textToAdd = "<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>";

function checkIfTheTextExists(e) {
    if  ( $(this).find("p").length === 0 ) {
        $(this).append('<p class="text_box"></p>');
        if ($(this).find(".text_box").length === 0){
            alert("You have problem in your code wrong logic !!");
        }
        else {
            $(this).find("p").append(textToAdd);
            $(this).find("p").find("span").attr("class","text");
        }
    }
    else {
        $(this).find("p").remove();
    }
    console.log (e);
    e.stopPropagation();
}

imagOneList.on("click" , ()=>{
    console.log(document);
    $("#second_imag").toggleClass("red",function(){
        alert("helloooooe");  
    });
});
imagTwoList.on("click" , checkIfTheTextExists);
imagThreeList.on("click" ,checkIfTheTextExists);
// imagOneList.find(".text").length