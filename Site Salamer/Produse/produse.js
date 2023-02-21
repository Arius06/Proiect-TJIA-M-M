const burgerMenu = document.querySelector(".burger-menu")
const navMenu = document.querySelector(".navigation-menu")
const track = document.querySelector(".slideshow-products")
const line = document.querySelector(".line-break")
const images = document.querySelectorAll(".image")
const pageHeader = document.querySelector(".text-header")
const categoryTitle = document.getElementById("category")
const infoText = document.getElementById("info")

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle("active")
    burgerMenu.classList.toggle("inactive")
    navMenu.classList.toggle("closed-nav")
})

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0"
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;

    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    nextPercentage = Math.min(nextPercentage, 0);
    nextPercentage = Math.max(nextPercentage, -94);

    track.dataset.percentage = nextPercentage;

    for(const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${nextPercentage + 100}% center`
        }, {duration: 1200, fill:"forwards"});
    }

    track.animate({
        transform: `translate(${nextPercentage}%, -40%)`
    }, {duration: 1200, fill:"forwards"});

}

images.forEach(item => {
    item.addEventListener('mouseover', () => {
        line.classList.add("hovered");
        pageHeader.classList.add("header-hovered")
    })
    item.addEventListener('mouseout', () => {
        line.classList.remove("hovered");
        pageHeader.classList.remove("header-hovered")
    })
})

images.forEach(item => {
    item.addEventListener('mouseout', () => {
        categoryTitle.textContent = ""
        infoText.textContent = ""
    })
})

images[0].addEventListener('mouseover', () => {
    categoryTitle.textContent = "Produse afumat-fierte"
    infoText.textContent = "Specialități afumat-fierte de calitatea superioară preparate din carne de porc, carne de vită și decor de condimente naturale. Aperitive excelente pentru masa de sărbători, cabanos de porc, mușchiuleț de porc condimentat, jambon de porc Țărănesc, jambon de porc Bavarez, antricot de vită, piept Rustic și altele."
})
images[1].addEventListener('mouseover', () => {
    categoryTitle.textContent = "Salam crud-afumat"
    infoText.textContent = "Produse crud-afumate cu gust unic preparate din carne de porc, carne de vită, carne de pasăre, slănină de porc și condimente. Pentru o masă rapidă și delicioasă alege salamul Iberia, Milano, Moscova, Campanello, Dacia, De Mereni, Barcelona, Nobil, și cârnăciori la bere de porc și de pui."
})
images[2].addEventListener('mouseover', () => {
    categoryTitle.textContent = "Salam fiert-afumat"
    infoText.textContent = "Produse fiert-afumate de calitate superioară preparate din carne de porc, carne de vită, piept de pui, slănină de porc și condimente. Alege salamul De Mereni, De Moldova, Vienez, De Moscova și Făgăraș, pentru o masă plină de gust."
})
images[3].addEventListener('mouseover', () => {
    categoryTitle.textContent = "Crenvurști, parizere"
    infoText.textContent = "Produse de calitatea I și calitatea superioară preparate din carne de porc, carne de vită, carne de pasăre și condimente. Acestea includ crenvurști Lacta, Puișor, Fine, Salamer, parizer Doktorskaia, parizer Preferat, parizer Lacta, safalade Voinicești și De calitatea întâi, care aduc pe mese un deliciu rapid și gustos."
})
images[4].addEventListener('mouseover', () => {
    categoryTitle.textContent = "Salam semi-afumat"
    infoText.textContent = "Carne de porc, carne de vită, carne de pasăre, slănină de porc și condimente care s-au combinat în produse semiafumate de calitatea I și calitatea superioară. Delectează-te cu salamul Aperitiv de Mereni, De Casă, Frugal, Lunchmeat, Oltenesc, Cabanos de Mereni, Lukka, și De Provincie."
})
images[5].addEventListener('mouseover', () => {
    categoryTitle.textContent = "Șuncă și rulade"
    infoText.textContent = "Produse fierte și afumat-fierte de calitatea superioară preparate din carne de porc, carne de vită, carne de pasăre și condimente. Alege un produs preferat de toată familia, cum ar fi rulada Bavareză, Trio, șuncă De Mereni și Victoria."
})
images[6].addEventListener('mouseover', () => {
    categoryTitle.textContent = "Tobe, sângerete, pate"
    infoText.textContent = "Produse aromate și condimentate de calitatea I și calitatea superioară preparate din carne de porc, carne de vită și condimente. Încearcă un gust tradițional – sângerete De Casă, toba moldovenească (Saltison de porc), toba Salamer și pate Salamer."
})

// drag guide

const dragGuide = document.querySelector(".gif-drag")
const dragGif = document.querySelector(".mouse-gif")

window.addEventListener('mousedown', () => {
    dragGuide.classList.add("drag-started");
    dragGif.classList.add("drag-started");
})

//menu js
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