const searchOverlay = document.querySelector('.search-overlay');
document.querySelector('.search-toggle').addEventListener('click', () => {
  searchOverlay.hidden = false;
  searchOverlay.querySelector('input').focus();
});
document.querySelector('.close-search').addEventListener('click', () => { searchOverlay.hidden = true; });
document.addEventListener('keydown', event => { if (event.key === 'Escape') searchOverlay.hidden = true; });

document.querySelectorAll('.price button').forEach(button => {
  button.addEventListener('click', () => {
    button.innerHTML = '✓';
    button.setAttribute('aria-label', 'تمت الإضافة');
  });
});
