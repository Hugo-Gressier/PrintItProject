const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et événements</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let slideIndex = 0

//Fonction permettant l'actualisant de l'image, le texte et les bullet points
function slideUpdate() {
    const bannerImg = document.querySelector('.banner-img')
    const tagLine = document.querySelector('#banner p')
    const dot = document.querySelectorAll('.dot')

    bannerImg.src = slides[slideIndex].image
    tagLine.innerHTML = slides[slideIndex].tagLine

    dot.forEach(dotNotSelected => {
        dotNotSelected.classList.remove('dot_selected')
    })

    dot[slideIndex].classList.add('dot_selected')
}

//Fonction permettant le défilement infini du slider
function slideSwitch(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length
    slideUpdate()
}

//Flèche gauche
const arrowLeft = document.querySelector('.arrow_left')
arrowLeft.addEventListener('click', function () {
    slideSwitch(-1)
})

//Flèche droite
const arrowRight = document.querySelector('.arrow_right')
arrowRight.addEventListener('click', function () {
    slideSwitch(1)
})

const dots = document.querySelector(".dots")

//Boucle permettant l'ajout de bullet points en fonction du nombre d'images
for (let i = 0; i < slides.length; i++) {
    let newDot = document.createElement("div")
    newDot.classList.add("dot")
    dots.appendChild(newDot)

    newDot.addEventListener('click', function () {
        slideIndex = i
        slideUpdate()
    })
}

//Permet d'actualiser le slider dès l'arrivée sur la page
slideUpdate()