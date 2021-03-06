const baseUrl = "https://foreverabroad.flopow.eu/wp-json/wp/v2/posts?_embed";
const featuredUrl = baseUrl + "&categories=3";
const carousel = document.querySelector(".carousel_track");

async function getPosts(url) {
    try {
        const response = await fetch(url);

        const post = await response.json();

        createHtml(post);


    } catch (error) {
        carousel.innerHTML = displayError(
            "An error occured when calling the API"
        );
    }
}

getPosts(featuredUrl);

function createHtml(post) {

    carousel.innerHTML = "";

    post.forEach(function (post) {
        carousel.innerHTML += `
  
    <a href="details.html?id=${post.id}" class="carousel_slide current-slide">
    <div class="slide_overlay">
    <h3>${post.title.rendered}</h3>
    <p>${post.excerpt.rendered}</p>
  </div>
  <img
    class="carousel_image"
    src="${post._embedded['wp:featuredmedia']['0'].source_url}"
    alt=""
  />
                </a>        
    `;
    })


    const nextButton = document.querySelector('.carousel_button-right');
    const prevButton = document.querySelector('.carousel_button-left');
    const carouselContainer = document.querySelector('.carousel_track');
    const slides = Array.from(carouselContainer.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    let slidesPage = Math.ceil(slides.length);
    let slide = 0;
    let movePer = slideWidth + 20;  //+20 for the 20px gap between slides
    let maxMove = movePer * (slidesPage - 1);

    // Tablet view	
    let tabletView = window.matchMedia("(min-width: 750px)");
    if (tabletView.matches) {
        maxMove = movePer * (slidesPage - 2);
    }
    //desktop View
    let desktopView = window.matchMedia("(min-width: 1150px)");
    if (desktopView.matches) {
        maxMove = movePer * (slidesPage - 3);
    }
    //Next slide function
    let next = () => {
        slide = slide + movePer;
        if (slides == 1) { slide = 0; }
        for (const i of slides) {
            if (slide > maxMove) { slide = slide - movePer; }
            i.style.left = '-' + slide + 'px';
        }

    }
    //Previous slide function
    let previous = () => {
        slide = slide - movePer;
        if (slide <= 0) { slide = 0; }
        for (const i of slides) {
            if (slidesPage > 1) {
                i.style.left = '-' + slide + 'px';
            }
        }
    }

    //Hide arrows on last slide
    const hideShowArrows = () => {
        if (slide === 0) {
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden');
        } else if (slide === maxMove) {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.add('is-hidden');
        } else {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.remove('is-hidden');
        }
    }

    //Next slide
    nextButton.addEventListener('click', e => {

        next();
        hideShowArrows();
    })

    //Previous slide
    prevButton.addEventListener('click', e => {

        previous();
        hideShowArrows();
    })

}



