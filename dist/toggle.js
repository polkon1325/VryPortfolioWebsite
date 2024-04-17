function toggleWidth(sectionId) {
    // Get all section elements
    const sections = document.querySelectorAll('section');
    let currentIndex = -1;

    // Find the index of the clicked section
    sections.forEach((section, index) => {
        if (section.id === sectionId) {
            currentIndex = index;
        }
    });

    // Toggle width and shadow classes based on the new index
    sections.forEach((section, index) => {
        if (index === currentIndex) {
            section.classList.add('w-full');
        } else {
            section.classList.remove('w-full');
        }
    });

    // Get the div element associated with the current section
    const div = document.getElementById(sectionId + 'Div');
    // Toggle shadow-bottom class on the associated div
    const divs = document.querySelectorAll('div');
    divs.forEach(divElement => {
        if (divElement === div) {
            divElement.classList.add('shadow-bottom');
        } else {
            divElement.classList.remove('shadow-bottom');
        }
    });
}

document.addEventListener('keydown', function(event) {
    // Get all section elements
    const sections = document.querySelectorAll('section');
    let currentIndex = -1;

    // Find the index of the currently active section
    sections.forEach((section, index) => {
        if (section.classList.contains('w-full')) {
            currentIndex = index;
        }
    });

    // Check for left arrow key
    if (event.keyCode === 37) {
        // Move to the previous section
        currentIndex = (currentIndex - 1 + sections.length) % sections.length;
    }
    // Check for right arrow key
    else if (event.keyCode === 39) {
        // Move to the next section
        currentIndex = (currentIndex + 1) % sections.length;
    }

    // Toggle width and shadow classes based on the new index
    sections.forEach((section, index) => {
        if (index === currentIndex) {
            section.classList.add('w-full');
        } else {
            section.classList.remove('w-full');
        }
    });

    // Get the div element associated with the current section
    const div = document.getElementById(sections[currentIndex].id + 'Div');
    // Toggle shadow-bottom class on the associated div
    const divs = document.querySelectorAll('div');
    divs.forEach(divElement => {
        if (divElement === div) {
            divElement.classList.add('shadow-bottom');
        } else {
            divElement.classList.remove('shadow-bottom');
        }
    });
});
