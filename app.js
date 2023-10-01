const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from all buttons
    btns.forEach((button) => {
      button.classList.remove('active');
      e.target.classList.add('active');
    });
    // remove active from articles
    articles.forEach((article) => {
      article.classList.remove('active');
    });
    const content = document.getElementById(id);
    content.classList.add('active');
  }
});
