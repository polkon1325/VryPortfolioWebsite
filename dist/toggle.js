function toggleWidth(sectionId) {
    // Get the section element that was clicked
    const clickedSection = document.getElementById(sectionId);
    // Get all section elements
    const sections = document.querySelectorAll('section');

    // Iterate through all sections
    sections.forEach(section => {
        // Toggle w-full class based on whether it's the clicked section
        if (section === clickedSection) {
            section.classList.remove('w-24');
            section.classList.add('w-full');
        } else {
            section.classList.remove('w-full');
            section.classList.add('w-24');
        }
    });
}
