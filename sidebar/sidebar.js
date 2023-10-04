document.addEventListener('DOMContentLoaded', () => {
    const toggleSidebar = (sidebar, closeButton, darkOverlay) => {
        sidebar.classList.toggle('show-sidebar');
        closeButton.classList.toggle('spin');
        darkOverlay.hidden = !sidebar.classList.contains('show-sidebar');
    };
    const toggleButton = document.getElementById('toggleButton');
    const closeButton  = document.getElementById('closeButton');
    const sidebar      = document.getElementById('sidebar');
    const darkOverlay  = document.getElementById('darkOverlay');
    
    toggleButton.addEventListener('click', () => {
        toggleSidebar(sidebar, closeButton, darkOverlay);
    });
    darkOverlay.addEventListener('click', () => {
        toggleSidebar(sidebar, closeButton, darkOverlay);
    });
    closeButton.addEventListener('click', () => {
        toggleSidebar(sidebar, closeButton, darkOverlay);
    });
});
