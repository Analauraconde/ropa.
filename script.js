let currentPage = 0;
const pages = document.querySelectorAll(".comic-page");

function nextPage() {
    // Ocultar la página actual
    pages[currentPage].classList.remove("active");

    // Avanzar a la siguiente página con retraso
    currentPage++;
    if (currentPage < pages.length) {
        setTimeout(() => {
            pages[currentPage].classList.add("active");
        }, 500);
    }
}

function restartComic() {
    // Ocultar la página actual y volver al inicio
    pages[currentPage].classList.remove("active");
    currentPage = 0;

    setTimeout(() => {
        pages[currentPage].classList.add("active");
    }, 500);
}

// Iniciar mostrando la primera página
pages[currentPage].classList.add("active");
