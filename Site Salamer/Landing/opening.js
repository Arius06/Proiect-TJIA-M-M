const burgerMenu = document.querySelector(".burger-menu")
const inviteCircle = document.querySelector(".siteinvite-circle")
const trailer = document.querySelector(".mouse-trailer")


burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle("active")
    burgerMenu.classList.toggle("inactive")
})

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