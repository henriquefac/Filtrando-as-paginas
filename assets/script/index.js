function changeTheme() {
    var nav = document.getElementsByTagName('nav')
    var body = document.getElementsByTagName('body')
    var btn = document.getElementsByTagName('button')
    console.log(btn);
    console.log(body[0]);
    if (nav[0].className == "navbar navbar-expand-md fixed-top navbar-light bg-light") {
        nav[0].className += " navbar-dark bg-dark"
    } else {
        nav[0].className = "navbar navbar-expand-md fixed-top navbar-light bg-light"
    }
}