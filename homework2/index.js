var count = 0;
function method1() {

    // var body1 = document.getElementsByTagName("body");
    var p1 = document.createElement("p");
    p1.innerHTML = "New Paragraph";
    document.body.appendChild(p1);


    var childNo = document.body.childNodes;
    count++;
    if (count == 10) {
        for (var i = 0; i < childNo.length; i++) {
            if (childNo[i].nodeName == "P") {
                document.body.removeChild(childNo[i]);
                i--;
            }
        }
        count = 0;
    }

}
// function method2(){
//     var p2 = document.body.querySelectorAll("p");
//     if (p2.length > 5) {
//         for (var i = 0; i < p.length; i++) {
//             document.body.removeChild(p2);
//         }
//     }
// }