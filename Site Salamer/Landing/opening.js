const burgerMenu = document.querySelector(".burger-menu")
const inviteCircle = document.querySelector(".siteinvite-circle")
const trailer = document.querySelector(".mouse-trailer")
const docBody = document.querySelector("body")
const navMenu = document.querySelector(".navigation-menu")


burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle("active")
    burgerMenu.classList.toggle("inactive")
    navMenu.classList.toggle("closed-nav")
    docBody.classList.toggle("active")
})

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
const menuGifs = document.querySelectorAll(".menu-gif")

const mouseEnterFunc = (target, anim) => {
    target.addEventListener("mouseover", () => {
        anim.classList.remove("menu-inactive")
    })
}

const mouseOutFunc = (target, anim) => {
    target.addEventListener("mouseout", () => {
        anim.classList.add("menu-inactive")
    })
}

mouseEnterFunc(menuItems[0], menuGifs[0])
mouseEnterFunc(menuItems[1], menuGifs[1])
mouseEnterFunc(menuItems[2], menuGifs[2])
mouseEnterFunc(menuItems[3], menuGifs[3])
mouseOutFunc(menuItems[0], menuGifs[0])
mouseOutFunc(menuItems[1], menuGifs[1])
mouseOutFunc(menuItems[2], menuGifs[2])
mouseOutFunc(menuItems[3], menuGifs[3])

inviteCircle.addEventListener('click', () => {
    inviteCircle.classList.add("started")
})

inviteCircle.addEventListener('mouseover', () => {
    window.onmousemove = e => {
    const x = e.pageX - trailer.offsetWidth / 2,
        y = e.pageY - trailer.offsetHeight / 2;
    trailer.style.transform = `translate(${x}px, ${y}px)`
}
    trailer.style.opacity = '.5';
})

inviteCircle.addEventListener('mouseleave', () => {
    trailer.style.opacity = '0';
})

const navBar = document.querySelector(".navbar")
const gifs = document.querySelectorAll('.gif');
window.addEventListener('scroll', () => {
    let scrollProg = Math.floor(((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100));
    scrollProg > 5 ? navBar.classList.add("scrolled") : navBar.classList.remove("scrolled");

    for (let i = 0; i < gifs.length - 1; i++) {
        if (scrollProg >= 40 && scrollProg <= 70) {
            setTimeout(()=> {
                gifs[i].style.opacity = 1
            }, i*1000)
        }
    }
    if (scrollProg > 80 ) gifs[3].style.opacity = 1
})