const openup = document.getElementById('openup');
const extra = document.getElementById('extra');
openup.addEventListener('click', () => {
    extra.classList.toggle('opens');
});
function moveOut(){
    window.location.href = 'contact.html';
};
function projectMove(){
    window.location.href = 'projects.html';
};
function aboutMove(){
    window.location.href = 'about.html';
};