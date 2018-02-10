function red() {
    var paragraph = document.getElementsByTagName("p");
    for (var p = 0; p < paragraph.length; p++) {
        paragraph[p].setAttribute("style", "background-color :red;");
    }
}

function green(){
    var a = document.getElementsByTagName("a");
    for(var i = 0; i < a.length; i++){
        // a[i].setAttribute("style", "color: green");
        a[i].setAttribute("style", "border: 1px solid green");
    }
}

function div(){
    var div = document.getElementById("test_div");
    div.setAttribute("style", "color: #c34e84");
}