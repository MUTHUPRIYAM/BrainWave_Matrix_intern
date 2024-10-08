var list = document.getElementsByTagName('li');
for (var i = 0; i < list.length; i++) {
    var span = document.createElement("span");
    span.className = "close";
    var close = document.createTextNode("X");
    span.appendChild(close);
    list[i].appendChild(span);

}
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var d = this.parentElement;
        d.style.display = "none";
    }
}
function mylist() {
    var li = document.createElement("li");
    var mytxt = document.getElementById("mytext").value;
    var t = document.createTextNode(mytxt);
    li.appendChild(t);
    if (mytxt === "") {
        alert("Input Field is Empty");
    } else {
        document.getElementById("myul").appendChild(li); // Use 'li' (the element), not a string
    }


    var list = document.getElementsByTagName('li');
    for (var i = 0; i < list.length; i++) {
        var span = document.createElement("span");
        span.className = "close";
        var close = document.createTextNode("X");
        span.appendChild(close);
        list[i].appendChild(span);

    }
}


