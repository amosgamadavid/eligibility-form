function nextPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
  document.getElementById(`page${pageNumber}`).style.display = 'block';
}

function prevPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
  document.getElementById(`page${pageNumber}`).style.display = 'block';
}
