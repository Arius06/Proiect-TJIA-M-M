const burgerMenu = document.querySelector(".burger-menu")

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle("active")
    burgerMenu.classList.toggle("inactive")
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

window.addEventListener('scroll', () => {
    let scrollProg = Math.floor(((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100))
    console.log(scrollProg);

    if (scrollProg < 30) {
        textDivs[0].classList.remove("blurred")
        textDivs[1].classList.add("blurred")
        textDivs[2].classList.add("blurred")
    }
    if (scrollProg > 30 && scrollProg < 44) {
        textDivs[0].classList.add("blurred")
        textDivs[1].classList.remove("blurred")
        textDivs[2].classList.add("blurred")
    }
    if (scrollProg > 44) {
        textDivs[0].classList.add("blurred")
        textDivs[1].classList.add("blurred")
        textDivs[2].classList.remove("blurred")
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

