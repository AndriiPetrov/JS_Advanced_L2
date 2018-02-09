function red(){
    var paragraph = document.getElementsByTagName("p");
    for(var p = 0; p < paragraph.length; p++){
        paragraph[p].style.border = "red";
    }
}