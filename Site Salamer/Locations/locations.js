const navMenu = document.querySelector(".navigation-menu")
const burgerMenu = document.querySelector(".burger-menu")
const body = document.querySelector("body")
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle("active")
    burgerMenu.classList.toggle("inactive")
    navMenu.classList.toggle("closed-nav")
    body.classList.toggle("active")
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

google.maps.event.addDomListener(window, 'load', initMap);

function initMap() {
    let mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(47.0252033, 28.8073164),
    }

    let mapElement = document.querySelector('#map');
    let map = new google.maps.Map(mapElement, mapOptions)

    const points = [
        {
            position: {lat: parseFloat(46.9973736), lng: parseFloat(28.8330723)},
        },
        {
            position: {lat: parseFloat(47.0177018), lng: parseFloat(28.8382191)},
        },
        {
            position: {lat: parseFloat(47.0185129), lng: parseFloat(28.8445256)}
        },
        {
            position: {lat: parseFloat(46.9769532), lng: parseFloat(28.8558133)}
        },
        {
            position: {lat: parseFloat(46.9885918), lng: parseFloat(28.8501088)}
        },
        {
            position: {lat: parseFloat(46.9784343), lng: parseFloat(28.8526052)}
        },
        {
            position: {lat: parseFloat(46.9784307), lng: parseFloat(28.8647146)}
        },
        {
            position: {lat: parseFloat(47.0490955), lng: parseFloat(28.8602051)}
        },
        {
            position: {lat: parseFloat(47.0352475), lng: parseFloat(28.8602471)}
        },
        {
            position: {lat: parseFloat(47.0592245), lng: parseFloat(28.845629)}
        },
        {
            position: {lat: parseFloat(47.0421084), lng: parseFloat(28.8848108)}
        },
        {
            position: {lat: parseFloat(47.0333093), lng: parseFloat(28.7764687)}
        },
        {
            position: {lat: parseFloat(47.0027038), lng: parseFloat(28.8137076)}
        },
        {
            position: {lat: parseFloat(47.0027038), lng: parseFloat(28.8137076)}
        }
    ]

    for (let i = 0; i < points.length; i++) {
        const marker = new google.maps.Marker({
            position: points[i].position,
            map: map,
        });
    }

}