function doSomething() {
    if (!document.getElementById("demo").innerHTML)
        document.getElementById("demo").innerHTML = "Hello JavaScript!";
    else
        document.getElementById("demo").innerHTML = ""
}