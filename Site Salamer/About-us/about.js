const burgerMenu = document.querySelector(".burger-menu")
const navMenu = document.querySelector(".navigation-menu")
const navBar = document.querySelector(".navbar")
const body = document.querySelector("body")

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle("active")
    burgerMenu.classList.toggle("inactive")
    navMenu.classList.toggle("closed-nav")
    body.classList.toggle("active")
})

let statCounters = document.querySelectorAll(".counter")
let interval = 400;

statCounters.forEach((statBubble) => {
    let startValue = 0;
    let endValue = parseInt(statBubble.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startValue += 1;
        statBubble.textContent = startValue;
        if (startValue == endValue) clearInterval(counter);
    }, duration)
});

const textDivs = document.querySelectorAll(".text-div");
const lineBreaks = document.querySelectorAll(".small-hr")
const backgroundIcons = document.querySelectorAll(".background-icon")
const navbarLogo = document.querySelector(".navbar-logo")

window.addEventListener('scroll', () => {
    let scrollProg = Math.floor(((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100))
    if (scrollProg > 3) {
        navBar.classList.add("scrolled")
        navbarLogo.style.display = "block"
    } else {
        navBar.classList.remove("scrolled")
        navbarLogo.style.display = "none"
    }
    if (scrollProg < 30) {
        textDivs[0].classList.remove("blurred")
        textDivs[1].classList.add("blurred")
        textDivs[2].classList.add("blurred")
        backgroundIcons[0].classList.remove("dis-none")
        backgroundIcons[1].classList.add("dis-none")
        backgroundIcons[2].classList.add("dis-none")
    }
    if (scrollProg > 30 && scrollProg < 44) {
        textDivs[0].classList.add("blurred")
        textDivs[1].classList.remove("blurred")
        textDivs[2].classList.add("blurred")
        backgroundIcons[0].classList.add("dis-none")
        backgroundIcons[1].classList.remove("dis-none")
        backgroundIcons[2].classList.add("dis-none")
    }
    if (scrollProg > 44) {
        textDivs[0].classList.add("blurred")
        textDivs[1].classList.add("blurred")
        textDivs[2].classList.remove("blurred")
        backgroundIcons[0].classList.add("dis-none")
        backgroundIcons[1].classList.add("dis-none")
        backgroundIcons[2].classList.remove("dis-none")
    }
    if(scrollProg > 70) {
        lineBreaks.forEach(hr => {
            hr.classList.add("extended")
        })
    }
})

const phoneNumber = document.querySelector(".phone-number");
const mailIcon = document.querySelector(".mail");
const socialMedia = document.querySelector(".social-media")
const phoneIcon = document.querySelector(".phone")
const companyEmail = document.querySelector(".company-email")

const classToggler = (target1, target2, target3, class1, class2) => {
    target1.classList.toggle(class1)
    target2.classList.toggle(class1)
    target3.classList.toggle(class2)
}

mailIcon.addEventListener('mouseenter', () => {
    classToggler(socialMedia, phoneIcon, companyEmail, "very-blurred", "hidden")
})
mailIcon.addEventListener('mouseleave', () => {
    classToggler(socialMedia, phoneIcon, companyEmail, "very-blurred", "hidden")
})

phoneIcon.addEventListener('mouseenter', () => {
    classToggler(socialMedia, mailIcon, phoneNumber, "very-blurred", "hidden")
})

phoneIcon.addEventListener('mouseleave', () => {
    classToggler(socialMedia, mailIcon, phoneNumber, "very-blurred", "hidden")
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
const gifs = document.querySelectorAll(".gif")

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

mouseEnterFunc(menuItems[0], gifs[0])
mouseEnterFunc(menuItems[1], gifs[1])
mouseEnterFunc(menuItems[2], gifs[2])
mouseEnterFunc(menuItems[3], gifs[3])
mouseOutFunc(menuItems[0], gifs[0])
mouseOutFunc(menuItems[1], gifs[1])
mouseOutFunc(menuItems[2], gifs[2])
mouseOutFunc(menuItems[3], gifs[3])