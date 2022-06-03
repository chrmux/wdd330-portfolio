let theme = document.getElementById('theme');

theme.onclick = () => {
  theme.classList.toggle('fa-sun');
  theme.classList.toggle('fa-moon');

  if (theme.classList.contains('fa-sun')) {
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }
};