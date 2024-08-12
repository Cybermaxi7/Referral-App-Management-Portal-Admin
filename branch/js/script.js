document.addEventListener('DOMContentLoaded', () => {
    const userBtn = document.getElementById('userBtn');
    const prospectBtn = document.getElementById('prospectBtn');
    const suspendBtn = document.getElementById('suspendBtn');
    const reactivateBtn = document.getElementById('reactivateBtn');

    const branchUserSuspend = document.getElementById('branch-user-suspend');
    const branchProspectSuspend = document.getElementById('branch-prospect-suspend');
    const branchProspectReactivate = document.getElementById('branch-prospect-reactivate');

    function showPage(pageId) {
        // Hide all pages
        branchUserSuspend.style.display = 'none';
        branchProspectSuspend.style.display = 'none';
        branchProspectReactivate.style.display = 'none';

        // Show the requested page
        document.getElementById(pageId).style.display = 'block';
    }

    // Event listeners for button clicks
    userBtn.addEventListener('click', () => {
        showPage('branch-user-suspend');
    });

    prospectBtn.addEventListener('click', () => {
        showPage('branch-prospect-suspend');
    });

    userBtn.addEventListener('click', () => {
        showPage('branch-user-suspend');
    });
    prospectBtn.addEventListener('click', () => {
        showPage('branch-prospect-suspend');
    });

    suspendBtn.addEventListener('click', () => {
        showPage('branch-prospect-reactivate');
    });

    reactivateBtn.addEventListener('click', () => {
        showPage('branch-user-suspend');
    });

    // Initially show the user page
    showPage('branch-user-suspend');
});
function showPage(pageId) {
    // Hide all pages with transition
    document.querySelectorAll('.container').forEach(container => {
        container.classList.add('hide');
        container.classList.remove('show');
    });

    // Show the requested page with transition
    const pageToShow = document.getElementById(pageId);
    pageToShow.classList.remove('hide');
    pageToShow.classList.add('show');
}
