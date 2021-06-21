
let linksTo = [["index.html","about.html","pickup.html","report.html","login.html","",""],
                ["Home","About","Pickup","Report","Log In","English","Spanish"]];
                


// var fs = require("fs");

// fs.readFile("./resources/bool.txt" , function(err, buf) {
//     console.log(buf.toString());
// });

localStorage.setItem("loggedIn" , "false")
// window.localStorage.setItem
function showNavBar() {
    let activePage = location.href.split("/")[location.href.split("/").length - 1]
    let container = document.getElementById("nav-bar")
    if(!container) return;
    // document.getElementById("test").appendChild(container)
    let navWrapper = document.createElement("div")
    navWrapper.setAttribute("class" , "nav-wrapper")
    container.prepend(navWrapper)
    let leftWrapper = document.createElement("div")
    leftWrapper.setAttribute("class" , "left-wrapper")
    navWrapper.appendChild(leftWrapper)
    for(var i = 0; i < 4; i++) {
        let link = document.createElement("div")
        link.setAttribute("class","nav-link-wrapper")
        if(linksTo[0][i] === activePage) 
            link.setAttribute("class" , "active-nav-link")
        let anchor = document.createElement("a")
        anchor.href= linksTo[0][i]
        anchor.innerHTML = linksTo[1][i]
        anchor.setAttribute("onclick" , "showNavBar()")
        link.appendChild(anchor)
        leftWrapper.appendChild(link)
    }
    navWrapper.appendChild(leftWrapper)
    rightWrapper = document.createElement("div")
    rightWrapper.setAttribute("class" , "right-wrapper")
    navWrapper.appendChild(rightWrapper)
    for(var i = 4; i < linksTo[0].length; i++) {
        let link = document.createElement("div")
        link.setAttribute("class","nav-link-wrapper")
        if(linksTo[0][i] === activePage) 
            link.setAttribute("class" , "active-nav-link")
        let anchor = document.createElement("a")
        if(localStorage.getItem("loggedIn") === "true" && linksTo[0][i] === "login.html") {
            anchor.href = "account.html"
            let pfp = document.createElement("img")
            pfp.src = "resources/profilePic.jpg"
            pfp.setAttribute("class" , "profile-img")
            anchor.setAttribute("onclick" , "showNavBar()")
            link.appendChild(pfp)
        }
        else {
            anchor.href = linksTo[0][i]
            anchor.innerHTML = linksTo[1][i]
        anchor.setAttribute("onclick" , "showNavBar()")
        link.appendChild(anchor)
        }
        rightWrapper.appendChild(link)
    }
    navWrapper.appendChild(rightWrapper)

}
function handleLogin() {
    localStorage.setItem("loggedIn" , "true")
    loggedIn = true
    window.location.href = "index.html"
    // showNavBar()
}
window.onload=showNavBar