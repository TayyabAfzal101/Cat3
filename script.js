const cats = document.querySelectorAll('.cat');
let found = 0;

cats.forEach(cat => {
  cat.addEventListener('click', () => {
    if (!cat.classList.contains('found')) {
      cat.classList.add('found');
      cat.style.display = 'none';
      found++;
      document.getElementById('score').textContent = `Cats found: ${found} / 5`;
      if (found === 5) {
        document.getElementById('win').style.display = 'block';
      }
    }
  });
});