const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
        item.onmouseout = () => {
            menu.dataset.activeIndex = 5;
        }
    })

const menuItems = document.querySelectorAll(".menu-item")
const gifs = document.querySelectorAll(".gif")

const mouseEnterFunc = (target, anim) => {
    target.addEventListener("mouseover", () => {
        anim.classList.remove("inactive")
    })
}

const mouseOutFunc = (target, anim) => {
    target.addEventListener("mouseout", () => {
        anim.classList.add("inactive")
    })
}

mouseEnterFunc(menuItems[0], gifs[0])
mouseEnterFunc(menuItems[1], gifs[1])
mouseEnterFunc(menuItems[2], gifs[2])
mouseEnterFunc(menuItems[3], gifs[3])
mouseOutFunc(menuItems[0], gifs[0])
mouseOutFunc(menuItems[1], gifs[1])
mouseOutFunc(menuItems[2], gifs[2])
mouseOutFunc(menuItems[3], gifs[3])