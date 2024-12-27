// Function to close all accordion items
function closeAllAccordions() {
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        const content = item.querySelector('.accordion-content');
        content.style.maxHeight = null;
    });
}

// Function to open a specific accordion item by ID
function openAccordionById(id) {
    const content = document.getElementById(id);
    if (content) {
        const item = content.closest('.accordion-item');
        if (item && !item.classList.contains('active')) {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}

// Add click event listener to each accordion header
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from propagating to the document
        const item = header.closest('.accordion-item');

        // Toggle the clicked accordion item's open state
        const isActive = item.classList.contains('active');
        closeAllAccordions(); // Close all accordions
        if (!isActive) {
            item.classList.add('active');
            const content = item.querySelector('.accordion-content');
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// Add click event listener to the document to close accordions when clicking outside
document.addEventListener('click', function() {
    closeAllAccordions();
});

// Open accordion based on URL hash when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash.substring(1); // Remove the '#' from the hash
    if (hash) {
        openAccordionById(hash);
    }
});
