
let linksTo = [["index.html","about.html","pickup.html","report.html","","","login.html"],
                ["Home","About","Pickup","Report","Spanish","English","Log In"]];
                


if(!localStorage.getItem("loggedIn"))localStorage.setItem("loggedIn" , "false")
if(!localStorage.getItem("english"))localStorage.setItem("english" , "true")

function showNavBar() {
    let activePage = location.href.split("/")[location.href.split("/").length - 1]
    let container = document.getElementById("nav-bar")
    if(!container) return;
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
        anchor.setAttribute("onclick" , "showNavBar(); ()=>return false;")
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

        if(localStorage.getItem("english") === "true" && linksTo[1][i] === "English") {
            link.setAttribute("class" , "active-nav-link")
        }
        else if (localStorage.getItem("english") === "false" && linksTo[1][i] === "Spanish") {
            link.setAttribute("class" , "active-nav-link")
        }
        let anchor = document.createElement("a")
        if(localStorage.getItem("loggedIn") === "true" && linksTo[0][i] === "login.html") {
            anchor.href = "account.html"
            let pfp = document.createElement("img")
            pfp.src = "resources/profile.jpeg"
            pfp.setAttribute("class" , "profile-img")
            anchor.setAttribute("onclick" , "showNavBar()")
            link.appendChild(pfp)
            anchor.appendChild(pfp)
        }

        else {
            anchor.href = linksTo[0][i]
            anchor.innerHTML = linksTo[1][i]
            anchor.setAttribute("onclick" , "showNavBar()")
        }
        link.appendChild(anchor)
        
        rightWrapper.appendChild(link)
    }
    navWrapper.appendChild(rightWrapper)

    let logos = ["./resources/fb.png" , "resources/yt.png" , "resources/li.png"]
    let alts = ["facebook logo" , "youtube logo" , "linkedin logo"]
    var footer = document.getElementsByTagName("footer")[0]
    if(!footer) return
    for(var i = 0; i < 3; i++) {
        var a = footer.getElementsByTagName("a")[i + 1]
        var img = a.getElementsByTagName("img")[0]
        img.setAttribute("src" , logos[i])
        img.setAttribute("alt" , alts[0])
        img.setAttribute("height" , "25")
    }

}
function handleLogin() {
    localStorage.setItem("loggedIn" , "true")
    window.location.href = "index.html"
}
function handleLogout() {
    localStorage.setItem("loggedIn" , "false")
    window.location.href = "index.html"
}

function handleReport() {
    window.location.href='report-confirmation.html'
}


window.onload=showNavBar