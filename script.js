window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
     document.getElementById("menubar2").style.top = "0";
 } else {
     document.getElementById("menubar2").style.top = "-200px";
 }
};




function show() {
    document.getElementById("xmark").style.display = "block";
    document.getElementById("bars").style.display = "none";
    document.getElementById("menu3").style.height = "auto";
    // document.getElementById("vid").style.height = "300px";
};

function hide() {
    
    document.getElementById("bars").style.display = "block";
    document.getElementById("xmark").style.display = "none";
    document.getElementById("menu3").style.height = "0px";
    // document.getElementById("vid").style.height = "300px";
};



document.getElementById("theblog").style.height = "0px";

function showBlog() {
    if(document.getElementById("theblog").style.height == "0px"){
        document.getElementById("theblog").style.height = "70px";
    }
    else{
        document.getElementById("theblog").style.height = "0px";
    }
}



document.getElementById("thepage").style.height = "0px";

function showPage() {
    if(document.getElementById("thepage").style.height == "0px"){
        document.getElementById("thepage").style.height = "40px";
    }
    else{
        document.getElementById("thepage").style.height = "0px";
    }
}


