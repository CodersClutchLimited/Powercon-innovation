document.addEventListener('DOMContentLoaded', () => {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
    const dropdowns = document.querySelectorAll('[id$="-menu-dropdown"]');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetDropdown = document.getElementById(targetId);

            // Close all other dropdowns
            dropdowns.forEach(dropdown => {
                if (dropdown !== targetDropdown) {
                    dropdown.classList.add('hidden');
                }
            });

            // Toggle the clicked dropdown
            targetDropdown.classList.toggle('hidden');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-button') && !e.target.closest('[id$="-menu-dropdown"]')) {
            dropdowns.forEach(dropdown => dropdown.classList.add('hidden'));
        }
    });
});
